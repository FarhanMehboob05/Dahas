import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg text-gray-700 mb-6">
        At Dahas.pk, we are committed to protecting your privacy. This Privacy
        Policy outlines how we collect, use, and safeguard your personal
        information.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <p className="text-gray-600 mb-4">
        We may collect personal details such as your name, email, phone number,
        and payment information when you interact with our website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        How We Use Your Information
      </h2>
      <ul className="text-gray-600 mb-6 list-disc list-inside">
        <li>To process orders and transactions</li>
        <li>To improve our website and services</li>
        <li>To send promotional emails and updates (if opted-in)</li>
        <li>To enhance security and prevent fraud</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Data Protection</h2>
      <p className="text-gray-600 mb-4">
        We implement security measures to protect your personal data from
        unauthorized access, alteration, and disclosure.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
      <p className="text-gray-600 mb-4">
        You have the right to request access to, modify, or delete your personal
        data. Contact us at support@dahas.pk for any privacy-related inquiries.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Updates to This Policy</h2>
      <p className="text-gray-600">
        We may update this Privacy Policy periodically. Any changes will be
        posted on this page with an updated revision date.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
