import React from 'react';
import '../../styles/Contact.css'
import { useForm } from '@formspree/react';
export default function Contact() {
// import react and style sheet for contact.js
// react card for Contact section
const [state, handleSubmit] = useForm("xnqyogvd");
  if (state.succeeded) {
      return (<div className='Contactcontainer'>
      
      
      <div className='thankyou'>Email sent! Thank you for reaching out. </div>

    </div>
      )
  }

  return (
    <div className='Contactcontainer'>
      <div><h2>Contact Me</h2>
      </div>
      <form required onSubmit={handleSubmit} >
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
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" required={true} onChange={(e) => {
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
          <textarea className="form-control" id="message" name="message" rows="10" required={true} onBlur={(e) => {
              
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
