import React, { Component } from 'react';

export default class Project extends Component {

  render() {
    const { project } = this.props;
    return (
      <div className="project-show">
        <h1>{project.name}</h1>
        <a href={project.url} target="blank">
          <div className="project-image" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('${project.imageUrl}')` }}></div>
        </a>
        <h1>{project.description}</h1>
      </div>
    );
  }
}
