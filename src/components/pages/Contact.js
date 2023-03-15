import React from 'react';
import '../../styles/Contact.css'
export default function Contact() {

  return (
    <div className='Contactcontainer'>
      <div><h2>Contact Me</h2>
      </div>
      <form required>
      <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="name" className="form-control" id="name" onBlur = {(e) => {
if(!e.target.value) {
alert("Name Required")}
} }></input>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onBlur = {(e) => {
if(!e.target.value) {
alert("Email Required")}
} }></input>
  </div>
  <div className="mb-3">
  <label  className="form-label">Message</label>
  <textarea className="form-control" id="inputmessage" rows="10" onBlur = {(e) => {
if(!e.target.value) {
alert("Message Required")}
} }></textarea>
</div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<div className='eroorme'></div>
    </div>
    
  );
}

// document.onclick = e => {
//   if (e.currentTarget !== document.forms[0])
//     document.forms[0].reset()
// }