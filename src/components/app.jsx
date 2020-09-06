import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


import About from './about';
import Projects from './projects';
import Current from './current';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="my-navbar">
          <div className="my-avatar"></div>
          <div className="my-name">
            <h1>Liam Baker</h1>
          </div>
          <div className="my-title">
            <h3>Full Stack Developer</h3>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/jupiters-liam-baker/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/JupitersLB" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
          <div className="profile-links text-center">
            <Link to="/about"><h5>About Me</h5></Link>
            <Link to="/projects"><h5>Projects</h5></Link>
            <Link to="/current"><h5>Current</h5></Link>
          </div>
          <div className="my-footer">
            <p>This will be an amazing footer!</p>
          </div>
        </div>

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
           <Route path="/projects">
            <Projects />
          </Route>
           <Route path="/current">
            <Current />
          </Route>
        </Switch>
      </Router>
    );
  }
}
