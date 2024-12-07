import React from "react";

import { motion } from "framer-motion";
import "./Slider.css";
function HomePage() {
  return (
    <div className="h-auto sm:h-screen pt-12 bg-custom-radial-gradient flex flex-col items-center z-50 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 sm:grid-cols-2 w-full px-4 py-20 lg:px-0 ">
        <div className="lg:col-span-8 sm:col-span-1 flex flex-col justify-center items-start text-center  lg:text-left pt-10 lg:pt-0 lg:pl-44 pl-4 order-2  sm:order-1 md:order-1 lg:order-1 slide-in-bottom z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-4xl my-10 lg:mt-16 "
          >
            <div
              className="text-[#01D293] shadow-2xl shadow-indigo-500/50 "
              style={{ fontFamily: "Anton" }}
            >
              <span>---</span> Hello
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-[48px] "
            style={{ fontFamily: "Anton" }}
          >
            This is <span className="text-pink-400 ">Yash Kelhe</span>
            ,
            <br />
            I'm a Professional{" "}
            <span className="text-green-400">
              Software
              <br /> Developer
            </span>
            .
          </motion.div>
          <div className="mt-6">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Contect Me
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Su169TerWzy5qGB8IqZQG67SV3cMVcrb/view?usp=sharing",
                  "_blank"
                )
              }
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium   rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-100 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Resume
              </span>
            </button>
          </div>
        </div>
        <div className=" lg:col-span-4 sm:col-span-1  flex  justify-center items-center order-1  lg:order-2 md:order-2 sm:order-2  lg:mt-0 slide-in-bottom relative max-w-xl  perspective-container z-10 ">
          <img
            src="image.png"
            alt="img"
            className="w-96 h-80 lg:w-full top-36 lg:top-32 rounded-md shadow-2xl shadow-neutral-600 absolute custom-transform border border-white/50 -z-10 hover:scale-110 transition duration-500 hover:z-40"
          />
          <img
            src="BlogQuotes.png"
            alt="img"
            className="w-96 h-80 lg:w-full top-20 lg:top-24 rounded-md shadow-2xl shadow-neutral-600 absolute custom-transform border border-white/50 -z-10 hover:scale-110 transition duration-500 hover:z-40"
          />
          <img
            src="Real_estate.png"
            alt="img"
            className="w-96 h-80 lg:w-full lg:top-2 top-6  rounded-md shadow-2xl shadow-neutral-600 custom-transform border border-white/50  -z-10 hover:scale-110 transition duration-500 hover:z-40"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
