import React from "react";
import { motion } from "framer-motion";

function ExpertiseBox({ Title, skills, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="col-span-4 sm:col-span-3 w-full h-auto shadow-lg shadow-indigo-500/50 p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <div className="flex flex-col">
        <div>{image}</div>

        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-[26px]  pt-3 sm:font-Kanit font-bold"
          style={{ fontFamily: "Archivo Black" }}
        >
          {Title}
        </motion.div>

        {/* Skills Animation */}
        <motion.div
          style={{ fontFamily: "Passion One" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-4 text-slate-300 lg:text-xl text-sm/[16px] sm:text-sm/[28px]"
        >
          {skills}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ExpertiseBox;
