import React, { Component } from 'react';

import ProjectCard from './projectCard';
import Project from './project';
import projects from '../../data/projects';


export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: {},
      selectedProjectIcons: []
    };
  }

  changeSelectedProject = (newSelectedProject) => {
    this.setState({ selectedProject: newSelectedProject });
    const projectShow = document.querySelector('.project-show');
    projectShow.classList.add('active');
    this.changeSelectedIcons(newSelectedProject);
  }

  changeSelectedIcons = (newSelectedProject) => {
    this.setState({ selectedProjectIcons: newSelectedProject.icons });
  }

  render() {
    const { selectedProject, selectedProjectIcons } = this.state;
    return (
      <div className="content-container">
        <Project project={selectedProject} icons={selectedProjectIcons} />
        <div className="project-cards">
          { projects.map(p => <ProjectCard project={p} key={p.id} changeSelectedProject={this.changeSelectedProject} />) }
        </div>
      </div>
    );
  }
}
