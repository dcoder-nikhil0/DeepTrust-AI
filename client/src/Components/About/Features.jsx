import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <Box>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white">
            Explore Our <br className="hidden sm:block" /> Features
          </h1>

          <p className="mt-4 text-center text-base sm:text-lg text-gray-500 dark:text-gray-300">
            DeepTrust AI - Deep Fake Detection Technology
          </p>

          <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 xl:grid-cols-3">
            {/* Feature Card - 1 */}
            <div className="p-6 sm:p-8 space-y-4 border-2 border-blue-400 dark:border-blue-300 rounded-xl transition-transform hover:scale-[1.01]">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-white">
                Real-Time Deepfake Detection
              </h2>

              <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base">
                Upload videos, audio or image to detect manipulated content
                using advanced AI models. Our system analyzes facial
                inconsistencies, motion artifacts, and audio mismatches to
                identify deepfakes in real time.
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8"
                  />
                </svg>
              </Link>
            </div>

            {/* Feature Card - 2 */}
            <div className="p-6 sm:p-8 space-y-4 border-2 border-blue-400 dark:border-blue-300 rounded-xl transition-transform hover:scale-[1.01]">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>

              <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-white">
                Confidence Scoring System
              </h2>

              <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base">
                Each detection comes with a confidence score indicating the
                likelihood of the video being fake. This helps users understand
                the model’s certainty and make informed decisions.
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8"
                  />
                </svg>
              </Link>
            </div>

            {/* Feature Card - 3 */}
            <div className="p-6 sm:p-8 space-y-4 border-2 border-blue-400 dark:border-blue-300 rounded-xl transition-transform hover:scale-[1.01]">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-white">
                Secure & Private Uploads
              </h2>

              <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base">
                We prioritize user privacy. Uploaded files are never stored
                permanently and are deleted after processing. This ensures safe
                and private user experience.
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Features;
