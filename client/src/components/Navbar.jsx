import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/20 backdrop-blur-lg rounded-lg shadow-lg p-4 ">
      <div className="flex justify-between items-center">
        <div className="text-black text-lg font-bold">StudyNest</div>
        
        <ul className={`md:flex md:space-x-6 ${isOpen ? "block" : "hidden"} mt-4 gap-8 md:mt-0`}>
          <li>
            <Link to="/" className="text-black block py-2 md:py-0 hover:font-bold">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-black block py-2 md:py-0 hover:font-bold">About</Link>
          </li>
          <li>
            <Link to="/profile" className="text-black block py-2 md:py-0 hover:font-bold">Features</Link>
          </li>
        </ul>
        <div className=''>
          <button className="text-black text-lg m-0 p-2">Signup</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
