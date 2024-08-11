import React from "react";
import Box_project from "./Box_project";

function Project_section() {
  return (
    <div className="h-[1100px] w-screen sm:w-screen sm:h-screen bg-custom-radial-gradient sm:px-48 px-8  ">
      <div className="text-green-400 text-3xl   shadow-indigo-500/50 ">
        Explore My Latest Work
      </div>
      <div className="sm:flex justify-around mt-20 gap-5">
        <Box_project
          title="BlogQuotes"
          description="Full Stack Project"
          image_url="BlogQuotes.png"
        />
        <Box_project
          title="Real Estate"
          description="Front End Project"
          image_url="Real_estate.png"
        />
      </div>
      <div className="text-white w-[100%] text-center mt-20">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white ">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#F9DBBA] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            See More
          </span>
        </button>
      </div>
    </div>
  );
}

export default Project_section;
