import { Box } from "@mui/material";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of media can DeepTrust AI analyze?",
      answer:
        "DeepTrust AI currently supports video, audio and image files. Future updates may include support for live streams detection",
    },
    {
      question: "How accurate is the detection system?",
      answer:
        "Our system leverages state-of-the-art deep learning models trained on large datasets, offering over 90% detection accuracy under standard conditions.",
    },
    {
      question: "Is my uploaded data stored or shared?",
      answer:
        "No. All uploaded content is processed securely and automatically deleted after analysis. We do not store, share, or use your data for any other purpose.",
    },
    {
      question: "How long does the analysis take?",
      answer:
        "Depending on the video length and server load, analysis typically takes between 30 seconds to 2 minutes. Real-time feedback is provided during processing.",
    },
    {
      question: "Do I need an account to use DeepTrust AI?",
      answer:
        "No account is required for basic usage. However, creating an account unlocks advanced features like detection history and extended analysis reports.",
    },
  ];

  return (
    <Box>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto max-w-screen-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
            Frequently Asked Questions
          </h1>

          <div className="mt-12 space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-8 text-left"
                >
                  <h1 className="font-semibold text-gray-700 dark:text-white text-lg md:text-xl">
                    {faq.question}
                  </h1>
                  <span
                    className={`rounded-full ${
                      openIndex === index
                        ? "text-gray-400 bg-gray-200"
                        : "text-white bg-blue-500"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {openIndex === index ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18 12H6"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      )}
                    </svg>
                  </span>
                </button>
                {openIndex === index && (
                  <>
                    <hr className="border-gray-200 dark:border-gray-700" />
                    <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Box>
  );
};

export default FAQ;
