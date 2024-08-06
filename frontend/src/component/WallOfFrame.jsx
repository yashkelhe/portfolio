import React from "react";

function WallOfFrame() {
  return (
    <div className=" w-screen h-[130vh]  sm:h-screen bg-custom-radial-gradient  sm:p-10 pt-[80%] p-10  ">
      <div className=" p-5 bg-custom-abuot-color h-[95%] rounded-2xl">
        <div className="grid grid-cols-12 gap-3 ">
          <div className="col-span-4 bg-white w-[90%]  h-80">big box</div>
          <div className="col-span-4  ">
            <div className="w-[90%] bg-slate-400 h-40">smallbox</div>
            <div className="w-[100%] h-40 mt-2 flex  gap-2">
              <div className="w-[45%] bg-slate-500 h-[100%]"></div>
              <div className="w-[43%] bg-white h-[100%]"></div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="p-1 rounded-sm w-52 h-24 bg-blue-500">
              <div className="grid grid-col-3">
                <div className="col-span-1 "></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
              </div>
            </div>
            <div className="">work</div>
            <div className="">same</div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default WallOfFrame;
