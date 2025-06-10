import React from 'react';
import { motion } from 'framer-motion';
import 'animate.css';
import './About.css';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="animate__animated animate__backInLeft about-title">
        About Me
      </h2>
      <p className="animate__animated animate__backInLeft about-description">
        I’m a self-motivated <span className="highlight">Full Stack Developer</span> with expertise in frontend technologies like <span className="highlight">React.js</span>, <span className="highlight">HTML</span>, <span className="highlight">CSS</span>, <span className="highlight">JavaScript</span> and backend tools including <span className="highlight">Node.js</span>, <span className="highlight">Express</span>, and <span className="highlight">MongoDB</span>. I’ve built dynamic, responsive web applications, RESTful APIs, and secure authentication flows using JWT and bcrypt.
      </p>
    </motion.section>
  );
};

export default About;
