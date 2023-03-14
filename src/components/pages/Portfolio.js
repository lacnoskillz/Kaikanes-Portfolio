import React from 'react';
import '../../styles/Portfolio.css';
import Project from './Project.js'
export default function Portfolio() {
  return (
    <div className='Portfoliocontainer'>
      <h2>Portfolio</h2>
      <h3>
      my projects
      < Project />
      </h3>
    </div>
  );
}
