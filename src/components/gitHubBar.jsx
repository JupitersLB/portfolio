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
    console.log(this.state);
    return (
      <div className="github-banner">
        <p>Yours: {yoursMonth}</p>
        <p>Mister Cocktail: {misterMonth}</p>
        <p>Medi-Safe: {mediMonth}</p>
        <p>Portfolio: {portfolioMonth}</p>
        <p>Total: {mediMonth + portfolioMonth + misterMonth + yoursMonth}</p>
      </div>
    );
  }
}
