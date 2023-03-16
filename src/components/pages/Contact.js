import React from 'react';
import '../../styles/Contact.css'
export default function Contact() {
// import react and style sheet for contact.js
// react card for Contact section
  return (
    <div className='Contactcontainer'>
      <div><h2>Contact Me</h2>
      </div>
      <form required>
        <div className="mb-3">
          <label className="form-label">Name</label>
          {/* added onBlur that runs logic that adds a span when its empty and user clicks off dom else its invisible */}
          <input type="name" className="form-control" id="name" onBlur={(e) => {
            if (!e.target.value) {
              document.getElementById('nameerr').innerHTML = '<span style="color:red;">This field is required.</span>'
            } else {
              document.getElementById('nameerr').innerHTML = ''
            }
          }}></input>
          <div id='nameerr'></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required={true} onChange={(e) => {
           if(e.target.value.match(/.+@.+\..+/)){
              document.getElementById('emailerr').innerHTML = ''
            }else {
              document.getElementById('emailerr').innerHTML = '<span style="color:red;">Incorrect Email Format</span>'
            }
          }} onBlur={(e) => {
            if (!e.target.value) {
              document.getElementById('emailerr').innerHTML = '<span style="color:red;">This field is required.</span>'
            } else if(e.target.value.match(/.+@.+\..+/)){
              document.getElementById('emailerr').innerHTML = ''
            }else {
              document.getElementById('emailerr').innerHTML = '<span style="color:red;">Incorrect Email Format</span>'
            }
          }}></input>
          <div id='emailerr'></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" id="inputmessage" rows="10" required={true} onBlur={(e) => {
            if (!e.target.value) {
              document.getElementById('texterr').innerHTML = '<span style="color:red;">This field is required.</span>'
            } else {
              document.getElementById('texterr').innerHTML = ''
            }
          }}></textarea>
          <div id='texterr'></div>
        </div>

        <button type="submit" id="subbtn" className="btn btn-primary">Submit</button>
      </form>
      <div id='errordiv'></div>

    </div>

  );
}
