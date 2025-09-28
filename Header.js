import React from 'react';
import img from './image/img.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <section className="hero" >
      <div className="hero-content">
        <div className="profile-section">
          <img src={img} alt="Anbarasi S" className="profile-image" />
          <div className="social-links">
            <a href="https://www.linkedin.com/in/anbarasi-sakthivel-46870225a/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://github.com/Anbarasigithub" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="mailto:svel5228@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </div>

        <div className="personal-details">
          <h2>ANBARASI SAKTHIVEL</h2>
          <h3 className="subtitle">Software Developer</h3>
          <p className="subtitle1">
            A passionate learner with a keen interest in software development.
            <br />
            Focused on building responsive web applications and solving real-world
            <br />
            problems through clean and efficient code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
