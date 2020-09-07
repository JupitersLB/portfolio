import React, { Component } from 'react';

export default class Project extends Component {
  render() {
    const project = this.props;
    return (
      <div className="project-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url('${project.data.imageUrl}')` }}>
        <div className="project-title">
          <h1>{project.data.name}</h1>
        </div>
      </div>
    );
  }
}
