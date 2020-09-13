import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

import ReactPlayer from 'react-player/youtube';

// eslint-disable-next-line react/prefer-stateless-function
export default class Project extends Component {

  handleClick = () => {
    const projectCards = document.querySelector('.project-cards');
    projectCards.classList.remove('deactivate');
    projectCards.scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    const { project, icons } = this.props;
    return (
      <div className="project-show">
        <div className="project-heading">
          <h1 className="project-title">{project.name}</h1>
        </div>
        <div className="project-body">
          <div className="youtube-player">
            <ReactPlayer
              url={project.videoUrl}
              height="400px"
              width="100%"
            />
          </div>
          <div className="project-description">
            <h2>Background</h2>
            <h4>{project.description}</h4>
            <div className="project-role">
              <h2>Role</h2>
              <h4>{project.role}</h4>
            </div>
            <div className="project-icons">
              <h2>Skills</h2>
              { icons.map(icon => <FontAwesomeIcon icon={icon} key={icon.icon} />) }
            </div>
          </div>
        </div>
        <div className="project-details">
          <div className="project-pain">
            <div className="pain-title">
              <h3>
                Pain
                <span role="img" aria-label="goblin">👺</span>
              </h3>
            </div>
            <div className="pain-body">
              <p>{project.pain}</p>
            </div>
          </div>
          <div className="project-solution">
            <div className="solution-title">
              <h3>
                Solution
                <span role="img" aria-label="lightbulb">💡</span>
              </h3>
            </div>
            <div className="solution-body">
              <p>{project.solution}</p>
            </div>
          </div>
        </div>
        <div className="scroll-down-icon">
          <FontAwesomeIcon icon={faSortDown} onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
