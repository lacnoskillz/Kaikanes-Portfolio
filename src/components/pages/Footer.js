import React from 'react';
import '../../styles/Footer.css'
import { FaLinkedin, FaGithub,FaMailBulk} from "react-icons/fa";
export default function About() {
  return (
    <div className='footerdiv'>
    <ul class="nav justify-content-center fixed-bottom ">
    <li class="nav-item">
      <a class="nav-link"  href="https://www.linkedin.com/in/kaikane-lacno-91601b268/"><FaLinkedin size='3em'/></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://github.com/lacnoskillz"><FaGithub size='3em'/></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="mailto:kaikane3457@example.com"><FaMailBulk size='3em'/></a>
    </li>
  </ul>
  </div>
  );
}


