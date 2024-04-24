// /**
//  * Home component
//  *
//  * The section at the top of the page to display image of your
//  * choice, name and title that describes your career focus.
//  */

// import React from "react";
// import arrowSvg from "../images/down-arrow.svg";
// import PropTypes from "prop-types";

// /**
//  * Home background image
//  *
//  * Below is a sample image. Upload the image of your choice into the "images"
//  * directory and import here for use. Then, set imageAltText to string that
//  * represents what you see in that image.
//  *
//  *
//  * Need an image? Check out https://unsplash.com to download a photo you
//  * freely use on your site.
//  */
// // import image from "../images/woman-with-tablet.jpg";

// const imageAltText =
//   "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

// const Home = ({ name, title }) => {
//   return (
//     <section id="home" className="min-height">
//       {/* <img className="background" src={image} alt="" /> */}
//       <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem", zIndex: 10, }}>
//         <h1>{name}</h1>
//         <h2>{title}</h2>
//       </div>
//       <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
//         <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
//       </div>
//     </section>
//   );
// };

// Home.defaultProps = {
//   name: "",
//   title: "",
// };

// Home.propTypes = {
//   name: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

// export default Home;




import React from "react";
import arrowSvg from "../images/down-arrow.svg"; // Ensure the path is correct
import PropTypes from "prop-types";

const imageAltText = "Description for the down arrow image if needed";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {/* Background image (if used, uncomment and update the src attribute)
      <img className="background" src={image} alt="" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} />
      */}
      <div style={{ textAlign: "center", zIndex: 2 }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", transform: 'translateX(-50%)', left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
