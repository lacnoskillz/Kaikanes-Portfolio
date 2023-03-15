import React, { useState } from 'react';
import NavTabs from './Navigation';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './pages/Header'
import Footer from './pages/Footer'
//import all components React and useState
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // renderPage function that renders page depending on what currentPage variable is equall too
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return (
        <div>
      <Resume /> <Footer />
      </div>
      );
    }
    if (currentPage === 'Contact') {
      return(
        <div>
       <Contact /> <Footer />
       </div>
      );
    }
    if (currentPage === 'Portfolio') {
      return(
        <div>
        <Portfolio /> <Footer />
       </div>
      );
    }
    return(
      <div>
      <About /> <Footer/>
     </div>
    );;
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    // Calls Navigation.js and passes the current page to it and calls render page function
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
