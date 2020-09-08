import React, { Component } from 'react';

import ProjectCard from './projectCard';
import Project from './project';
import projects from '../../data/projects';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: {}
    };
  }

  changeSelectedProject = (newSelectedProject) => {
    // console.log(newSelectedProject);
    this.setState({ selectedProject: newSelectedProject });
  }

  render() {
    const { selectedProject } = this.state;
    return (
      <div className="content-container">
        <Project project={selectedProject} />
        <div className="project-cards">
          { projects.map(p => <ProjectCard project={p} key={p.id} changeSelectedProject={this.changeSelectedProject} />) }
        </div>
      </div>
    );
  }
}
