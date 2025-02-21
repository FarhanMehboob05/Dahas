import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Have any questions or concerns? We’re here to help! Reach out to us
        using the details below.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Contact Details</h2>
      <p className="text-gray-600">
        <strong>Email:</strong> support@dahas.pk
      </p>
      <p className="text-gray-600">
        <strong>Phone:</strong> +92 123 4567890
      </p>
      <p className="text-gray-600">
        <strong>Address:</strong> 123 Street, Karachi, Pakistan
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Send Us a Message</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
