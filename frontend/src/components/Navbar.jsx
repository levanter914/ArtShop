import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logoblack.png";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 right-0 flex justify-between items-center py-6 pl-12 pr-8 bg-transparent font-custom z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Artist Logo" className="h-12 w-auto" />
      </div>

      {/* Centered Navigation Links with More Spacing */}
      <div className="flex justify-center">
        <ul className="flex space-x-14 text-xl text-black">
          <li><a href="#home" className="font-custom">Home</a></li>
          <li><a href="#work" className="font-custom">Work</a></li>
          <li><a href="#about" className="font-custom">About</a></li>
          <li><a href="#contact" className="font-custom">Contact</a></li>
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/art_artistic_shubham/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl text-black" />
        </a>
        <a href="https://www.youtube.com/channel/UCUq86ZWQAw62DbWNv369n8g" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-2xl text-black" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
