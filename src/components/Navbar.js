import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import logo from './Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myTopNav">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <NavLink exact to="/"><img src={logo} id="logo"/></NavLink>
        </div>
        <div className="collapse navbar-collapse" id="myTopNav">
          <ul className="nav navbar-nav topnav">
            <li><NavLink className="button" id="home-button" exact to="/">Home</NavLink></li>
            <li><NavLink className="button" id="portfolio-button" exact to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink className="button" id="resume-button" exact to="/resume">Resume</NavLink></li>
            <li><NavLink className="button" id="contact-button" exact to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;