import React from 'react'
import CarouselComponent from '../components/Carousel'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <>
    <Navbar/>
<div className='w-[56rem] h-[40rem] mt-10 mx-auto mb-10'>

      <CarouselComponent/>
      </div>

      
    </>
  )
}

export default Home
