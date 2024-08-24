import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 h-screen flex items-center bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Text div with blurred background image */}
          <div className="relative flex flex-col justify-center text-center md:text-left p-8 rounded-lg shadow-lg overflow-hidden">
            {/* Background image with blur effect using a pseudo-element */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm	"
              style={{ backgroundImage: "url('/src/assets/images/background/bg2.png')" }}

            ></div>
            {/* Content on top of blurred background */}
            <div className="relative z-10">
              {/* Enhanced Gradient Text with Shadow and Animation */}
              <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 animate-gradient-slow">
                Welcome to Study Nest
              </h1>
              <p className="text-xl bold text-gray-700 mb-6">
                We are here to help you in your studies. Explore our resources to maximize your learning potential.
              </p>
              {/* Updated Link tag with smaller button size and rounded corners */}
              <Link
                to="/signup"
                className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Carousel className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
