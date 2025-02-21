import React, { useState, useContext } from "react";
import {
  FaBars,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const { cart } = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Menu Icon */}
        <button className="text-2xl hover:text-secondary" onClick={toggleMenu}>
          <FaBars />
        </button>

        {/* Center: Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="flex items-center">
            <span className="text-secondary">My</span>
            <span className="text-accent">Store</span>
          </NavLink>
        </div>

        {/* Right Side: Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-2xl hover:text-secondary">
            <FaSearch />
          </button>
          <button
            className="text-2xl hover:text-secondary"
            onClick={() => {
              setIsLoginOpen(true);
              setIsMenuOpen(false);
            }}
          >
            <FaUser />
          </button>
          <NavLink
            to="/cart"
            className="text-2xl hover:text-secondary relative"
          >
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full px-2">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity">
          <div className="bg-primary w-64 h-full p-5 shadow-md relative">
            {/* Close Button */}
            <button
              className="text-white text-2xl mb-4 absolute top-4 right-4"
              onClick={toggleMenu}
            >
              <FaTimes />
            </button>

            {/* Menu Items */}
            <nav className="space-y-4 mt-6">
              <NavLink
                to="/"
                className="block text-white text-lg hover:text-secondary"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className="block text-white text-lg hover:text-accent"
                onClick={toggleMenu}
              >
                Shop Now
              </NavLink>
              <NavLink
                to="/about"
                className="block text-white text-lg hover:text-secondary"
                onClick={toggleMenu}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="block text-white text-lg hover:text-secondary"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && (
        <Login
          onClose={() => setIsLoginOpen(false)}
          switchToRegister={() => {
            setIsLoginOpen(false);
            setIsRegisterOpen(true);
          }}
          switchToForgotPassword={() => {
            setIsLoginOpen(false);
            setIsForgotPasswordOpen(true);
          }}
        />
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <Register
          onClose={() => setIsRegisterOpen(false)}
          switchToLogin={() => {
            setIsRegisterOpen(false);
            setIsLoginOpen(true);
          }}
        />
      )}

      {/* Forgot Password Modal */}
      {isForgotPasswordOpen && (
        <ForgotPassword onClose={() => setIsForgotPasswordOpen(false)} />
      )}
    </header>
  );
}
