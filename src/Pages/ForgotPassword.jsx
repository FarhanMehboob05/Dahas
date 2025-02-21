import React, { useState } from "react";

const ForgotPassword = ({ onClose, switchToLogin }) => {
  const [email, setEmail] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white h-full w-96 shadow-lg p-6 relative animate-slide-in-right">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✖
        </button>
        <h2 className="text-xl text-black font-bold mb-4">RECOVER PASSWORD</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Email address
          </label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">
          RESET PASSWORD
        </button>

        <p className="text-sm text-gray-600 text-center mt-2">
          Remembered your password?{" "}
          <button
            onClick={switchToLogin}
            className="text-blue-500  hover:underline"
          >
            Back to login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
