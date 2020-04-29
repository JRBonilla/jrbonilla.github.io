import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

// The introduction page contents
const Introduction = () => {
  return (
    <div id="introduction" className="page">
      <p className="intro-text intro-1 animated fadeInUp">Hi, I'm Jonathan</p>
      <p className="intro-text intro-2 animated fadeInUp">I'm a programmer and web developer.</p>
      <div className="intro-text intro-3 animated fadeIn">
        <NavLink exact to="/projects" id="intro-button">
          <span id="arrow">&#10132;</span> View Projects
        </NavLink>
      </div>
    </div>
  )
}

export default Introduction;