import React from 'react';
import '../../styles/About.css'
import Profilepic from '../../images/IMG_0842.JPG'
// import react and style sheet and image
// react card for about me section
export default function About() {
  return (
    <div className='aboutcontainer'>
      <img className="profilepic" src={Profilepic} alt="a selfie of me" />
      <div className='Pagetitle'>
        <h2>About me</h2>
      </div>
      <div className='aboutdiv'>

        <p><br />
          Hi my name is kai. Im an abitious Bootcamp student with dreams of becoming a full time Web-Developer. Besides coding I enjoy Playing Guitar and piano, Reading, Skateboarding, Playing boardgames, and Videogames!
        </p>
      </div>
    </div>
  );
}
