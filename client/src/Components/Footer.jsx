import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a
            href="/"
            className="text-2xl font-semibold text-gray-800 dark:text-white"
          >
            DeepTrust AI
          </a>

          <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
            Your one-stop platform for finding and posting jobs.
          </p>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <a
              href="/"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="/about"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
              About
            </a>
            <a
              href="/terms"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Privacy
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          © 2025 DeepTrust AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
