import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import deepfake from "../../assets/deepfake.webp";

const AbHero = () => {
  return (
    <Box>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-4 py-10 lg:py-16 lg:px-12">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 ">
              DeepTrust AI - Deep Fake Detection Technology
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600">
              DeepTrust AI is an advanced deepfake detection platform designed
              to identify manipulated videos using cutting-edge artificial
              intelligence and deep learning techniques. It provides accurate,
              real-time analysis with a focus on user privacy, security, and
              ease of use. The platform aims to combat digital misinformation
              and support content authenticity across industries.
            </p>

            <div className="mt-6">
              <Link
                to="/"
                className="inline-block px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700 transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={deepfake}
            alt="Deepfake Illustration"
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>
      </div>
    </Box>
  );
};

export default AbHero;
