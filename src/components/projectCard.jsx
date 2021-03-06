import React, { Component } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export default class ProjectCard extends Component {
  // Changes project card and scrolls back up
  handleClick = () => {
    const { project, changeSelectedProject } = this.props;
    changeSelectedProject(project);
    const projectShow = document.querySelector('.project-show');
    projectShow.scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    const { project } = this.props;
    return (
      <LazyLoadComponent>
        <div className="project-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url('${project.imageUrl}')` }} onClick={this.handleClick}>
          <div className="project-title">
            <h1>{project.name}</h1>
          </div>
        </div>
      </LazyLoadComponent>
    );
  }
}
