import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white/20 backdrop-blur-lg rounded-lg shadow-lg p-3 items-center">
      <div className="flex justify-between items-center">
        <p className="text-black text-3xl font-light">StudyNest.</p>
        
        <ul className={`md:flex md:space-x-6 ${isOpen ? "block" : "hidden"} gap-8 md:gap-12 md:mt-0 flex flex-col md:flex-row`}>
          <li className="relative group">
            <Link 
              to="/" 
              className="text-black hover:font-bold hover:text-blue-600 p-2 transition-transform duration-300 transform hover:scale-105"
            >
              Home
            </Link>
            <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </li>
          <li className="relative group">
            <Link 
              to="/about" 
              className="text-black hover:font-bold p-2 hover:text-blue-600 transition-transform duration-300 transform hover:scale-105"
            >
              About
            </Link>
            <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </li>
          <li className="relative group">
            <Link 
              to="/feature" 
              className="text-black hover:font-bold p-2 hover:text-blue-600 transition-transform duration-300 transform hover:scale-105"
            >
              Features
            </Link>
            <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </li>
        </ul>
        
        <div>
          <Link to='/Signup'>
            <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 text-lg p-2 px-3 rounded-full transition-colors duration-300 hover:bg-black">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
