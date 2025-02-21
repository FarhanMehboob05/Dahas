import React from "react";

const ReplacementPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Replacement Policy</h1>
      <p className="text-lg text-gray-700 mb-6">
        Our replacement policy ensures that you receive the best quality
        products. If you receive a damaged or incorrect item, we are here to
        help.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        Eligibility for Replacement
      </h2>
      <p className="text-gray-600 mb-4">
        - The item must be in its original packaging and unused. - Requests must
        be made within 7 days of receiving the order. - Proof of damage or
        incorrect item must be provided.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Replacement Process</h2>
      <p className="text-gray-600 mb-4">
        1. Contact our support team at{" "}
        <a
          href="mailto:support@dahas.pk"
          className="text-blue-500 hover:underline"
        >
          support@dahas.pk
        </a>{" "}
        with your order details. 2. Provide images of the damaged or incorrect
        item. 3. Our team will review your request and provide further
        instructions.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Exceptions</h2>
      <p className="text-gray-600 mb-4">
        - Items that have been used or altered are not eligible for replacement.
        - Products marked as "Final Sale" are non-replaceable.
      </p>

      <p className="text-gray-600 mt-6">
        For further assistance, reach out to us at{" "}
        <a
          href="mailto:support@dahas.pk"
          className="text-blue-500 hover:underline"
        >
          support@dahas.pk
        </a>
        .
      </p>
    </div>
  );
};

export default ReplacementPolicy;
