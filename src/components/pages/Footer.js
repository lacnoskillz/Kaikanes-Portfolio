import React from 'react';
import '../../styles/Footer.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { BsStackOverflow } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'
//import react and style sheet for Footer.js
// import icons used in footer react component
export default function About() {
  return (
    <div className='footerdiv'>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/kaikane-lacno-91601b268/"><FaLinkedin size='2em' /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/lacnoskillz"><FaGithub size='2em' /></a>
        </li>
        {/* <li className="nav-item">
      <a className="nav-link" href="mailto:kaikane3457@example.com"><FaMailBulk size='3em'/></a>
    </li> */}
        <li className="nav-item">
          <a className="nav-link" href="https://leetcode.com/lacnoskillz/"><SiLeetcode size='2em' /></a>
        </li>
      </ul>
    </div>
  );
}


