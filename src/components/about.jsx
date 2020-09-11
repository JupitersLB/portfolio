import React from 'react';
import Mapbox from './mapbox';
import { hobbyImages } from '../../data/hobbies';

export default function About() {
  return (
    <div className="content-container">
      <div className="about-me-page">
        <div className="travel">
          <div className="text-side">
            <h1 className="about-heading">About me</h1>
            <div className="text">
              <div className="travel-text">
                <p>I'm a programmer from the UK who has spent most of the last decade living, working, and traveling in Asia.
                 Traveling, exploring, and trying new things is something I love. Whenever possible, I'll try to explore and
                 discover new ways of seeing the world around me. This interest in exploration and discovery is
                 a huge part of my passion for programming. Navigating through new languages and frameworks gives a great sense of
                 achievement and accomplishment.</p>
              </div>
              <div className="programming-text">
                <p>Technology has always played a huge role in my life. Interacting with
                and understanding computers is a necessity and this was a major drive for me to delve into programming properly.
                From my previous experience as a teacher, I always enjoyed the puzzle solving elements when dealing with struggling
                students, or simplifying advance concepts down for students attempting to learn
                things well beyond their maturity.</p>
              </div>
            </div>
          </div>
          <Mapbox />
        </div>
        <div className="hobbies">
          <div className="hobbies-title">
            <h1>Hobbies</h1>
          </div>
          <div className="images">
            {hobbyImages.map((image, idx) => <img src={image} alt="" key={idx}></img> )}

          </div>
        </div>
      </div>
    </div>
  );
}
