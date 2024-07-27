import React from "react";
import HomePage from "../component/HomePage";
import WallOfFrame from "../component/WallOfFrame";
import My_expertise from "../component/My_expertise";

function Hero() {
  return (
    <div className=" overflow-hidden  ">
      <HomePage />

      <My_expertise />
      <WallOfFrame />
    </div>
  );
}

export default Hero;
