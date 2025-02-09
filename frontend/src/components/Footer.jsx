import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-6 flex flex-col items-center fixed bottom-0 left-0">
      {/* Social Links */}
      <div className="flex space-x-6 mb-4">
        <a 
          href="https://www.instagram.com/art_artistic_shubham/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Instagram profile"
          className="text-2xl hover:text-gray-600"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://www.facebook.com/artartisticshubham" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Facebook profile"
          className="text-2xl hover:text-gray-600"
        >
          <FaFacebook />
        </a>
        <a 
          href="https://www.youtube.com/channel/UCUq86ZWQAw62DbWNv369n8g"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit YouTube profile"
          className="text-2xl hover:text-gray-600"
        >
          <FaYoutube />
        </a>
        <a 
          href="mailto:artartisticshubham@gmail.com" 
          aria-label="Send email"
          className="text-2xl hover:text-gray-600"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-600">
        © 2025 by Shubham Kumar Singh
      </div>
    </div>
  );
};

export default Footer;
