import React from 'react';

const Education = () => {
  return (
    <section className="education-section" id="education" >
      <h2 className="section-title" style={{ color: '#023e8a' }}>EDUCATION</h2>
      <div className="education-list">
        <div className="education-card">
          <h3 className="edu-school">M.Kumarasamy College of Engineering</h3>
          <p className="edu-degree">B.E. in Electronics and Communication Engineering (2022 - 2026)</p>
        </div>

        <div className="education-card">
          <h3 className="edu-school">Government Girls Higher Secondary School</h3>
          <p className="edu-degree">HSC (2020 - 2022)</p>
        </div>

        <div className="education-card">
          <h3 className="edu-school">Government Girls Higher Secondary School</h3>
          <p className="edu-degree">SSLC (2019 - 2020)</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
