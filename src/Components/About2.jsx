import React from "react";

const description = "I'm a recent graduate from Lighthouse Labs Full Stack Web Developer Diploma program. I have experience with all of the following.";

const skillsList = ["HTML", "CSS", "Express", "ReactJS", "NextJS", "Tailwind CSS", "Bootstrap", "PostgreSQL"];

const detailOrQuote = "I am passionate about solving problems in new creative ways to drive innovation. I am currently exploring different technologies and playing with animations. I am always looking for new and better ways to solve problems and love the feeling when I finally figure out how to solve them.";

const About2 = () => {
  return (
    <section className="padding" id="about">
      <div className="glow">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="responsive-list">
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

export default About2;
