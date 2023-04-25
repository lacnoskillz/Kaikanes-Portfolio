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
        Hello, my name is Kai and I'm an ambitious bootcamp student with a passion for web development. My goal is to become a full-time web developer and to continue to learn and grow within the industry.

As a developer, I specialize in HTML, CSS, and JavaScript. I also have experience with popular web frameworks such as React and Node.js. In addition to my technical skills, I am a creative problem solver with a keen eye for design.

Outside of coding, I enjoy playing the guitar and piano, reading about technology and innovation, skateboarding, and playing board games and video games. These hobbies keep me grounded and help me stay focused on my goals.

Overall, I am a dedicated and enthusiastic individual who is constantly looking to learn new skills and improve my craft. I am excited about the future of web development and the many possibilities it holds.
        </p>
      </div>
    </div>
  );
}
