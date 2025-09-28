import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar"> 
      <div className="navbar-brand"><h2>ANBARASI S</h2></div>
      
      <ul className="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
