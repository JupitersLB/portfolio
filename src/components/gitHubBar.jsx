import React, { Component } from 'react';

import counts from './gitHubScrape';

// eslint-disable-next-line react/prefer-stateless-function
export default class GitHubBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yoursMonth: [],
      yoursWeek: [],
      misterMonth: [],
      misterWeek: [],
      mediMonth: [],
      mediWeek: [],
      portfolioMonth: [],
      portfolioWeek: []
    };
    this.getMonthlyCommits();
  }

  getMonthlyCommits = () => {
    counts.mediSafe.promise.then(d => this.setState({
      mediMonth: d.owner.reverse().slice(0, 4).reduce((total, amount) => total + amount),
    }));
    counts.portfolio.promise.then(d => this.setState({
      portfolioMonth: d.owner.reverse().slice(0, 4).reduce((total, amount) => total + amount),
    }));
    counts.cocktail.promise.then(d => this.setState({
      misterMonth: d.owner.reverse().slice(0, 4).reduce((total, amount) => total + amount),
    }));
    counts.yours.promise.then(d => this.setState({
      yoursMonth: d.owner.reverse().slice(0, 4).reduce((total, amount) => total + amount),
    }));
  }

  // getWeeklyCommits = () => {
  //   const { yoursMonth, misterMonth, mediMonth, portfolioMonth } = this.state;
  //   this.setState({
  //     portfolioWeek: portfolioMonth,
  //     misterWeek: misterMonth,
  //     yoursWeek: yoursMonth,
  //     mediWeek: mediMonth
  //   });
  // }

  render() {
    // console.log(counts);
    // console.log(counts.yours.promise.then(d => console.log(d.owner.reverse().slice(0,4))));
    const { yoursMonth, misterMonth, mediMonth, portfolioMonth } = this.state;
    return (
      <div className="github-placegolder">
        <div className="github-banner">
          <span role="img" aria-label="race-car">🏎</span>
          <p>Monthly commits -></p>
          <p><b>Yours:</b> {yoursMonth}</p>
          <p><b>Mister Cocktail:</b> {misterMonth}</p>
          <p><b>Medi+Safe:</b> {mediMonth}</p>
          <p><b>Portfolio:</b> {portfolioMonth}</p>
          <p><b>Total:</b> {mediMonth + portfolioMonth + misterMonth + yoursMonth}</p>
        </div>
      </div>
    );
  }
}
