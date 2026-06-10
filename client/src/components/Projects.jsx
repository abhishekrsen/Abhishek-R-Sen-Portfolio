import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Smart Garbage Management System",
      description: "An IoT-based system using sensors and an ESP32 CAM for sorting waste. It detects the type of waste and streams live video to a custom website built with HTML, CSS, and JavaScript.",
      techStack: ["ESP32 CAM", "Sensors", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Distance Measurement Device",
      description: "A simple, precise project that uses an ultrasonic sensor to measure distances accurately. Demonstrates solid understanding of embedded systems and sensor integration.",
      techStack: ["Ultrasonic Sensor", "Embedded C", "Microcontroller"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className={`project-card glass-card delay-${(index + 1) * 100} animate-fade-in-up`}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech">
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
