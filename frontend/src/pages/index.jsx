import React from "react";
import HomePage from "../component/HomePage";

import My_expertise from "../component/My_expertise";
import Footor from "../component/Footor";
import Project_section from "../component/Project_section";
import Experiences from "../component/Experiences";
import About from "../component/About";
import Education from "../component/Education";
import ContactForm from "../component/ContactForm";

function Hero() {
  return (
    <div className="overflow-hidden    ">
      <HomePage />
      <About />
      <Experiences />
      <My_expertise />
      <Project_section />
      <Education />
      <ContactForm />
      <Footor />
    </div>
  );
}

export default Hero;
