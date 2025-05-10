import React, { useRef } from "react";
import { Box } from "@mui/material";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_15wcdxr",
        "template_qteedc7",
        form.current,
        "kwzg2HZtC8KSNn66L"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("An error occurred. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <Box>
      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
            {/* Left side: Contact Info Only */}
            <div className="lg:w-1/2 lg:mx-12">
              <h1 className="text-3xl font-semibold text-gray-800 ">
                Get in Touch
              </h1>
              <div className="space-y-8 md:mt-8">
                <p className="flex items-start -mx-2 text-gray-700 ">
                  <span className="mx-2 text-base">📞</span>
                  +91 75448 38483
                </p>

                <p className="flex items-start -mx-2 text-gray-700 ">
                  <span className="mx-2 text-base">✉️</span>
                  support@kshitizz.com
                </p>

                <p className="flex items-start -mx-2 text-gray-700 ">
                  <span className="mx-2 text-base">📍</span>
                  Patna, India
                </p>
              </div>
            </div>

            {/* Right side: Email Form */}
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-black/50">
                <h1 className="text-lg font-medium text-gray-800">
                  Feel free to reach out!
                </h1>

                <form ref={form} onSubmit={sendEmail} className="mt-6">
                  <div className="mb-4">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 text-gray-700  bg-white border border-gray-200 rounded-md placeholder-gray-600 "
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="john@example.com"
                      className="block w-full px-5 py-3 text-gray-700  bg-white border border-gray-200 rounded-md placeholder-gray-600"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Your message here..."
                      className="block w-full px-5 py-3 text-gray-700  bg-white border border-gray-200 rounded-md placeholder-gray-600 "
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default ContactForm;
