import React from "react";

const projectList = [
  {
    title: "My Resume Site",
    description: "Created with FlowCV",
    url: "https://flowcv.com/resume/lt75ebjrs9",
  },
  {
    title: "Tweeter",
    description:
      "A Twitter clone that allows users to post tweets, like tweets, and follow other users.",
    url: "https://brittanytweeter-ce1e83a55d18.herokuapp.com/",
  },
  {
    title: "Broker Marketing Site",
    description: "A Mortgage Broker Marketing site that I am currently working on",
    url: "https://veronicaratefair.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      {/* <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}> */}
      <div className="container">
        {projectList.map((project) => (
          <div className="box" key={project.title}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3>{project.title}</h3>
            </a>
            <p className="small">{project.description}</p>
          </div>
        ))}
      </div>
    {/* </div> */}
    </section >
  );
};

export default Portfolio;


// import React from "react";

// const projectList = [
//   {
//     title: "My CV",
//     description: "My CV",
//     url: "flowcv.me/brittany-shelley",
//   },
//   {
//     title: "My Resume Site",
//     description: "Created with FlowCV",
//     url: "https://flowcv.com/resume/lt75ebjrs9",
//   },
//   {
//     title: "Tweeter",
//     description:
//       "A Twitter clone that allows users to post tweets, like tweets, and follow other users.",
//     url: "https://brittanytweeter-ce1e83a55d18.herokuapp.com/",
//   },
//   {
//     title: "Broker Marketing Site",
//     description: "A Mortgage Broker Marketing site that I am currently working on",
//     url: "https://veronicaratefair.vercel.app/",
//   },
// ];

// const Portfolio = () => {
//   return (
//     <section className="portfolio-section" id="portfolio">
//       <h2 className="portfolio-title">Portfolio</h2>
//       <div className="portfolio-container">
//         {projectList.map((project) => (
//           <div className="portfolio-box" key={project.title}>
//             <a href={project.url} target="_blank" rel="noopener noreferrer">
//               <h3>{project.title}</h3>
//             </a>
//             <p className="portfolio-description">{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

// import React from "react";

// const projectList = [
//   {
//     title: "My CV",
//     description: "My CV",
//     url: "flowcv.me/brittany-shelley",
//   },
//   {
//     title: "My Resume Site",
//     description: "Created with FlowCV",
//     url: "https://flowcv.com/resume/lt75ebjrs9",
//   },
//   {
//     title: "Tweeter",
//     description: "A Twitter clone that allows users to post tweets, like tweets, and follow other users.",
//     url: "https://brittanytweeter-ce1e83a55d18.herokuapp.com/",
//   },
//   {
//     title: "Broker Marketing Site",
//     description: "A Mortgage Broker Marketing site that I am currently working on",
//     url: "https://veronicaratefair.vercel.app/",
//   },
// ];

// const Portfolio = () => {
//   return (
//     <section className="portfolio-section" id="portfolio">
//       <h2 className="portfolio-title">Portfolio</h2>
//       <div className="portfolio-container">
//         {projectList.map((project) => (
//           <div className="portfolio-box" key={project.title}>
//             <a href={project.url} target="_blank" rel="noopener noreferrer">
//               <h3>{project.title}</h3>
//             </a>
//             <p className="portfolio-description">{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

