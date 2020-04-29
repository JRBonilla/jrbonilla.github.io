import React from 'react';
import '../App.css';

// The about page contents
const About = () => {
  return (
      <div className="page">
        <p className="page-title">About Me</p>
        <div className="about-me animated fadeInUp">
          <p>
            I'm a Computer Science student in my final year of studies with a passion
            for software and web development excited to begin my career as a developer.
          </p>
          <p>
            My years of experience and education have let me gain a solid
            background in programming languages such as Java, C/C++, and C#, and
            web technologies including HTML, CSS, JavaScript, AngularJS, React.js,
            PHP, and SQL.
          </p>
        </div>
      </div>
  )
}

export default About;