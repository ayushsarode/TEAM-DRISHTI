import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-[-5rem] h-full">
        {/* Hero Section */}
        <section className="bg-gray-50 flex  flex-col-reverse lg:flex-row items-center lg:h-screen">
        
          <div className="flex-1 lg:px-8">
            <div className="mx-auto max-w-lg lg:max-w-none  lg:text-left">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Understand User Flow.
                <span className="block text-indigo-600">
                  Increase Conversion.
                </span>
              </h1>

              <p className="mt-4 text-lg text-gray-700 sm:text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="mt-8 flex justify-center lg:justify-start">
                <Link
                  to="/signup"
                  className=" rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white shadow hover:text-bold focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 active:bg-red-500  "
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1637580681030-dd19ddea3dd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9ubGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
                alt="Students 1"
                className="rounded-lg shadow-lg w-80 h-96 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Students 2"
                className="rounded-lg shadow-lg w-80 h-96 object-cover absolute top-[7rem] left-40"
              />
            </div>
       
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
