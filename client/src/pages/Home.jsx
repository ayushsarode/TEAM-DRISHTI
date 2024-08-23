import React from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Study Nest
            </h1>
            <span className="text-lg text-gray-600">
              We are here to help you in your studies
            </span>
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
