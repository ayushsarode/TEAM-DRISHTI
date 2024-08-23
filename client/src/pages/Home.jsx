import React from 'react'
import { Link } from 'react-router-dom'  // Import Link from react-router-dom
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 h-screen flex items-center bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="flex flex-col justify-center text-center md:text-left">
            {/* Enhanced Gradient Text with Shadow and Animation */}
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4 animate-gradient-slow">
              Welcome to Study Nest
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              We are here to help you in your studies. Explore our resources to maximize your learning potential.
            </p>
            {/* Updated Link tag with smaller button size and rounded corners */}
            <div className='flex items-center justify-center'>
            <Link 
              to="/signup" 
              className=" px-4 py-2 w-44 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-md"
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
  )
}

export default Home
