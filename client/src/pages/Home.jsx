import React from 'react'
import Carousel from '../components/Carousel';


const Home = () => {
  return (
    <>
    <div className='container h-screen w-full flex justify-center items-center flex-col box-border '>
    <Carousel />
      <div className=''>
      
        <img src='./images/image1.png'/>
        <span className='text-center text-4xl bold '>
        Unlock your potential with resources,
         elevate your learning journey.
        </span>
      </div>
      <div className='flex justify-between items-center box-border m-28 p-28'>
      <button className='bg-gray-700 text-white rounded-lg h-10 w-48'>
        Get Started
      </button>
      </div>
    </div>
    </>
  )
}

export default Home
