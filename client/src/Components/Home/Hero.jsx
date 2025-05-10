import React from "react";
import { Box } from "@mui/material";
import img from "../../assets/deepfake-concept-matching-facial-movements-face-swapping-impersonation_29488-11319.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box>
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          
          <div className="max-w-lg lg:mx-12 lg:order-2">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-3xl">
              Real-Time Deepfake Detection for a Safer Digital World
            </h1>
            <p className="mt-4 text-gray-600 ">
              Leverage cutting-edge AI technology to identify manipulated videos
              with ease. Our platform provides quick, accurate, and secure
              deepfake detection to protect the integrity of digital content..
            </p>
            <div className="mt-6 mx -5">
              <Link
                to="/"
                className="px-8 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-2 lg:w-auto focus:outline-none"
              >
                Try Now
              </Link>
              <Link
                to="/about"
                className="px-8  py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-2  lg:w-auto focus:outline-none"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={img}
            alt=""
          />
        </div>
      </div>
    </Box>
  );
};

export default Hero;
