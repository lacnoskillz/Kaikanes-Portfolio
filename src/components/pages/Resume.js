import React from 'react';
import resume from '../../images/kaikaneresume.pdf'
export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>
       Download resume here 
       <a href={resume} download>here</a>
      </p>
    </div>
  );
}
