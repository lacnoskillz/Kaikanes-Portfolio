import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
      <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input type="name" class="form-control" id="inputname"></input>
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Email address</label>
    <input type="email" class="form-control" id="inputemail" aria-describedby="emailHelp"></input>
  </div>
  <div class="mb-3">
  <label for="" class="form-label">Message</label>
  <textarea class="form-control" id="inputmessage" rows="3"></textarea>
</div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
}
