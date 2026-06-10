import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content glass-card animate-fade-in-up">
          <p>
            I am an Electronics and Communication Engineering graduate with a strong interest in frontend and full-stack web development, backed by hands-on experience in building responsive and user-friendly web applications using React, JavaScript, Node.js, HTML, CSS, and Python.
          </p>
          <p>
            Alongside web technologies, I have a solid foundation in electronics, embedded systems, and IoT, with practical experience in developing projects involving microcontrollers, sensors, and hardware-software integration. 
          </p>
          <p>
            Possessing strong problem-solving, analytical, and communication skills, I am eager to learn and adapt to emerging technologies. I am seeking an opportunity to contribute and grow as a Web Developer, while leveraging my knowledge of Python, modern web technologies, and IoT-based systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
