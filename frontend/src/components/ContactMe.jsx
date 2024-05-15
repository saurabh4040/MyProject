import React from 'react';
import Navbar from './Navbar';
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div >
        <Navbar /> 
    <div className='min-ch-100'>
    
      <section id="contactMe" >
        <div className="container insidediv">
        <h2 className="text-center mb-4 fs-3 contactmetext">Have a question or inquiry? </h2>
          <h2 className="text-center mb-5 fs-15 contactmetext">Feel free to reach out to me using the form below</h2>
          <form className="row g-3  min-vh-80 container" action="https://formspree.io/f/mleqwkjy" method="POST" id="myForm">
            <div className="col-12">
              <label htmlFor="firstName" className="form-label fs-5 fw-bold">First Name</label>
              <input type="text" placeholder='Enter your first name' className="form-control" id="firstName" name="firstName" required />
            </div>
            <div className="col-12">
              <label htmlFor="lastName" className="form-label fs-5 fw-bold">Last Name</label>
              <input type="text" placeholder='Enter your last name' className="form-control" id="lastName" name="lastName" required />
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label fs-5 fw-bold">Email</label>
              <input type="email" placeholder='Enter your email' className="form-control" id="email" name="email" required />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label fs-5 fw-bold">Message</label>
              <textarea placeholder='Enter your messages' className="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="btn maincolor btn-lg">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
    </div>
  );
};

export default ContactMe;