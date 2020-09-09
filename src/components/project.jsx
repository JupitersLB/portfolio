import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Project extends Component {
  render() {
    const { project, icons } = this.props;
    return (
      <div className="project-show">
        <div className="project-heading">
          <h1 className="project-title">{project.name}</h1>
        </div>
        <div className="project-body">
          <a href={project.url} target="blank">
            <div className="project-image" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('${project.imageUrl}')` }}></div>
          </a>
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
