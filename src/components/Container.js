import React from 'react';
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../App.css';
import 'animate.css/animate.css';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

const Container = () => {
  return (
    <Route render={({location}) => (
      <TransitionGroup className="container">
        <CSSTransition
          key={location.key}
          timeout={500}
          classNames={'fade'}
        >
          <Switch location={location}>
            <Route exact path="/" component={Introduction}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}/>
  )
}

export default Container;