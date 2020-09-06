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

import Projects from './projects';
import Current from './current';
import GitHubBar from './gitHubBar';
import Home from './home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <GitHubBar />
        <div className="my-navbar">
          <div className="my-avatar"></div>
          <div className="my-name">
            <h1>Liam Baker</h1>
          </div>
          <div className="my-title">
            <h3>Full Stack Developer</h3>
          </div>
          <div className="about-me">
            <p>
              I'm a full stack developer who builds off inspiration from previous
              experiencs.  After attending <a href="https://www.switchup.org/rankings/best-coding-bootcamps" target="blank"> the best coding bootcamp in the world</a>,
              I have focused on using the skills I gained during the bootcamp and making sure I go
              further to learn React, Redux, and Python.
            </p>
          </div>
          <div className="profile-links text-center">
            <Link to="/projects"><h5>Projects</h5></Link>
            <Link to="/current"><h5>Current</h5></Link>
          </div>
          <div className="my-footer">
            <div className="icons">
              <a href="https://www.linkedin.com/in/jupiters-liam-baker/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/JupitersLB" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/">
            <Home />
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
