import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PlaceOrder from "./pages/PlaceOrder";
import Collection from "./pages/Collection";
import Navbar from "./components/Navbar";
import Particle from "./components/Particle";

const App = () => {
  return (
    <div className="relative">
      {/* Particle background */}
      {/* <Particle className="absolute top-0 left-0 w-full h-screen z-[-1]" /> */}

      {/* Foreground content */}
      <div className="relative px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
