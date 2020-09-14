import React, { Component } from 'react';

import Mapbox from './mapbox';
import { hobbyImages } from '../../data/hobbies';


// eslint-disable-next-line react/prefer-stateless-function
export default class Test extends Component {
  componentDidMount() {
    const elements = document.querySelectorAll('.hidden');
    const parent = document.querySelector('.test');
    parent.addEventListener('scroll', () => {
      elements.forEach((element, idx) => {
        if (parent.scrollTop > (element.clientHeight * (idx + 1)) - 400) {
          element.classList.remove('hidden');
          element.classList.add('fade-in-element');
        } else {
          element.classList.remove('fade-in-element');
          element.classList.add('hidden');
        }
      });
    });
  }
  render() {
    return (
      <div className="test">
        <h1 className="about-heading">About me</h1>
        <div className="col-8 offset-2 text">
          <p>I'm a programmer from the UK who has spent most of the last decade living, working, and traveling in Asia.
           Traveling, exploring, and trying new things is something I love. Whenever possible, I'll try to explore and
           discover new ways of seeing the world around me. This interest in exploration and discovery is
           a huge part of my passion for programming. Navigating through new languages and frameworks gives a great sense of
           achievement and accomplishment.</p>
        </div>
        <div className="col-8 offset-2 text hidden">
          <Mapbox />
        </div>
        <div className="col-8 offset-2 text hidden">
          <p>I'm a programmer from the UK who has spent most of the last decade living, working, and traveling in Asia.
           Traveling, exploring, and trying new things is something I love. Whenever possible, I'll try to explore and
           discover new ways of seeing the world around me. This interest in exploration and discovery is
           a huge part of my passion for programming. Navigating through new languages and frameworks gives a great sense of
           achievement and accomplishment.</p>
        </div>
      </div>
    );
  }
}
