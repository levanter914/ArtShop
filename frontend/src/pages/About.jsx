import React from "react";
import {motion} from "framer-motion";
import banner from "../assets/bannerabout3.svg";
import staticImage from "../assets/aboutpic.jpg";
import overlayImage from "../assets/bannerabout3.png";
import bgImage from "../assets/landscape/bg2bw.jpg";

const About = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Scrolling Text */}
        <div className="flex items-center justify-center min-h-screen w-full text-center bg-black/30">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="relative max-w-3xl"
          >
          <span></span>
        </motion.div>
      </div>

      {/* New Section Above Banner */}
      <div className="w-full flex flex-col md:flex-row h-[600px] overflow-hidden">
        {/* Static Image Section */}
        <div className="w-full md:w-2/5 h-full">
          <img src={staticImage} alt="Static" className="w-full h-full object-cover" />
        </div>

        {/* Image with Text Overlay */}
        <div className="relative md:w-3/5 h-full">
          <img src={overlayImage} alt="Overlay" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-transparent text-black text-2xl font-bold text-center">
            Centered Text Here
          </div>
        </div>
      </div>


      {/* Banner Section */}
      <div className="relative">
        <img src={banner} alt="Banner" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center text-black text-4xl font-bold text-center px-4">
          Follow along on<br />Instagram<br />for the latest updates.
        </div>
      </div>
    </div>
  );
};

export default About;