import React from "react";

function About() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#0e1630]">
      <div className="border border-gray-800 bg-gray-900 text-green-500 font-mono text-sm p-6 w-72  mx-auto shadow-md rounded-lg relative overflow-hidden box-border">
        <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-t-lg px-2 box-border flex justify-between items-center">
          <div className="text-gray-200">Status</div>
          <div className="flex space-x-1">
            <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
          </div>
        </div>
        <div className="text mt-6 overflow-hidden border-r-2 border-green-500 whitespace-nowrap">
          Loading...
        </div>
      </div>
    </div>
  );
}

export default About;
