import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { category: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
    { category: "Embedded Systems & IoT", items: ["IoT Development", "Microcontroller Programming", "Sensor Integration", "Hardware-Software Integration"] },
    { category: "Editing Software", items: ["DaVinci Resolve", "Adobe Photoshop"] },
    { category: "Languages & Others", items: ["Embedded C", "Python", "MS Office (Word, Excel)"] },
    { category: "Soft Skills", items: ["Problem Solving", "Analytical Skills", "Time management & prioritization", "Quick learner", "Teamwork", "Adaptability to new tools and technologies"] }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className={`skill-card glass-card delay-${(index + 1) * 100} animate-fade-in-up`}>
              <h3>{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
