import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Privacy Protection
        </h1>
        <p className="mb-4 text-lg">
          Your privacy is important to us. This page explains how we collect,
          use, and protect your information.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Data Collection</h2>
            <p>
              We collect only essential data to enhance your experience. No
              sensitive information is collected without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Usage of Information
            </h2>
            <p>
              Your data is used strictly for improving our services and will
              never be sold to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
            <p>
              We use cookies to personalize content and analyze site traffic.
              You can opt out anytime through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
            <p>
              You have full control over your data, including the right to
              access, correct, or delete your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Security</h2>
            <p>
              We use industry-standard security measures to protect your
              information from unauthorized access.
            </p>
          </section>
        </div>

        <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          Last updated: May 11, 2025
        </div>
      </div>
    </div>
  );
};

export default Privacy;
