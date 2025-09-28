import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">CONTACT ME</h2>
          <p className="contact-details">📧 Email: <a className="contact-link" href="mailto:svel5228@gmail.com">svel5228@gmail.com</a></p>
          <p className="contact-details">📞 Phone: <a className="contact-link" href="tel:+919486300259">+91 94863 00259</a></p>
        </div>

        <form className="contact-form">
          <h3 className="form-title">Send a Message</h3>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
