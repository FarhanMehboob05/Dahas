import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 text-left">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <img src="" alt="LogoImages" />

            <div>
              <ul className="text-gray-300 space-y-2">
                <li>Email: support@</li>
                <li>Phone: +91 123 456 7890</li>
                <li>Address: 123 Main Street, City, Country</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-secondary">
                Follow Us
              </h3>
              <div className="flex justify-start gap-2 ">
                <a
                  href="https://facebook.com"
                  className="text-gray-300 hover:text-accent transition-all"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://x.com"
                  className="text-gray-300 hover:text-accent transition-all"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-300 hover:text-accent transition-all"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-300 hover:text-accent transition-all"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-accent transition-all"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-accent transition-all"
                >
                  Contect Informations
                </a>
              </li>
              <li>
                <NavLink
                  to="/privay-policy"
                  className="text-gray-300 hover:text-accent  transition-all"
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms-and-conditions"
                  className="text-gray-300 hover:text-accent transition-all"
                >
                  Terms and Conditions
                </NavLink>
              </li>
            </ul>
          </div>

          {/* {Guide Lines} */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">
              Guide Lines
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/store-locator"
                  className="text-gray-300 hover:text-accent transition-all"
                >
                  Store Locator
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/track-order"
                  className="text-gray-300 hover:text-accent transition-all"
                >
                  Track your Order
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shipping"
                  className="text-gray-300 hover:text-accent transition-all"
                >
                  Shipping
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/replacement-policy"
                  className="text-gray-300 hover:text-accent transition-all"
                >
                  Replacement Policy
                </NavLink>
              </li>
            </ul>
          </div>
          {/* News Latter */}
          <div className="flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-4 text-secondary">
              NEWS & UPDATES
            </h3>
            <p className="text-gray-300 mb-2">
              Subscribe to our newsletters now and stay up-to-date with new
              collections.
            </p>
            <input
              type="text "
              className="px-6 py-3 rounded-lg"
              placeholder="Enter your Email  "
            />
            <div>
              <button className="bg-secondary my-4 text-primary px-4 py-2 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2023 MyStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
