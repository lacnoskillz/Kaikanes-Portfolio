import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
      <div className="mb-3">
    <label for="" className="form-label">Name</label>
    <input type="name" className="form-control" id="inputname"></input>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">Email address</label>
    <input type="email" className="form-control" id="inputemail" aria-describedby="emailHelp"></input>
  </div>
  <div className="mb-3">
  <label for="" className="form-label">Message</label>
  <textarea className="form-control" id="inputmessage" rows="3"></textarea>
</div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}
