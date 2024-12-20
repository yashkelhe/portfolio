import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
function SocialBar() {
  const navigate = useNavigate();
  return (
    <div className="absolute top-full right-5 bg-gray-400 p-1  rounded-lg shadow-lg mt-2  backdrop-blur  z-50">
      <div className="flex flex-col items-center space-y-2 w-24">
        <div className="p-1 shadow-md bg-[#0e1630] rounded-md md:hidden ">
          <div
            className="p-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
            onClick={() => {
              navigate("/About");
            }}
          >
            About
          </div>
          <div
            className="p-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  "
            onClick={() => {
              navigate("/experience");
            }}
          >
            experience
          </div>
          <div
            className="p-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            onClick={() => {
              navigate("/research-paper");
            }}
          >
            Research Paper
          </div>
          <div
            className="p-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            onClick={() => {
              navigate("/projects");
            }}
          >
            projects
          </div>
        </div>
        <div className="flex items-center ">
          <a href="https://www.linkedin.com/in/yash-kelhe-a07a09245/">
            <img
              src="Linkedin.png"
              alt="Linkedin"
              href="https://www.linkedin.com/in/yash-kelhe-a07a09245/"
              className="w-8 h-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
            />
          </a>
          <a href="https://x.com/YashKelhe1">
            <img
              src="x.png"
              alt="Twitter"
              href="https://x.com/YashKelhe1"
              className="w-8 h-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
            />
          </a>
          <a href="https://github.com/yashkelhe">
            <img
              src="github.png"
              alt="GitHub"
              href="https://github.com/yashkelhe"
              className="w-8 h-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSocialBar, setShowSocialBar] = useState(false);
  const socialBarRef = useRef(null);
  const socialIconRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 550) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      socialBarRef.current &&
      !socialBarRef.current.contains(event.target) &&
      socialIconRef.current &&
      !socialIconRef.current.contains(event.target)
    ) {
      setShowSocialBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed flex justify-between items-center text-white font-semibold transition-all duration-500 backdrop-blur shadow-custom  border-custom  ${
          isScrolled
            ? "w-[50%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[35%] pl-2 justify-evenly bg-slate-900 rounded-3xl mx-auto left-0 right-0"
            : "w-screen px-2 bg-slate-900"
        }`}
      >
        <div
          className={`p-4 ${
            isScrolled ? "" : ""
          } transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300`}
          onClick={() => {
            navigate("/");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 text-white w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center space-x-4 sm:space-x-6 ">
          <div
            className="py-4 hidden md:block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </div>
          <div
            className="py-4 hidden md:block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            onClick={() => {
              navigate("/experience");
            }}
          >
            experience
          </div>
          <div
            className="py-4 hidden md:block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            onClick={() => {
              navigate("/research-Paper");
            }}
          >
            Research Paper
          </div>
          <div
            className="py-4 hidden md:block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            onClick={() => {
              navigate("/projects");
            }}
          >
            projects
          </div>
          <div className="relative p-4 pr-5">
            <img
              className="h-7 w-7 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
              src="social.png"
              alt="Social"
              onClick={() => setShowSocialBar(!showSocialBar)}
              ref={socialIconRef}
            />
            {showSocialBar && (
              <div ref={socialBarRef}>
                <SocialBar />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
