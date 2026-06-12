import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Smart Garbage Management System",
      description: "An IoT-based system using sensors and an ESP32 CAM for sorting waste. It detects the type of waste and streams live video to a custom website built with HTML, CSS, and JavaScript.",
      techStack: ["ESP32 CAM", "Sensors", "HTML", "CSS", "JavaScript"],
      reportLink: "https://drive.google.com/file/d/1-Oem3aK4jWU1Qd_Bnsx2eEi_a-Ma00Ub/view?usp=drive_link"
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
                {project.reportLink && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <a href={project.reportLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      View Report
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-summary glass-card delay-300 animate-fade-in-up" style={{ marginTop: '3rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Additional Experience</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Beyond the highlights above, I have completed numerous projects as part of my college curriculum and through a side business at home. My hands-on experience includes over <strong>6+ IoT projects</strong> and <strong>3+ Web Development projects</strong>, constantly pushing me to learn and build functional real-world solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
