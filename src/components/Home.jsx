import React, { useState } from "react";
import profile from "../assets/pratik.jpg";

import Sidebar from "./Sidebar";
import menuIcon from "../assets/menu-bar.png";
import About from "./About";
import Experience from "./Experience";
import Services from "./Services";
import Contact from "./Contact";
import Education from "./Education";
import Footer from "./Footer";

const Home = () => {
  //state to track whether the sider isb open or not
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  //function to toggle the sidebar

  const toggleSidebar = () => {
    setIsSideBarOpen((prevstate) => !prevstate);
  };

  return (
    <div className="bg-gray-700 relative text-white overflow-x-hidden">
      {/* Conditionally render the Sidebar based on state */}
      {isSideBarOpen && <Sidebar />}

      {/* this is the home page */}
      <div className="p-14 flex flex-col md:flex-row h-screen w-screen gap-3 relative">
        <div className="flex flex-col align-center w-full">
          <img
            src={menuIcon}
            onClick={toggleSidebar}
            className="sm:w-20 w-14 top-10 right-10 fixed sm:right-10 sm:top-20 
            hover:-translate-x-2 hover:-translate-y-2 hover:scale-105 duration-500 "
            alt=""
          />
          <h1 className="sm:text-5xl text-4xl font-semibold md:pb-32 md:pl-[35%]">
            Hi ! i am
            <span className="text-red-500 "> Pratik Devkota</span>
          </h1>
          <div className="sm:absolute sm:top-[24%]">
            <p className="text-2xl sm:pl-36 text-gray-400">
              I am a Computer Engineering Student.
            </p>
            <p className="text-2xl sm:pl-36 text-gray-400">
              I am aspiring to be a mern Devleoper.
            </p>

            <button
              onClick={toggleSidebar}
              type="file"
              className="mt-10 border-2 border-white rounded-lg 
              sm:ml-72 my-4 w-52 px-3 py-2 font-medium 
              hover:bg-purple-400 duration-500 text-2xl md:ml-80"
            >
              Download CV
            </button>
          </div>
        </div>
        <div>
          <img
            src={profile}
            className="w-[60%] hover:z-1 hover:scale-105  md:w-[25%] md:absolute md:top-[20%] md:right-[40%] rounded-3xl pt-9 duration-500"
            alt=""
          />
        </div>
        <div className="flex flex-col md:absolute md:right-[27%] md:top-[85%] text-3xl">
          <h1>I am</h1>
          <span className="text-purple-400">Mern Developer</span>
        </div>
      </div>

      {/* Below content area for additional sections */}
      <div className="p-5">
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        {/* <section id="experience">
          <Experience />
        </section> */}
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />

    </div>
  );
};

export default Home;
