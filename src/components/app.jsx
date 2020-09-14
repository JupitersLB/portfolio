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
import GitHubBar from './gitHubBar';
import About from './about';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    const test = process.env.MY_VARIABLE;
    console.log(test);
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
            <Link to="/"><h5>Projects</h5></Link>
            <Link to="/about"><h5>About</h5></Link>
          </div>
          <div className="row">
            <div className="my-footer">
              <div className="icons">
                <a href="https://www.linkedin.com/in/jupiters-liam-baker/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/JupitersLB" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              </div>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}
