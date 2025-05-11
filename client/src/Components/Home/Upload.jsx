import React, { useState } from "react";
import { Tabs, Tab, Card, Typography, Button, Box } from "@mui/material";
import { CircleFadingPlus } from "lucide-react";

const MediaUploadTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [error, setError] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const mediaTypes = ["image", "audio", "video"];
  const currentType = mediaTypes[tabIndex];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) validateFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) validateFile(file);
  };

  const validateFile = (file) => {
    setError(null);
    const validTypes = {
      image: ["image/jpeg", "image/png", "image/gif"],
      audio: ["audio/mpeg", "audio/wav", "audio/ogg"],
      video: ["video/mp4", "video/webm", "video/ogg"],
    };
    const isValid = validTypes[currentType].includes(file.type);

    if (isValid) {
      setSelectedFile(file);
      setResult(null);
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
    <div className="flex justify-center items-center min-h-screen py-10 md:py-20 px-4 bg-purple-200">
      <Card className="w-full max-w-2xl p-6 bg-white shadow-2xl shadow-gray-400 rounded-2xl relative">
        <Typography
          variant="h4"
          className="text-center font-bold text-gray-900 text-xl md:text-3xl mb-4"
        >
          DeepTrust AI
        </Typography>

        <Tabs
          value={tabIndex}
          onChange={(e, newIndex) => {
            setTabIndex(newIndex);
            setSelectedFile(null);
            setResult(null);
            setError(null);
          }}
          centered
          variant="fullWidth"
        >
          <Tab label="Image" />
          <Tab label="Audio" />
          <Tab label="Video" />
        </Tabs>

        <Box className="mt-6">
          {selectedFile && (
            <Typography
              variant="body2"
              className="mb-2 text-green-600 font-medium"
            >
              Selected File: {selectedFile.name}
            </Typography>
          )}

          {error && (
            <Typography
              variant="body2"
              className="mb-2 text-red-600 font-medium"
            >
              {error}
            </Typography>
          )}

          {!selectedFile && (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
              className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 h-64 mb-4 transition ${
                isDragOver
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-400 bg-white"
              }`}
            >
              <CircleFadingPlus className="w-16 h-16 text-gray-500 mb-3" />
              <label className="cursor-pointer mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Browse File
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">or drag & drop here</p>
            </div>
          )}

          {selectedFile && currentType === "image" && (
            <div className="flex justify-center mb-4">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
                className="w-full max-h-80 object-contain"
              />
            </div>
          )}

          {selectedFile && currentType === "video" && (
            <div className="flex justify-center mb-4">
              <video
                controls
                src={URL.createObjectURL(selectedFile)}
                className="w-full max-h-80"
              />
            </div>
          )}

          {selectedFile && (
            <Button
              onClick={handleUpload}
              variant="contained"
              color="primary"
              fullWidth
              disabled={isDetecting}
              className="hidden md:block"
            >
              {isDetecting ? "Detecting..." : "Continue Detection"}
            </Button>
          )}

          {/* Detection Result */}
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

        {/* Sticky mobile upload button */}
        {selectedFile && (
          <div className="md:hidden fixed bottom-4 left-0 right-0 px-6 z-50">
            <Button
              onClick={handleUpload}
              variant="contained"
              color="primary"
              fullWidth
              disabled={isDetecting}
            >
              {isDetecting ? "Detecting..." : "Continue Detection"}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default MediaUploadTabs;
