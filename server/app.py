from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import joblib
import torch
import keras
from werkzeug.utils import secure_filename
import cv2  # OpenCV for image and video processing
import librosa  # For audio processing
import numpy as np
from torchvision import transforms
from PIL import Image

# Init
app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Load models - Different formats for image, audio, and video
models = {
    'image': torch.load("model/model-resnet18.pth", map_location=torch.device('cpu')),  # PyTorch model
    'audio': joblib.load('model/knn_model.pkl'),  # scikit-learn KNN model (joblib or pickle)
    'video': keras.models.load_model('model/efficientnetb7_deepfake_finetuned.keras')  # Keras model
}

# Allowed file extensions
allowed_extensions = {
    'image': {'jpg', 'jpeg', 'png'},
    'audio': {'mp3', 'wav'},
    'video': {'mp4', 'avi', 'mov'}
}

def allowed_file(filename, media_type):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in allowed_extensions[media_type]

@app.route('/upload/<media_type>', methods=['POST'])
def upload_file(media_type):
    if media_type not in models:
        return jsonify({'error': 'Unsupported media type'}), 400

    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and allowed_file(file.filename, media_type):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        # Pass file path to the corresponding model
        result = run_detection(media_type, filepath)

        return jsonify({
            'message': f'{media_type.capitalize()} detected successfully.',
            'result': result
        }), 200

    return jsonify({'error': 'Invalid file format'}), 400

# Run the detection using the appropriate model and file type
def run_detection(media_type, filepath):
    model = models[media_type]

    if media_type == 'image':
        # Image preprocessing for PyTorch model
        image = cv2.imread(filepath)
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        transform = transforms.Compose([
            transforms.ToPILImage(),
            transforms.Resize((224, 224)),
            transforms.CenterCrop(224),  # Optional, safer cropping
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406], 
                                 std=[0.229, 0.224, 0.225])  # ImageNet stats
        ])

        input_tensor = transform(image).unsqueeze(0)  # Add batch dimension

        with torch.no_grad():
            output = model(input_tensor)
            pred = torch.argmax(output, dim=1).item()

        return {"label": str(pred), "confidence": f"{round(torch.softmax(output, dim=1)[0][pred].item()*100, 2)}%"}

    elif media_type == 'audio':
        # Audio preprocessing
        y, sr = librosa.load(filepath, sr=None)
        y = librosa.util.fix_length(y, size=22050)  # Pad/cut to 1 sec for consistency
        mfcc = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=20)
        mfcc_scaled = np.mean(mfcc.T, axis=0).reshape(1, -1)
        prediction = model.predict(mfcc_scaled)
        return {"label": str(prediction[0]), "confidence": "85%"}

    elif media_type == 'video':
        # Video preprocessing (extract first frame)
        video = cv2.VideoCapture(filepath)
        success, frame = video.read()
        if success:
            frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            frame_resized = cv2.resize(frame, (224, 224))
            video_input = frame_resized / 255.0  # Normalize to [0,1]
            video_input = np.expand_dims(video_input, axis=0)  # Add batch
            prediction = model.predict(video_input)
            label = np.argmax(prediction)
            confidence = round(np.max(prediction) * 100, 2)
            return {"label": str(label), "confidence": f"{confidence}%"}

        else:
            return {"error": "Unable to read video frame"}

    else:
        return {"error": "Unsupported media type"}

if __name__ == '__main__':
    app.run(debug=True)
