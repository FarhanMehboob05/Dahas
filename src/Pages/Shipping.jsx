import React from "react";

const Shipping = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
      <p className="text-lg text-gray-700 mb-6">
        Learn more about our shipping policies, delivery times, and charges.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Delivery Time</h2>
      <p className="text-gray-600 mb-4">
        Orders are typically processed within 24-48 hours. Standard delivery
        takes 3-7 business days depending on your location.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Shipping Charges</h2>
      <p className="text-gray-600 mb-4">
        - Free shipping on orders over $50. - Standard shipping: $5 per order. -
        Express shipping: $10 per order (2-3 business days).
      </p>

      <h2 className="text-2xl font-semibold mb-2">International Shipping</h2>
      <p className="text-gray-600 mb-4">
        We offer international shipping to select countries. Shipping charges
        and delivery times vary by location.
      </p>

      <p className="text-gray-600 mt-6">
        For more details, contact us at{" "}
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

export default Shipping;
