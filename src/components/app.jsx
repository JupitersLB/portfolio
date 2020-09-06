import React, { Component } from 'react';

import NavBar from './navBar';
import ContentShow from '../containers/contentShow';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContentShow />
      </div>
    );
  }
}
