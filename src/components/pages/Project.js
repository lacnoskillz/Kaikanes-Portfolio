import React from 'react';
import '../../styles/Project.css'
export default function project({ name, details, link, repo, img }) {
  return (
    <div className='projectDiv'>
      <div className="card text-center">
        <img src={img} className="card-img-top" alt="..."></img>
        <div className="card-header">

          {name}
        </div>
        <div className="card-body">
          <h5 className="card-title">{details}</h5>

          <a href={link} className="btn btn-primary">app</a>
          <a href={repo} className="btn btn-primary">repo</a>
        </div>
      </div>
    </div>
  );
}
