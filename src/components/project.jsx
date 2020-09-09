import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Project extends Component {
  render() {
    const { project, icons } = this.props;
    console.log(icons);
    return (
      <div className="project-show">
        <div className="project-heading">
          <h1 className="project-title">{project.name}</h1>
          <h1 className="project-role"><small>{project.role}</small></h1>
        </div>
        <div className="project-body">
          <a href={project.url} target="blank">
            <div className="project-image" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('${project.imageUrl}')` }}></div>
          </a>
          <div className="project-description">
            <h3>Background</h3>
            <h4>{project.description}</h4>
            <div className="project-icons">
              <h3>Skills</h3>
              { icons.map(icon => <FontAwesomeIcon icon={icon} key={icon.icon} />) }
            </div>
          </div>
        </div>
        <div className="project-target">
          <h3>Target</h3>
          <p>{project.target}</p>
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
