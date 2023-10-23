import React, { useState } from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import '../components/contact.scss';

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-content">
        <div className="contact-title">
          <h1>Want to reach out ?</h1>
        </div>
        <div className="contact-links">
          <a className="contact-link">Linkedin</a>
          <a className="contact-link">Github</a>
          <a className="contact-link">Instagram</a>
          <a className="contact-link">Mail</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// Huge fan of science fiction
