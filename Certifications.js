import React from 'react';

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2 className="section-title">CERTIFICATIONS</h2>
      
      <div className="certifications-container">
        <div className="certification-card">
          <h3 className="certification-title">Introduction to Internet of Things</h3>
          <p className="certification-provider">NPTEL</p>
        </div>
        <div className="certification-card">
          <h3 className="certification-title">Introduction to Microsoft Excel</h3>
          <p className="certification-provider">Coursera</p>
        </div>
        <div className="certification-card">
          <h3 className="certification-title">STEP Certification</h3>
          <p className="certification-provider">The Hindu Group</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
