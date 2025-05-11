import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Terms & Conditions
        </h1>
        <p className="mb-4 text-lg">
          By accessing or using our services, you agree to the following terms and conditions.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By using our platform, you agree to comply with and be legally bound by these terms. If you disagree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Modification of Terms</h2>
            <p>
              We reserve the right to update or change these terms at any time. Continued use after modifications indicates your acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
            <p>
              You agree not to misuse the services, engage in illegal activity, or attempt to access unauthorized areas of the system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
            <p>
              All content and intellectual property on this platform are owned by us. Unauthorized reproduction is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
            <p>
              We are not liable for any damages resulting from the use or inability to use the service, even if we were advised of the possibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Governing Law</h2>
            <p>
              These terms shall be governed by and interpreted in accordance with the laws of your jurisdiction.
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

export default Terms;
