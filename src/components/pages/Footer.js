import React from 'react';

import { FaLinkedin, FaGithub} from "react-icons/fa";
export default function About() {
  return (
    <ul class="nav justify-content-center fixed-bottom ">
    <li class="nav-item">
      <a class="nav-link"  href="https://www.linkedin.com/in/kaikane-lacno-91601b268/"><FaLinkedin size='5em'/></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://github.com/lacnoskillz"><FaGithub size='5em'/></a>
    </li>
    {/* <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li> */}
  </ul>
  );
}


