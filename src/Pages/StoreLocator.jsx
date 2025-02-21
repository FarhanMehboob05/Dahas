import React from "react";

const StoreLocator = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Store Locator</h1>
      <p className="text-lg text-gray-700 mb-6">
        Find a Dahas.pk store near you! Use the map below to locate our nearest
        branch.
      </p>

      <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
        {/* Embed Google Maps or any map service here */}
        <p className="text-gray-500">Map will be displayed here</p>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Locations</h2>
      <ul className="text-gray-600 mb-6 list-disc list-inside">
        <li>
          <strong>Karachi:</strong> 123 Main Street, Karachi, Pakistan
        </li>
        <li>
          <strong>Lahore:</strong> 456 Central Avenue, Lahore, Pakistan
        </li>
        <li>
          <strong>Islamabad:</strong> 789 Mall Road, Islamabad, Pakistan
        </li>
      </ul>

      <p className="text-gray-600">
        Need help finding a store? Contact us at{" "}
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

export default StoreLocator;
