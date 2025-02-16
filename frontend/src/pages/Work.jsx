import React from "react";
import banner from "../assets/bannerwork.svg";
import Grid from "../components/Grid";

const Collection = () => {
  return (
    <div className="relative min-h-screen">

      <div className="relative">
        <img src={banner} alt="Banner" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold text-center px-4">
            Works
          </div>
      </div>
      <Grid/>
    </div>
    
  );
};

export default Collection;
