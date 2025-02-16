import React from "react";
import banner from "../assets/bannercontact3.svg";

const About = () => {
  return (
    <div className="relative min-h-screen">
      <div className="flex items-center bg-blue-500 justify-center min-h-screen w-full text-center">
      About
      </div>

      <div className="relative">
        <img src={banner} alt="Banner" className="w-full " />
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold text-center px-4">
          Follow along on<br/>Instagram<br/>for the latest updates.
        </div>
      </div>
    </div>
  );
};

export default About;
