import React, { Component } from 'react';

export default class Project extends Component {

  render() {
    const { project } = this.props;
    return (
      <div>
        <h1>{project.name}</h1>
        <h1>{project.url}</h1>
        <h1>{project.description}</h1>
      </div>
    );
  }
}
