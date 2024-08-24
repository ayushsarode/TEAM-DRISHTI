import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <section className="bg-gray-50 flex ">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Understand User Flow.
                <strong className="font-extrabold text-red-700 sm:block">
                  {" "}
                  Increase Conversion.{" "}
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/signup"
                  className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <img src="" alt="" />
            </div>
            <div className="">
              <img src="" alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
