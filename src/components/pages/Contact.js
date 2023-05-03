import React from 'react';
import  {useRef } from "react";
import '../../styles/Contact.css'
import { useForm } from '@formspree/react';
import ReCAPTCHA from "react-google-recaptcha";
export default function Contact() {
// import react and style sheet for contact.js
// react card for Contact section
const [state, handleSubmit] = useForm("xnqyogvd");
const captchaRef = useRef(null);
  if (state.succeeded) {
      return (<div className='Contactcontainer'>
      
      
      <div className='thankyou'>Email sent! Thank you for reaching out. </div>

    </div>
      )
  }
  const handleCaptcha = (e) => {
    e.preventDefault();

    const token = captchaRef.current.getValue();
    // console.log(token,"here")
    captchaRef.current.reset();
    
    if (token) {
      handleSubmit(e, token);
    } else {
      document.getElementById(
        "recap"
      ).innerHTML = `<span style="color:red; font-size: 1vh;">Please check Recaptcha!</span>`;
    }
  };
// declare variable that is set to current window length and listens to resize events and variable is updated. 
// then refreshes page to update recaptcha size because i dont know how to resize recaptcha without refresh :()
  let viewportWidth = window.innerWidth;
  window.addEventListener('resize', function(event) {
    viewportWidth = window.innerWidth;
    // window.location.reload();
}, true);

// loads page depending on viewportWidth to resize the recaptcha

  if(viewportWidth < 713){
    
    return (
      
      <div className='Contactcontainer'>
        <div><h2>Contact Me</h2>
        </div>
        <form required onSubmit={handleCaptcha} >
          <div className="mb-3">
            <label className="form-label">Name</label>
            {/* added onBlur that runs logic that adds a span when its empty and user clicks off dom else its invisible */}
            <input type="name" className="form-control" id="name" onBlur={(e) => {
              if (!e.target.value) {
                document.getElementById('nameerr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
              } else {
                document.getElementById('nameerr').innerHTML = ''
               
              }
            }}onChange={(e) => {
              if (!e.target.value) {
                document.getElementById('nameerr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
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
                document.getElementById('emailerr').innerHTML = '<span style="color:red; font-size: 1vh;">Incorrect Email Format</span>'
              }
            }} onBlur={(e) => {
              if (!e.target.value) {
                document.getElementById('emailerr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
              } else if(e.target.value.match(/.+@.+\..+/)){
                document.getElementById('emailerr').innerHTML = ''
              }else {
                document.getElementById('emailerr').innerHTML = '<span style="color:red; font-size: 1vh;">Incorrect Email Format</span>'
              }
            }}></input>
            <div id='emailerr'></div>
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows="10" required={true} onBlur={(e) => {
                
              if (!e.target.value) {
                document.getElementById('texterr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
              } else {
                document.getElementById('texterr').innerHTML = ''
              }
            }}onChange={(e) => {
                
              if (!e.target.value) {
                document.getElementById('texterr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
              } else {
                document.getElementById('texterr').innerHTML = ''
              }
            }}></textarea>
            <div id='texterr'></div>
          </div>
          <div id="recapdiv">
    
          <div>
          <ReCAPTCHA
      sitekey="6LcSSIElAAAAAKpvOYeTMbkbCBF3hla3-9PCImD1"
       size="compact"
      onChange={handleCaptcha}
      ref={captchaRef}
    />
    <div id="recap"></div>
    </div>
    <div id="subbtndiv">
          <button type="submit" id="subbtn" className="btn btn-primary">Submit</button>
          </div>
    
          </div>
        </form>
        
      </div>
    );
  } else{
    
    return (
      <div className='Contactcontainer'>
        <div><h2>Contact Me</h2>
        </div>
        <form required onSubmit={handleCaptcha} >
          <div className="mb-3">
            <label className="form-label">Name</label>
            {/* added onBlur that runs logic that adds a span when its empty and user clicks off dom else its invisible */}
            <input type="name" className="form-control" id="name" onBlur={(e) => {
              if (!e.target.value) {
                document.getElementById('nameerr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
              } else {
                document.getElementById('nameerr').innerHTML = ''
               
              }
            }}onChange={(e) => {
              if (!e.target.value) {
                document.getElementById('nameerr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
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
                document.getElementById('emailerr').innerHTML = '<span style="color:red; font-size: 1vh;">Incorrect Email Format</span>'
              }
            }} onBlur={(e) => {
              if (!e.target.value) {
                document.getElementById('emailerr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
              } else if(e.target.value.match(/.+@.+\..+/)){
                document.getElementById('emailerr').innerHTML = ''
              }else {
                document.getElementById('emailerr').innerHTML = '<span style="color:red; font-size: 1vh;">Incorrect Email Format</span>'
              }
            }}></input>
            <div id='emailerr'></div>
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows="10" required={true} onBlur={(e) => {
                
              if (!e.target.value) {
                document.getElementById('texterr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
              } else {
                document.getElementById('texterr').innerHTML = ''
              }
            }}onChange={(e) => {
                
              if (!e.target.value) {
                document.getElementById('texterr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
              } else {
                document.getElementById('texterr').innerHTML = ''
              }
            }}></textarea>
            <div id='texterr'></div>
          </div>
          <div id="recapdiv">
    
          <div>
          <ReCAPTCHA
      sitekey="6LcSSIElAAAAAKpvOYeTMbkbCBF3hla3-9PCImD1"
       size="normal"
      onChange={handleCaptcha}
      ref={captchaRef}
    />
    <div id="recap"></div>
    </div>
    <div id="subbtndiv">
          <button type="submit" id="subbtn" className="btn btn-primary">Submit</button>
          </div>
    
          </div>
        </form>
        
      </div>
    );
  }
  
}
