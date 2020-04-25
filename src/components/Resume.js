import React from 'react';
import Animate from 'animate.css-react';
import '../App.css';
import 'animate.css/animate.css';

// The resume page contents
const Resume = () => {
  return (
    <Animate appear="fadeInDown" durationAppear={1000} animate={true}>
      <div>
        <p className="page-title">Resume</p>
      </div>
    </Animate>
  )
}

export default Resume;