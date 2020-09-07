import React, { Component } from 'react';

import Project from './project';

import projects from '../../data/projects';

export default class Projects extends Component {
  render() {
    return (
      <div className="content-container">
        <h1>Projects</h1>
        <div className="project-cards">
          { projects.map(p => <Project data={p} key={p.id} /> ) }
        </div>
      </div>
    );
  }
}
