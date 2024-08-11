import React from "react";
import HomePage from "../component/HomePage";
import WallOfFrame from "../component/WallOfFrame";
import My_expertise from "../component/My_expertise";
import Footor from "../component/Footor";
import Project_section from "../component/Project_section";

function Hero() {
  return (
    <div className=" overflow-hidden  ">
      <HomePage />

      <My_expertise />
      <Project_section />
      <WallOfFrame />

      <Footor />
    </div>
  );
}

export default Hero;
