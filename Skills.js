import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title" style={{ color: '#023e8a' }}>SKILLS</h2>
      <div className="skills-underline"></div>

      <div className="skills-container">
        {/* Languages */}
        <div className="skill-card">
          <h3>💻 Languages</h3>
          <ul>
    
            <li>Java</li>
            <li>C</li>
          </ul>
        </div>

        {/* Tools & Platforms */}
        <div className="skill-card">
          <h3>🛠️ Tools & Platforms</h3>
          <ul>
            <li>VS Code</li>
          </ul>
        </div>

        {/* Web Development */}
        <div className="skill-card">
          <h3>🌐 Web Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        {/* Database */}
        <div className="skill-card">
          <h3>🗄️ Database</h3>
          <ul>
            <li>MySql</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
