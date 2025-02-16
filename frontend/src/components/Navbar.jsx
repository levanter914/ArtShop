import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation(); // Get current route
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 right-0 flex justify-between items-center py-6 px-6 md:px-12 bg-transparent font-custom z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo (Redirects to Home) */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Artist Logo"
              className="h-16 md:h-20 cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex justify-center font-bold padding-left-350">
          <ul className="flex space-x-10 text-xl text-white pr-[120px]">
            {["HOME", "WORK", "ABOUT", "CONTACT"].map((item, index) => {
              const path = item === "HOME" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path; // Check if active
              return (
                <li key={index}>
                  <Link
                    to={path}
                    className={`font-bold ${
                      isActive ? "text-white opacity-60" : "text-white"
                    } transition-colors duration-300`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Social Media Icons (Desktop) */}
        <div className="hidden md:flex space-x-4 flex justify-center">
          <a
            href="https://www.instagram.com/art_artistic_shubham/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-4xl text-white" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCUq86ZWQAw62DbWNv369n8g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-4xl text-white" />
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </nav>

      {/* Mobile Navigation Modal */}
      {isOpen && (
        <motion.div
          className="fixed md:hidden inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white w-4/5 max-w-sm rounded-lg p-6 flex flex-col items-center space-y-6">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-3xl text-gray-400 focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 justify-center items-center text-bold text-xl text-black">
              {["HOME", "WORK", "ABOUT", "CONTACT"].map((item, index) => {
                const path = item === "HOME" ? "/" : `/${item.toLowerCase()}`;
                const isActive = location.pathname === path; // Check if active
                return (
                  <div key={index}>
                    <Link
                      to={path}
                      className={`font-custom ${
                        isActive ? "text-gray-500" : "text-black"
                      } transition-colors duration-300`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Social Media Icons (Mobile) */}
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/art_artistic_shubham/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl text-black" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCUq86ZWQAw62DbWNv369n8g"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-2xl text-black" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
