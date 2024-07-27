import React from "react";
import NavBar from "./pages/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/index";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ResearchPaper from "./pages/ResearchPaper";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/research-paper" element={<ResearchPaper />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
