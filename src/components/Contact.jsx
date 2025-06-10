import React from "react";
import { motion } from "framer-motion";
import "animate.css";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact-section animate__animated animate__fadeInDownBig"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 style={{fontSize : "45px"}}>Contact Me</h2>
      <div className="contact-boxes">
        <div className="contact-box">
          
          <a href="mailto:nayakpratiksha1504@gmail.com">
          <h4>Email</h4>
          </a>
        </div>
        <div className="contact-box">
      
          <a href="https://www.linkedin.com/in/pratiksha-nayak-99b35b2ab/" target="_blank" rel="noreferrer">
              <h4>LinkedIn</h4>
          </a>
        </div>
        <div className="contact-box">
        
          <a href="https://github.com/Taeksha" target="_blank" rel="noreferrer">
             <h4>GitHub</h4>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
