import React, { Component } from 'react';

export default class Project extends Component {

  render() {
    const { project } = this.props;
    return (
      <div className="project-show">
        <div className="project-heading">
          <h1 className="project-title">{project.name}</h1>
          <h1 className="project-role"><small>{project.role}</small></h1>
        </div>
        <a href={project.url} target="blank">
          <div className="project-image" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('${project.imageUrl}')` }}></div>
        </a>
        <div className="project-description">
          <h3>{project.description}</h3>
        </div>
      </div>
    );
  }
}
