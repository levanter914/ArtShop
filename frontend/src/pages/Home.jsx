import Layout from "../components/Layout";
import React from "react";
import bgImage from "../assets/landscape/bghome.jpg";

const Home = () => {
  return (
    <Layout>
      <div
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="flex items-center justify-center h-screen w-full text-center">
        <div>
          <h1 className="text-white text-4xl font-bold">Welcome to Home</h1>
          <p className="text-white text-lg mt-4 max-w-lg">
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Home;
