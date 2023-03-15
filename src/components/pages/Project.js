import React from 'react';
import '../../styles/Project.css'
export default function project() {
  return (
    <div className='projectDiv'>
  <div className="card text-center">
  <div className="card-header">
    Projectname
  </div>
  <div className="card-body">
    <h5 className="card-title">Project title</h5>
    <p className="card-text">details about project</p>
    <a href="123" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  );
}
