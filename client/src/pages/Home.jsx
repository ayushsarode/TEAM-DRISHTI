import React from "react";
import CarouselComponent from "../components/Carousel";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-rmin-h-screen   flex items-center justify-between">
        <div className="flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto p-5 space-y-10 md:space-y-0 md:space-x-10">
          <div className="text-center text-text md:text-left">
            <h1 className="text-5xl font-bold md:text-6xl text-center">
              Welcome to StudyNest
            </h1>
            <p className="text-xl  mt-5">
              A place where you can learn and grow.
            </p>
          </div>
          <div className="w-full md:w-[46rem] h-30rem] mt-10 mx-auto">
            <CarouselComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;