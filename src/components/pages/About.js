import React from 'react';
import '../../styles/About.css'
import Profilepic from '../../images/IMG_0842.JPG'
export default function About() {
  return (
    <div className='aboutcontainer'>
      <img src={Profilepic} alt="a selfie of me"/> 
    <div className='Pagetitle'>
    <h1>About me</h1>
    </div>
    <div className='aboutdiv'>
       
      <p><br />
    Hi my name is kai. Im an abitious Bootcamp student with dreams of becoming a full time Web-Developer. Besides coding I enjoy Playing Guitar and piano, Reading, Skateboarding, Playing boardgames, and Videogames!
      </p>
    </div>
    </div>
  );
}
