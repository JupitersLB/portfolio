import React, { Component } from 'react';
// Switches the components
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Projects from './projects';
import GitHubBar from './gitHubBar';
import About from './about';

export default class App extends Component {
  handleClick = () => {
    // hide project card if the the project tab is pressed again.
    const projectShow = document.querySelector('.project-show');
    if (projectShow) {
      projectShow.classList.remove('active');
    }
  }
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
            <h3>Full-stack Developer</h3>
          </div>
          <div className="about-me">
            <p>
              I'm a full-stack developer who builds off inspiration from previous
              experiencs.  After attending <a href="https://www.switchup.org/rankings/best-coding-bootcamps" target="blank"> the best coding bootcamp in the world</a>,
              I have consolidated my skills in Ruby on Rails and developed knowledge in JavaScript frameworks such as React, Redux, and Stimulus JS
            </p>
          </div>
          <div className="profile-links text-center">
            <Link to="/"><h5>About</h5></Link>
            <Link to="/projects" onClick={this.handleClick}><h5>Projects</h5></Link>
          </div>
          <div className="row">
            <div className="my-footer">
              <div className="icons">
                <a href="https://www.linkedin.com/in/jupiters-liam-baker/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/JupitersLB" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
              </div>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    );
  }
}
