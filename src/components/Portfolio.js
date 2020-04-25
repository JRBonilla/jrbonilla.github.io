import React from 'react';
import Animate from 'animate.css-react';
import '../App.css';
import logo from './Logo.png'
import 'animate.css/animate.css';

// The portfolio page contents
const Portfolio = () => {
    return (
      <Animate appear="fadeInDown" durationAppear={1000} animate={true}>
        <div>
          <p className="page-title">Portfolio</p><br/>
          <div className="card animated fadeInUp" id="project-1">
            <img className="card-img" src={logo} alt="Travel Plan Website"/>
            <div className="card-content">
              <h4 className="card-title">Travel Plan Website</h4>
              <a href="https://github.com/JRBonilla/Travel-Plan-Website">View on GitHub</a>
              <p className="card-body">
                A mock travel plan website made using AngularJS, PHP, and SQL.
              </p>
            </div>
          </div><br/><br/>
          <div className="card animated fadeInUp" id="project-2">
            <img className="card-img" src={logo} alt="Phoebe"/>
            <div className="card-content">
              <h4 className="card-title">Phoebe</h4>
              <a href="https://github.com/JRBonilla/Phoebe">View on GitHub</a>
              <p className="card-body">
                Basic 2D/3D game engine constructed using C++, OpenGL, and GLFW.
              </p>
            </div>
          </div><br/><br/>
          <div className="card animated fadeInUp" id="project-3">
            <img className="card-img" src={logo} alt="DropIn"/>
            <div className="card-content">
              <h4 className="card-title">DropIn</h4>
              <a href="https://github.com/JRBonilla/DropIn">View on GitHub</a>
              <p className="card-body">
                App that allows users to "drop in" and "drop out" of events using swipes.
              </p>
            </div>
          </div>
        </div>
      </Animate>
    )
}

export default Portfolio;