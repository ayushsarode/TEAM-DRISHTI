import React from "react";
import CarouselComponent from "../components/Carousel";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-between">
        <div className="flex flex-col md:flex-row items-center justify-evenly w-full max-w-7xl mx-auto p-5 space-y-10 md:space-y-0 md:space-x-10">
          <div className="text-centert">
            <h1 className="text-5xl font-bold text-white md:text-6xl text-center">
              Welcome to StudyNest
            </h1>
            <p className="text-xl text-gray-200 mt-5">
              A place where you can learn and grow.
            </p>
          </div>
          <div className="w-full md:w-[46rem] h-[40rem] mt-10 mx-auto">
            <CarouselComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
