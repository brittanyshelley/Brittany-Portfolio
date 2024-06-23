import React from "react";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a recent graduate from Lighthouse Labs Full Stack Web Developer Diploma program.I have experience with all of the following.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
// const skillsList = [
//   "HTML",
//   "CSS",
//   "ReactJS",
//   "NextJS",
//   "Mobile user interfaces",
//   "Graphic design",
// ];

const skillsList = ["HTML", "CSS", "Express", "ReactJS", "NextJS", "Mobile user interfaces", "Graphic design"];
/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <div className="glow">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul style={{
          display: "grid",
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            zIndex: "10",
          }}>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
