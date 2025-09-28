import React from 'react';
const Resume = () => {
  return (
    <section className="resume-section" >
      <h2 className="resume-title" style={{ color: '#023e8a' }}>RESUME</h2>
      <div className="resume-card">
        <div className="resume-content">
          <i className="resume-icon">📄</i>
          <p className="resume-text">Download my comprehensive resume to learn more about my experience, education, and professional background. <br/>The resume includes detailed information about my technical skills.</p>
          <a href="/Anbarasi S(Resume).pdf" className="resume-download" download>
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
