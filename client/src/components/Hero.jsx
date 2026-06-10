import React from 'react';
import profilePic from '../assets/profile.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-slide-in-left">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Abhishek R Sen.</h1>
          <div className="hero-subtitle-row">
            <h2 className="hero-title">I build things for the web and the physical world.</h2>
            <img src={profilePic} alt="Abhishek R Sen" className="hero-profile-pic animate-fade-in-up delay-300" />
          </div>
          <p className="hero-subtitle delay-200 animate-fade-in-up">
            Electronics & Communication Engineer | Web Developer | IoT Enthusiast
          </p>
          <div className="hero-cta delay-300 animate-fade-in-up">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline" style={{ marginLeft: '1rem' }}>Contact Me</a>
            <a href="https://drive.google.com/file/d/1-Oem3aK4jWU1Qd_Bnsx2eEi_a-Ma00Ub/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginLeft: '1rem' }}>View My Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
