import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import 'animate.css';

const allSkills = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
];

const Skills = () => {
  // Divide into 2 rows
  const mid = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, mid);
  const row2 = allSkills.slice(mid);

  return (
    <motion.section id="skills" className="section skills">
      <section className="skills-section">
        <h2 style={{ fontSize: "45px" }}>My Skills</h2>
        <div className="skills-wrapper animate__animated animate__fadeInUp">
          <div className="skills-row">
            {row1.map((skill, index) => (
              <div className="skill" key={index}>
                <i className={skill.icon}></i>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="skills-row">
            {row2.map((skill, index) => (
              <div className="skill" key={index}>
                <i className={skill.icon}></i>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Skills;
