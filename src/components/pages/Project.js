import React from 'react';
import '../../styles/Project.css'
export default function project({name,details}) {
  return (
    <div className='projectDiv'>
  <div className="card text-center">
  <div className="card-header">
    Projectname
  </div>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{details}</p>
    <a href="123" className="btn btn-primary">Deployed</a>
  </div>
</div>
    </div>
  );
}
