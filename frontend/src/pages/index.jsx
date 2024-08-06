import React from "react";
import HomePage from "../component/HomePage";
import WallOfFrame from "../component/WallOfFrame";
import My_expertise from "../component/My_expertise";
import Footor from "../component/Footor";

function Hero() {
  return (
    <div className=" overflow-hidden  ">
      <HomePage />

      <My_expertise />

      <WallOfFrame />

      <Footor />
    </div>
  );
}

export default Hero;
