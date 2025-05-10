import React from 'react';
import { Typography, LinearProgress } from '@mui/material';
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from 'react-icons/fa';

const ResultSection = ({
  status = 'success',
  title = 'Upload Successful',
  description = 'Your file has been uploaded and processed correctly.',
  fileUrl = '',
  fileType = 'image', // 'image' | 'audio' | 'video'
  progress = null, // number (0-100) | null
}) => {
  const statusStyles = {
    success: {
      icon: <FaCheckCircle className="text-green-500 text-4xl" />,
      border: 'border-green-200',
      bg: 'bg-green-50',
      text: 'text-green-700',
    },
    warning: {
      icon: <FaExclamationTriangle className="text-yellow-500 text-4xl" />,
      border: 'border-yellow-200',
      bg: 'bg-yellow-50',
      text: 'text-yellow-700',
    },
    error: {
      icon: <FaTimesCircle className="text-red-500 text-4xl" />,
      border: 'border-red-200',
      bg: 'bg-red-50',
      text: 'text-red-700',
    },
  };

  const style = statusStyles[status] || statusStyles.success;

  const renderPreview = () => {
    if (!fileUrl) return null;

    switch (fileType) {
      case 'image':
        return (
          <img
            src={fileUrl}
            alt="Uploaded Preview"
            className="w-full h-64 object-cover rounded-lg mt-4 border"
          />
        );
      case 'audio':
        return (
          <audio controls className="w-full mt-4">
            <source src={fileUrl} />
            Your browser does not support the audio element.
          </audio>
        );
      case 'video':
        return (
          <video controls className="w-full mt-4 rounded-lg">
            <source src={fileUrl} />
            Your browser does not support the video element.
          </video>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`w-full p-6 mt-6 rounded-xl shadow-lg ${style.bg} border ${style.border}`}>
      <div className="flex items-center space-x-4">
        {style.icon}
        <div>
          <Typography variant="h6" className={`font-bold text-lg ${style.text}`}>
            {title}
          </Typography>
          <Typography className="text-sm text-gray-600 mt-1">
            {description}
          </Typography>
        </div>
      </div>

      {/* Progress bar */}
      {progress !== null && (
        <div className="mt-4">
          <Typography variant="body2" className="text-gray-700 mb-1">
            Progress: {progress}%
          </Typography>
          <LinearProgress variant="determinate" value={progress} />
        </div>
      )}

      {/* File Preview */}
      {renderPreview()}
    </div>
  );
};

export default ResultSection;
