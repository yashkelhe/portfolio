import React from "react";
import "./Slider.css";
function HomePage() {
  return (
    <div className="h-screen pt-16 bg-custom-radial-gradient flex flex-col items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-12 sm:grid-cols-2 w-full px-4 py-20 lg:px-0 ">
        <div className="lg:col-span-8 sm:col-span-1 flex flex-col justify-center items-start text-center  lg:text-left pt-10 lg:pt-0 lg:pl-48 pl-4 order-2  sm:order-1 md:order-1 lg:order-1 slide-in-bottom">
          <div className="text-xl lg:text-4xl my-10 lg:mt-16 ">
            <div className="text-[#01D293] shadow-2xl shadow-indigo-500/50 ">
              ---Hello
            </div>
          </div>
          <div className=" text-3xl sm:pl-0 my-4 text-white shadow-2xl shadow-indigo-500/40">
            I'm Yash Kelhe,
          </div>
          <div className="text-1xl lg:text-xl text-[#808DAD]">
            Full stack dev
          </div>
          <p className="text-lg lg:text-xl mt-4 pr-4 text-[#808DAD] text-start  lg:pr-40  ">
            Hi there! My name is Yash Kelhe, and I’m a software engineer with a
            passion for all things tech and coding. I'm eager to apply my Full
            Stack Development skills to bring creative solutions to life and
            make a meaningful impact in the tech industry..
          </p>
          <div className="py-16">
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-tr hover:via-blue-300 hover:to-purple-800 focus:ring-4 focus:outline-none focus:ring-red-100  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transform active:scale-95 hover:scale-105 shadow-2xl shadow-indigo-500/50"
            >
              explore more
            </button>
          </div>
        </div>
        <div className=" lg:col-span-3 sm:col-span-1  flex rounded-full justify-center items-center order-1  lg:order-2 md:order-2 sm:order-2 mt-8 lg:mt-0 slide-in-bottom ">
          <img
            src="mee.png"
            alt="img"
            className="w-2/3 lg:w-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
