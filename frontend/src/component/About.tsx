import React from "react";
import { personalData } from "../../utils/data/personal-data";
import { motion } from "framer-motion";
function About() {
  return (
    <div id="about" className="  bg-custom-radial-gradient p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex flex-col items-center absolute top-16 -right-8"
      >
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:pl-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 lg:order-1"
        >
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <img
            src={personalData.profile} // Assuming the profile image is located in the public folder
            width={280}
            height={280}
            alt="Yash Kelhe"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
