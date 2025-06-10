import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="name-highlight">Pratiksha Nayak</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A passionate <span className="highlight">Full Stack Web Developer</span> building modern, scalable, and impactful digital experiences.
          </motion.p>

          <motion.a
            href="#projects"
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            View Portfolio →
          </motion.a>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
