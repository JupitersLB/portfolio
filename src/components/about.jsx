import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown, faCircle } from '@fortawesome/free-solid-svg-icons';

import Mapbox from './mapbox';
import { hobbyImages } from '../../data/hobbies';

export default class ProjectCard extends Component {
  componentDidMount() {
    const elements = document.querySelectorAll('.hidden');
    const parent = document.querySelector('.content-container');
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

  handleClick = (div) => {
    const target = document.getElementById(div);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="about-me-title" id="title">
          <h1>About me</h1>
          <FontAwesomeIcon icon={faLongArrowAltDown} />
        </div>
        <div className="col-8 offset-2 travel-text hidden" id="travel">
          <p>I'm a programmer from the UK who has spent most of the last decade living, working, and traveling in Asia.
           Whenever possible, I'll try to explore and discover new ways of seeing the world around me. This interest in
           exploration, discovery, and traveling is a huge part of my passion for programming. Navigating through new
           languages and frameworks gives a great sense of achievement and accomplishment.</p>
        </div>
        <div className="mapbox hidden" id="map">
          <Mapbox />
        </div>
        <div className="col-8 offset-2 programming-text hidden" id="programmer">
          <p>Technology has always played a huge role in my life. Interacting with, and understanding computers was a major drive
          for me to start programming. From my previous experience as a teacher, I always enjoyed the puzzle solving elements when
          dealing with struggling students, or simplifying advance concepts down for students attempting to learn things well
          beyond their maturity.</p>
        </div>
        <div className="hobbies-title hidden" id="hobbies">
          <h1>Hobbies</h1>
          <FontAwesomeIcon icon={faLongArrowAltDown} />
        </div>
        <div className="images hidden" id="images">
          <div className="images-grid">
            {hobbyImages.map((image, idx) => <img src={image} alt="" key={idx}></img> )}
          </div>
        </div>
        <div className="page-navigation">
          <FontAwesomeIcon icon={faCircle} onClick={() => this.handleClick('title')} />
          <FontAwesomeIcon icon={faCircle} onClick={() => this.handleClick('travel')} />
          <FontAwesomeIcon icon={faCircle} onClick={() => this.handleClick('map')} />
          <FontAwesomeIcon icon={faCircle} onClick={() => this.handleClick('programmer')} />
          <FontAwesomeIcon icon={faCircle} onClick={() => this.handleClick('hobbies')} />
          <FontAwesomeIcon icon={faCircle} onClick={() => this.handleClick('images')} />
        </div>
      </div>
    );
  }
}
