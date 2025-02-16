import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/landscape/bghome.jpg";
import Work from "./Work";

const Home = () => {
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
      <div className="flex items-center justify-center min-h-screen w-full text-center bg-black/30 px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="relative max-w-lg" // Reduced width from 3xl to lg
        >
          <h2 className="text-white text-4xl font-bold"> 
            Shubham's Art Portfolio
          </h2>
        </motion.div>
      </div>

      <Work/>
    </div>
  );
};

export default Home;
