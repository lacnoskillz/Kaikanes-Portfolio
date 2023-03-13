import React from 'react';
import '../../styles/Footer.css'
import { FaLinkedin, FaGithub,FaMailBulk} from "react-icons/fa";
export default function About() {
  return (
    <div className='footerdiv'>
    <ul className="nav justify-content-center fixed-bottom ">
    <li className="nav-item">
      <a className="nav-link"  href="https://www.linkedin.com/in/kaikane-lacno-91601b268/"><FaLinkedin size='3em'/></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://github.com/lacnoskillz"><FaGithub size='3em'/></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="mailto:kaikane3457@example.com"><FaMailBulk size='3em'/></a>
    </li>
  </ul>
  </div>
  );
}


