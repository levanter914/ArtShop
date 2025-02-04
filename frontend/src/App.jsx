import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative">
      <div className="relative px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/work" element={<Work />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
  
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
