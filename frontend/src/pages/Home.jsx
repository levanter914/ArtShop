// import React from "react";
// import bgImage from "../assets/landscape/bghome.jpg";

// const Home = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <div
//         className="flex-1 bg-cover bg-center bg-no-repeat  w-auto h-auto"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//         }}
//       >
//         <div className="flex items-center justify-center min-h-screen w-full text-center bg-black/10">
//           <div>
//             <h2 className="text-white text-4xl font-bold">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//               Inventore ipsa voluptatibus dolore, voluptas sapiente quis culpa
//               qui magnam molestiae neque voluptatum aliquid? Nam libero tempore
//               aliquam iste asperiores voluptatum aspernatur?
//             </h2>
//             <p className="text-white text-lg mt-4 max-w-lg"></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/landscape/bghome.jpg";

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
      <div className="flex items-center justify-center min-h-screen w-full text-center bg-black/10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="relative max-w-3xl"
        >
          <h2 className="text-white text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            ipsa voluptatibus dolore, voluptas sapiente quis culpa qui magnam
            molestiae neque voluptatum aliquid? Nam libero tempore aliquam iste
            asperiores voluptatum aspernatur?
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
