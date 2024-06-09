import React from "react";
import arrowSvg from "../images/down-arrow.svg"; // Ensure the path is correct
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";


const imageAltText = "Description for the down arrow image if needed";

const Home = ({ name, title }) => {

  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      <div id="tsparticles">
        {init && <Particles options={particlesOptions} />}
      </div>
      <section id="home" className="min-height" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div style={{ textAlign: "center", zIndex: 2 }}>
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
        <div style={{ position: "absolute", bottom: "3rem", transform: 'translateX(-50%)', left: "50%", zIndex: "2" }}>
          <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
        </div>
      </section>
    </>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;


// import React, { useEffect } from "react";
// import arrowSvg from "../images/down-arrow.svg"; // Ensure the path is correct
// import PropTypes from "prop-types";
// import Particles from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import particlesOptions from "../particles.json";

// const imageAltText = "Description for the down arrow image if needed";

// const Home = ({ name, title }) => {

//   useEffect(() => {
//     const initParticles = async () => {
//       const { tsParticles } = await import("@tsparticles");
//       await loadFull(tsParticles);
//     };

//     initParticles();
//   }, []);

//   return (
//     <>
//       <div id="tsparticles">
//         <Particles options={particlesOptions} />
//       </div>
//       <section id="home" className="min-height" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <div style={{ textAlign: "center", zIndex: 2 }}>
//           <h1>{name}</h1>
//           <h2>{title}</h2>
//         </div>
//         <div style={{ position: "absolute", bottom: "3rem", transform: 'translateX(-50%)', left: "50%", zIndex: "2" }}>
//           <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
//         </div>
//       </section>
//     </>
//   );
// };

// Home.propTypes = {
//   name: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

// export default Home;

