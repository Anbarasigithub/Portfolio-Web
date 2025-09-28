import React from 'react';

const Projects = () => {
  return (
    <section className="projects-section" >
      <h2 className="section-title" style={{ color: '#023e8a' }}>PROJECTS</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3 className="project-title">IoT Based Automatic Fire Detecting And Notification System</h3>
          <p className="project-description">
            Improves early fire hazard detection and minimizes damage through real-time alerts.
          </p>
          <div className="project-tags">
            <span className="tag">Arduino</span>
            <span className="tag">Sensors</span>
            <span className="tag"> GSM Module</span>
          </div>
        </div>

        <div className="project-card">
          <h3 className="project-title">Weather Station Using Raspberry Pi Pico</h3>
          <p className="project-description">
            To monitor basic weather parameters in real-time using a microcontroller and a sensor.
          </p>
          <div className="project-tags">
            <span className="tag">Raspberry Pi Pico</span>
            <span className="tag">DHT11 sensor</span>
          </div>
        </div>

        <div className="project-card">
          <h3 className="project-title">Form Validation with MongoDB</h3>
          <p className="project-description">
            A responsive form that validates input and stores data in MongoDB using Node.js backend.
          </p>
          <div className="project-tags">
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
