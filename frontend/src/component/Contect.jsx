import React from "react";

function Contect() {
  return (
    <div className=" w-screen   sm:h-[550px] bg-custom-radial-gradient  sm:p-10 pt-[80%] p-10 px-28 ">
      <div className=" p-5 bg-[#1F316F] sm:h-[400px] rounded-2xl flex flex-col justify-center items-center">
        <div className="w-[100%] h-20 text-white sm:inline-flex justify-center items-center mb-10">
          <div className="text-5xl font-roboto2">Lets connect</div>
        </div>
        <div className="  flex justify-center  ">
          <button
            type="button"
            class="w-80 h-14 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  focus:outline-none focus:ring-purple-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            GET IN
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default Contect;
