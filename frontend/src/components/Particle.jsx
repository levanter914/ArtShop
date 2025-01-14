import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Particle = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
     
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#ffffff",
        },
      },
      fpsLimit: 100,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.1,
          },
        },
      },
      particles: {
        color: {
          value: "#000000",
        },
        links: {
          color: "#000000",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "square",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
      preset: "fountain",
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default Particle


// import { useEffect, useState } from "react";
// import Particles from "@tsparticles/react";
// import { tsParticles } from "tsparticles-engine"; // Import the engine directly
// import { loadFountainPreset } from "tsparticles-preset-fountain"; // Import the fountain preset

// const Particle = () => {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     const initializeParticles = async (engine) => {
//       console.log("Initializing tsParticles engine..."); // Log initialization
//       try {
//         await loadFountainPreset(engine); // Load the fountain preset
//         console.log("Fountain preset loaded successfully!");
//         setInit(true); // Mark as initialized after loading the preset
//       } catch (error) {
//         console.error("Error loading fountain preset:", error); // Log any errors
//       }
//     };

//     initializeParticles(tsParticles); // Pass the engine directly
//   }, []);

//   const particlesLoaded = (container) => {
//     if (container) {
//       console.log("Particles loaded successfully:", container); // Log container details
//     } else {
//       console.warn("Particles container is undefined or not loaded.");
//     }
//   };

//   const options = {
//     preset: "fountain", // Ensure this preset is used
//     background: {
//       color: {
//         value: "#000000", // Background color
//       },
//     },
//     particles: {
//       number: {
//         value: 200, // Use reduced particles for debugging
//       },
//     },
//   };

//   if (!init) {
//     console.log("Waiting for fountain preset to load...");
//     return null; // Render nothing until particles are initialized
//   }

//   return (
//     <Particles
//       id="tsparticles"
//       className="absolute top-0 left-0 w-full h-full"
//       particlesLoaded={particlesLoaded}
//       options={options}
//     />
//   );
// };

// export default Particle;

