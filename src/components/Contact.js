import React from 'react';
import Animate from 'animate.css-react';
import '../App.css';
import 'animate.css/animate.css';

// The contact page contents
const Contact = () => {
  return (
    <Animate appear="fadeInDown" durationAppear={1000} animate={true}>
      <div>
        <p class="page-title">Contact</p>
      </div>
    </Animate>
  )
}

export default Contact;