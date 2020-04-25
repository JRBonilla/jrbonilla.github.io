import React from 'react';
import { NavLink } from 'react-router-dom';
import Animate from 'animate.css-react';
import '../App.css';
import 'animate.css/animate.css';

// The introduction page contents
const Introduction = () => {
  return (
    <div id="introduction">
      <p className="intro-text intro-1 animated fadeInUp">Hi, I'm Jonathan</p>
      <p className="intro-text intro-2 animated fadeInUp">I'm a Ryerson CompSci student.</p>
      <div className="intro-text intro-3 animated fadeIn">
        <NavLink exact to="/portfolio" id="intro-button">
          <span id="arrow">&#10132;</span> View Portfolio
        </NavLink>
      </div>
    </div>
  )
}

export default Introduction;