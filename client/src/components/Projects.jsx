import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Smart Garbage Management System",
      description: "An IoT-based system using sensors and an ESP32 CAM for sorting waste. It detects the type of waste and streams live video to a custom website built with HTML, CSS, and JavaScript.",
      techStack: ["ESP32 CAM", "Sensors", "HTML", "CSS", "JavaScript"],
      reportLink: "https://drive.google.com/file/d/1YEcMGSgfwmGjjiPVbOGfh4-9xAw8ayJN/view?usp=drive_link",
      codeLinks: [
        { name: "Camera", url: "https://drive.google.com/file/d/1HoXVaWyebGqbxlNhFYAh0nh45botSTPP/view?usp=sharing" },
        { name: "Arduino", url: "https://drive.google.com/file/d/1p3Oe0FKPgyY15Mczu9I0sKMy4S6BvFWv/view?usp=sharing" }
      ]
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
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {project.reportLink && (
                    <a href={project.reportLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                      View Report
                    </a>
                  )}
                  {project.codeLinks && (
                    <div className="dropdown">
                      <button className="btn btn-outline btn-sm dropdown-btn">Code ▾</button>
                      <div className="dropdown-content">
                        {project.codeLinks.map((link, idx) => (
                          <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
