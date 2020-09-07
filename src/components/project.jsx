import React, { Component } from 'react';

export default class Project extends Component {
  render() {
    const project = this.props;
    return (
      <div className="project-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${project.data.imageUrl}')` }}>
        <h1>{project.data.name}</h1>
      </div>
    );
  }
}
