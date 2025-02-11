import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/landscape/bgcontact.jpg";
import banner from "../assets/bannercontact2.png";
import Form from "../components/Form";

const Contact = () => {
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
          <span className="text-white text-4xl font-bold">
          Hello!<br/>Let’s create something<br/>unique together.<br/>
          </span>
        </motion.div>
      </div>
      <Form />
      <div className="relative">
          <img src={banner} alt="Banner" className="w-full " />
          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold text-center px-4">
            Follow along on<br/>Instagram<br/>for the latest updates.
          </div>
      </div>
    </div>
  );
};

export default Contact;
