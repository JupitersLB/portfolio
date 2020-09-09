import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from 'react-player/youtube';

// eslint-disable-next-line react/prefer-stateless-function
export default class Project extends Component {
  render() {
    const { project, icons } = this.props;
    console.log(project.videoUrl);
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
        <div className="project-pain">
          <h3>Pain</h3>
          <p>{project.pain}</p>
        </div>
        <div className="project-solution">
          <h3>Solution</h3>
          <p>{project.solution}</p>
        </div>
      </div>
    );
  }
}
