import React from "react";

function WallOfFrame() {
  return (
    <div className=" w-screen h-[130vh]  sm:h-screen bg-custom-radial-gradient  sm:p-10 pt-[80%] p-10  ">
      <div className=" p-5 bg-[#1F316F] h-[95%] rounded-2xl flex flex-col justify-center items-center">
        <div className="h-24 w-24  text-white"></div>
        <div className="w-52 h-14 flex justify-center  ">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  focus:outline-none focus:ring-purple-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            GET in touch
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default WallOfFrame;
