import React from 'react';
import 'animate.css/animate.css';
import '../App.css';
import wip from './wip.png';

// The projects page contents
const Projects = () => {
    return (
      <div className="page">
        <p className="page-title">Projects</p><br/>
        <div className="card animated fadeInUp" id="project-1">
          <img className="card-img" src={wip} alt="Travel Plan Website"/>
          <div className="card-content">
            <a className="card-link" href="https://github.com/JRBonilla/Travel-Plan-Website" title="View on GitHub"><i className="fas fa-external-link-alt"></i></a>
            <h4 className="card-title">Travel Plan Website</h4>
            <p className="card-body">
            Mock travel plan website made with AngularJS, PHP, and SQL.
            </p>
          </div>
        </div>
        <div className="card animated fadeInUp" id="project-2">
          <img className="card-img" src={wip} alt="Phoebe"/>
          <div className="card-content">
            <a className="card-link" href="https://github.com/JRBonilla/Phoebe" title="View on GitHub"><i className="fas fa-external-link-alt"></i></a>
            <h4 className="card-title">Phoebe</h4>
            <p className="card-body">
            Simple game engine made in C++, OpenGL, and GLFW.
            </p>
          </div>
        </div>
        <div className="card animated fadeInUp" id="project-3">
          <img className="card-img" src={wip} alt="DropIn"/>
          <div className="card-content">
            <a className="card-link" href="https://github.com/JRBonilla/DropIn" title="View on GitHub"><i className="fas fa-external-link-alt"></i></a>
            <h4 className="card-title">DropIn</h4>
            <p className="card-body">
            App that lets users drop in and out of events using swipes.
            </p>
          </div>
        </div>
      </div>
    )
}

export default Projects;