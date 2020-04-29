import React from 'react';
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Container as BootstrapContainer } from 'react-bootstrap';
import '../App.css';
import 'animate.css/animate.css';
import Introduction from './Introduction';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

// Routes between the different pages
const Container = () => {
  return (
    <Route render={({location}) => (
      <BootstrapContainer>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={800}
            classNames={'fade'}
          >
            <Switch location={location}>
              <Route exact path="/" component={Introduction}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </BootstrapContainer>
    )}/>
  )
}

export default Container;