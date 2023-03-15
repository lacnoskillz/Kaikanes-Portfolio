import React from 'react';
import '../../styles/Contact.css'
export default function Contact() {
  function Contacthandler(event){
    const inputId = event.target.getAttribute("id");
    if(inputId.input === ''){
      console.log("enter fields for", inputId)
    }


  }
  return (
    <div className='Contactcontainer'>
      <div><h2>Contact Me</h2>
      </div>
      <form required>
      <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="name" className="form-control" id="name" onBlur={Contacthandler()}></input>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required></input>
  </div>
  <div className="mb-3">
  <label  className="form-label">Message</label>
  <textarea className="form-control" id="inputmessage" rows="10" required></textarea>
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