import React, { Component } from 'react';

export default class ProjectCard extends Component {

  handleClick = () => {
    const { project, changeSelectedProject } = this.props;
    changeSelectedProject(project);
    const container = document.querySelector('.content-container');
    container.scrollTo({top: 0, behavior: 'smooth'});
  }

  render() {
    const { project } = this.props;
    return (
      <div className="project-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url('${project.imageUrl}')` }} onClick={this.handleClick}>
        <div className="project-title">
          <h1>{project.name}</h1>
        </div>
      </div>
    );
  }
}
