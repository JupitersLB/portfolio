import React from 'react';
import Mapbox from './mapbox';

export default function About() {
  return (
    <div className="content-container">
      <div className="about-me">
        <h1>About me</h1>
        <div className="travel">
          <div className="text">
            <div className="travel-text">
              <p>I'm a programmer from the UK who has spent most of the last decade living, working, and traveling in Asia.
               Traveling, exploring, and trying new things is something I love. Whenever possible, I'll try to explore some place
               new discover new ways of doing things and seeing the world around me. This interest in exploration and discovery is
               a huge part of my passion for programming. Navigating through new languages and frameworks gives a great sense of
               achievement and accomplishment.</p>
            </div>
            <div className="programming-text">
              <p>Computers, gaming, and technology have always played a huge role in my life. Interacting with
              and understanding computers is a necessity and this was a major drive for me to really learn how to programme properly.
              From my previous experience as a teacher, I always enjoyed the puzzle solving elements when dealing with difficult to
              manage classes and students, or simplifying advances concepts down to be deliverable to students attempting to learn
              things well beyond their maturity.</p>
            </div>
          </div>
          <Mapbox />
        </div>
      </div>
    </div>
  );
}
