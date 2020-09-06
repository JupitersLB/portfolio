import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div className="my-navbar">
        <div className="my-avatar"></div>
        <div className="my-name">
          <h1>Liam Baker</h1>
        </div>
        <div className="my-title">
          <h3>Full Stack Developer</h3>
        </div>
        <div className="icons">
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"><i className="fas fa-envelope"></i> hello</a>
        </div>
      </div>
    );
  }
}
