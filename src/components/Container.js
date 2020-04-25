import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../App.css';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

const Container = ({location}) => {
  return (
    <div className="container">
      <TransitionGroup>
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
    </div>
  )
}

export default withRouter(Container);