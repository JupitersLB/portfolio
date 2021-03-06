import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';

import Mapbox from './mapbox';
import { hobbyImages } from '../../data/hobbies';

export default class ProjectCard extends Component {
  componentDidMount() {
    const elements = document.querySelectorAll('.hidden');
    const parent = document.querySelector('.content-container');
    // fades elements in and out when they scroll on page
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
    // navigates the different areas of the page.
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
          <LazyLoadComponent>
            <Mapbox />
          </LazyLoadComponent>
        </div>
        <div className="col-8 offset-2 programming-text hidden" id="programmer">
          <p>Technology has always played a huge role in my life. Interacting with, and understanding computers was a major drive for me to start programming.  Puzzle-solving is an essential component as a teacher, either managing a struggling student or reducing complex concepts into more consumable blocks. I hope to transfer these skills into my programming.</p>
        </div>
        <div className="hobbies-title hidden" id="hobbies">
          <h1>Hobbies</h1>
          <FontAwesomeIcon icon={faLongArrowAltDown} />
        </div>
        <div className="images hidden" id="images">
          <div className="images-grid">
            <LazyLoadComponent>
              {hobbyImages.map((image, idx) => <LazyLoadImage src={image} alt="" key={idx} />)}
            </LazyLoadComponent>
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
