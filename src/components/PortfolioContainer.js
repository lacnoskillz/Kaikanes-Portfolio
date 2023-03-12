import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
//import Header from './pages/Header'
import Footer from './pages/Footer'
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  
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
     <About /> <Footer />
     </div>
    );;
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <h1>Kaikane</h1>,
    <div>
    
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
