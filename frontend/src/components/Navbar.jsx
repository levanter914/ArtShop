import React from 'react'
import { FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-md font-proxima">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Artist Logo" className="h-12 w-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-lg">
        <li><a href="#home" className="hover:text-gray-600">Home</a></li>
        <li><a href="#work" className="hover:text-gray-600">Work</a></li>
        <li><a href="#about" className="hover:text-gray-600">About</a></li>
        <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
      </ul>

      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/art_artistic_shubham/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-gray-600" />
        </a>
        <a href="https://www.youtube.com/channel/UCUq86ZWQAw62DbWNv369n8g" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-2xl hover:text-gray-600" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
