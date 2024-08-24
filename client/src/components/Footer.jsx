import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white/20 backdrop-blur-lg p-6 rounded-lg shadow-lg mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand Name */}
        <div className="text-black text-2xl font-light mb-4 md:mb-0">
          StudyNest
        </div>

        {/* Footer Links */}
        <ul className="flex space-x-4 md:space-x-8">
          <li>
            <Link
              to="/"
              className="text-black hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-in-out hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-in-out hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/feature"
              className="text-black hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-in-out hover:underline"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-black hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-in-out hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Copyright Text */}
        <div className="text-gray-500 text-sm mt-4 md:mt-0">
          © 2024 StudyNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
