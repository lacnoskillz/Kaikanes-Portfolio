import React from 'react';
import '../../styles/Portfolio.css';
import Project from './Project.js'
export default function Portfolio() {
  return (
    <div className='Portfoliocontainer'>
      <div>
        <h2>Portfolio</h2>
        <h3>
          my projects
        </h3>


      </div>
      <div className='projectcontainer'>
      <div>
        <Project />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Project />
      </div>
      </div>

    </div>
  );
}
