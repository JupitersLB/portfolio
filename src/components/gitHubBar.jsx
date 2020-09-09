import React, { Component } from 'react';

import counts from './gitHubScrape';

export default class GitHubBar extends Component {
  render() {
    console.log(counts.yours.promise.then(d => console.log(d.owner.reverse().slice(0,4))));
    return (
      <div className="github-banner">
        <p>This will be statistics from GitHub</p>
      </div>
    );
  }
}
