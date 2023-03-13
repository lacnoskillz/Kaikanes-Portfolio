import React from 'react';
import '../../styles/Contact.css'
export default function Contact() {
  return (
    <div className='Contactcontainer'>
      <div><h1>Contact Me</h1>
      </div>
      <form required>
      <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="name" className="form-control" id="inputname" required></input>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" id="inputemail" aria-describedby="emailHelp" required></input>
  </div>
  <div className="mb-3">
  <label  className="form-label">Message</label>
  <textarea className="form-control" id="inputmessage" rows="10" required></textarea>
</div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}
