import React from 'react';
import '../styles/Navbar.css';
// import { GiBigWave } from "react-icons/gi";
// import Header from './pages/Header';
// import backimg from '../images/pb.jpg'
let viewportWidth = window.innerWidth;
let Lstylevar = "";
let Rstylevar = "";
window.addEventListener('resize', function(event) {
  viewportWidth = window.innerWidth;
  window.location.reload();
}, true);
if(viewportWidth < 575){
  Lstylevar = "-->"
  Rstylevar = "";
}else{
  Lstylevar = "|"
  Rstylevar = "|"
}
// we can grab the two values because we are passing them in the parent into the props
function NavTabs({ currentPage, handlePageChange }) {
  if(currentPage === "About"){
    return(
      
    <div className='Navcontainer'>
    {/* header with navbar logic to render page depending on which nav element was clicked */}
        
        <nav className="navbar navbar-expand-sm bg-body-tertiary" >
          
          <ul className="navbar-nav">
          <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
    
    
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                
                {Lstylevar} About Me {Rstylevar}
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
          
        </nav>
        </div>
    )
    
  }
  if(currentPage === "Portfolio"){
    return(
      
    <div className='Navcontainer'>
    {/* header with navbar logic to render page depending on which nav element was clicked */}
        
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
                {Lstylevar} Portfolio {Rstylevar}
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
    )
  }
  if(currentPage === "Resume"){
    return(
      
    <div className='Navcontainer'>
    {/* header with navbar logic to render page depending on which nav element was clicked */}
        
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
                {Lstylevar} Resume {Rstylevar}
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
    )
  }
  if(currentPage === "Contact"){
    return(
      
    <div className='Navcontainer'>
    {/* header with navbar logic to render page depending on which nav element was clicked */}
        
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
                {Lstylevar} Contact {Rstylevar}
              </a>
            </li>
          </ul>
          </div>
        </nav>
        </div>
    )
  }
}

export default NavTabs;
