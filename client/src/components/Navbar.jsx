import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/20  backdrop-blur-lg rounded-lg shadow-lg p-3 items-center">
      <div className="flex justify-between items-center">
        <p className="text-black  text-3xl font-light">StudyNest.</p>
        
        <ul className={`md:flex md:space-x-6 ${isOpen ? "block" : "hidden"} gap-8 md:gap-12 md:mt-0`}>
  <li>
    <Link to="/" className="text-black hover:font-bold hover:text-blue-600 p-2 transition-colors duration-300 transform hover:scale-105">Home</Link>
  </li>
  <li>
    <Link to="/about" className="text-black hover:font-bold p-2 hover:text-blue-600 transition-colors duration-300 transform hover:scale-105">About</Link>
  </li>
  <li>
    <Link to="/feature" className="text-black hover:font-bold p-2 hover:text-blue-600 transition-colors duration-300 transform hover:scale-105">Features</Link>
  </li>
</ul>
        <div className=''>
          <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 text-lg p-2 px-3 rounded-full">
            <Link to='/Signup'>Signup</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
