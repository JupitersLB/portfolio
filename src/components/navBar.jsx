import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default class NavBar extends Component {
  render() {
    return (
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
          <h5>About Me</h5>
          <h5>Projects</h5>
          <h5>Current</h5>
        </div>
        <div className="my-footer">
          <p>This will be an amazing footer!</p>
        </div>
      </div>
    );
  }
}
