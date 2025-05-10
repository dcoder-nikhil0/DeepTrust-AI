import React, { useState } from "react";
import { Tabs, Tab, Card, Typography, Button, Box } from "@mui/material";
import { CircleFadingPlus } from "lucide-react";
import { FaInfoCircle } from "react-icons/fa";

const MediaUploadTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [error, setError] = useState(null);

  const mediaTypes = ["image", "audio", "video"];
  const currentType = mediaTypes[tabIndex];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setError(null);

    // Validate the file type based on the selected tab
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    const validAudioTypes = ["audio/mpeg", "audio/wav", "audio/ogg"];
    const validVideoTypes = ["video/mp4", "video/webm", "video/ogg"];

    let valid = false;
    if (currentType === "image") {
      valid = validImageTypes.includes(file.type);
    } else if (currentType === "audio") {
      valid = validAudioTypes.includes(file.type);
    } else if (currentType === "video") {
      valid = validVideoTypes.includes(file.type);
    }

    if (valid) {
      setSelectedFile(file);
      setResult(null); // Clear result if new file is selected
    } else {
      setSelectedFile(null);
      setError(`Invalid file type. Please upload a valid ${currentType} file.`);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("file", selectedFile);
    setIsDetecting(true);
    try {
      const response = await fetch(
        `http://localhost:5000/upload/${currentType}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsDetecting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left Side About */}
      <Card className="p-6 w-full md:w-1/2 ">
        <div className="flex items-center gap-2 mb-4 mt-20">
          <FaInfoCircle className="text-blue-500 text-xl" />
          <Typography variant="h6" className="text-blue-900">
            How to Use
          </Typography>
        </div>
        <Typography variant="body1" className="text-gray-700">
          To upload a video, image or audio for deepfake detection, simply click
          the “Upload ” button to choose a file from your device. Once the file
          is ready, click “Start Detection” to begin the analysis process. After
          a few moments, the results will be displayed, providing you with a
          confidence score and a detailed breakdown of the detection findings.
        </Typography>
      </Card>

      {/* Right Side Upload Section */}
      <Card className="p-6 w-full md:w-1/2 bg-white shadow-2xl shadow-gray-400 rounded-2xl">
        <Tabs
          value={tabIndex}
          onChange={(e, newIndex) => {
            setTabIndex(newIndex);
            setSelectedFile(null);
            setResult(null);
            setError(null);
          }}
          centered
        >
          <Tab label="Image" />
          <Tab label="Audio" />
          <Tab label="Video" />
        </Tabs>

        <Box className="mt-6">
          {/* File Display */}
          {selectedFile && (
            <Typography
              variant="body2"
              className="mb-2 text-green-600 font-medium"
            >
              Selected File: {selectedFile.name}
            </Typography>
          )}

          {/* Error Message */}
          {error && (
            <Typography
              variant="body2"
              className="mb-2 text-red-600 font-medium"
            >
              {error}
            </Typography>
          )}

          {/* Upload Box */}
          {!selectedFile && (
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-xl p-6 h-74 mb-4">
              <CircleFadingPlus className="w-20 h-20 text-gray-500 mb-3" />
              <label className="cursor-pointer mt-9 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Browse File
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          )}

          {/* Image/Video Preview */}
          {selectedFile && currentType === "image" && (
            <div className="flex justify-center mb-4">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
                className="max-w-full max-h-96 object-contain"
              />
            </div>
          )}

          {selectedFile && currentType === "video" && (
            <div className="flex justify-center mb-4">
              <video
                controls
                src={URL.createObjectURL(selectedFile)}
                className="max-w-full max-h-96"
              />
            </div>
          )}

          {/* Continue Button */}
          {selectedFile && (
            <Button
              onClick={handleUpload}
              variant="contained"
              color="primary"
              fullWidth
              disabled={isDetecting}
            >
              {isDetecting ? "Detecting..." : "Continue Detection"}
            </Button>
          )}

          {/* Result Section */}
          {result && (
            <Card className="mt-6 p-4 bg-gray-100 border rounded-xl">
              <Typography variant="h6" className="text-green-700 mb-2">
                Detection Result
              </Typography>
              <Typography variant="body2">
                <strong>Label:</strong> {result.label}
              </Typography>
              <Typography variant="body2">
                <strong>Confidence:</strong> {result.confidence}
              </Typography>
            </Card>
          )}
        </Box>
      </Card>
    </div>
  );
};

export default MediaUploadTabs;
