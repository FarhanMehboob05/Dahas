import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to Dahas.pk, your one-stop destination for high-quality fashion
        and lifestyle products. We are dedicated to bringing you the latest
        trends with a seamless shopping experience.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="text-gray-600 mb-6">
        Our mission is to provide stylish, affordable, and high-quality products
        to our customers. We believe in fashion that is accessible to everyone,
        offering a variety of categories to suit all needs.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
      <ul className="text-gray-600 mb-6 list-disc list-inside">
        <li>Premium quality products</li>
        <li>Fast and reliable delivery</li>
        <li>Secure payments and easy returns</li>
        <li>24/7 customer support</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
      <p className="text-gray-600">
        Have any questions or feedback? Feel free to{" "}
        <a href="/contact" className="text-blue-500 hover:underline">
          contact us
        </a>
        . We’d love to hear from you!
      </p>
    </div>
  );
};

export default About;
