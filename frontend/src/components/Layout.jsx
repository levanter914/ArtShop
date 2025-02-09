import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import Work from "../pages/Work";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Work />
      <Footer />
    </>
  );
};

export default Layout;
