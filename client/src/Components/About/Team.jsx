import { Box } from "@mui/material";
import React from "react";
import img from "../../assets/image.png";
import me from "../../assets/me.png";

const Team = () => {
  return (
    <Box>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-4 py-10 mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
            {/* Text Section */}
            <div className="xl:w-1/2">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
                Our Team
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
                We are a two-member team specializing in artificial intelligence
                and software development, committed to delivering a robust and
                accurate deepfake detection solution. Our combined expertise
                ensures a high-quality, secure, and user-centric platform
                designed to address the growing challenge of digital
                misinformation.
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:w-1/2">
              <div className="text-center">
                <img
                  className="w-full h-auto object-cover rounded-xl aspect-square"
                  src={me}
                  alt="Nikhil Ranjan"
                />
                <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Nikhil Ranjan
                </h2>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  Full-Stack Developer & Data Scientist
                </p>
              </div>

              <div className="text-center">
                <img
                  className="w-full h-auto object-cover rounded-xl aspect-square"
                  src={img}
                  alt="Asad Ijtaba"
                />
                <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Asad Ijtaba
                </h2>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  Data Scientist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Team;
