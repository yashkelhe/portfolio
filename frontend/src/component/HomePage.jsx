import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen pt-16 bg-custom-radial-gradient flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 sm:grid-cols-2 w-full px-4 py-20 lg:px-0">
        <div className="lg:col-span-8 sm:col-span-1 flex flex-col justify-center items-start text-center  lg:text-left pt-10 lg:pt-0 lg:pl-48 pl-4 order-2  sm:order-1 md:order-1 lg:order-1">
          <div className="text-xl lg:text-4xl my-10 lg:mt-16 ">
            <div className="text-[#01D293]">---Hello</div>
          </div>
          <div className=" text-3xl sm:pl-0 my-4 text-white">
            I'm Yash Kelhe,
          </div>
          <div className="text-1xl lg:text-xl text-[#808DAD]">
            Full stack dev
          </div>
          <p className="text-lg lg:text-xl mt-4 pr-4 text-[#808DAD] text-start">
            Hi there! My name is Yash Kelhe, and I’m a software engineer with a
            passion for all things tech and coding. I'm eager to apply my Full
            Stack Development skills to bring creative solutions to life and
            make a meaningful impact in the tech industry..
          </p>
          <div className="py-16">
            <button className="w-20 h-8  bg-slate-900 text-white hover:bg-pink-500 transition-all duration-300 ">
              hello
            </button>
          </div>
        </div>
        <div className="lg:col-span-3 sm:col-span-1  flex rounded-full justify-center items-center order-1  lg:order-2 md:order-2 sm:order-2 mt-8 lg:mt-0">
          <img src="mee.png" alt="img" className="w-2/3 lg:w-full" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
