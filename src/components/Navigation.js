import React from 'react';
import '../styles/Navbar.css';
import { GiBigWave } from "react-icons/gi";
// import backimg from '../images/pb.jpg'

// we can grab the two values because we are passing them in the parent into the props
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='Navcontainer'>
{/* header with navbar logic to render page depending on which nav element was clicked */}
    <h1>Kaikane <GiBigWave size= '1em'/></h1> 
    <nav className="navbar navbar-expand-sm bg-body-tertiary" >
      <div className="container-fluid">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}


            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}


            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}


            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"


            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
      </div>
    </nav>
    </div>
  );
}

export default NavTabs;
