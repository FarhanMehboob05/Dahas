import React from "react";

const TrackYourOrder = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Track Your Order</h1>
      <p className="text-lg text-gray-700 mb-6">
        Enter your order number below to track the status of your shipment.
      </p>

      <div className="w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Enter Order Number"
          className="w-full p-2 border rounded mb-4"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Track Order
        </button>
      </div>

      <p className="text-gray-600 mt-6">
        For any issues, contact us at{" "}
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

export default TrackYourOrder;
