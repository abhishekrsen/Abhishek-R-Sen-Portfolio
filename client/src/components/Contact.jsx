import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const googleFormURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdMwQu9pfLj-6Qce6FIyWIIGgEU9bpiAo1oHIWviNxY7bvn_g/formResponse';
      const formParams = new URLSearchParams();
      formParams.append('entry.2106597799', formData.name);
      formParams.append('entry.1599545691', formData.email);
      formParams.append('entry.1943995885', formData.message);

      await fetch(googleFormURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formParams
      });

      // Since mode is 'no-cors', the response will be opaque. We assume success if the fetch completes.
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const closePopup = () => setStatus(null);

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-info glass-card animate-slide-in-left">
            <h3>Contact Information</h3>
            <p>I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">✉</span>
                <a href="mailto:abhishekrsen.in@gmail.com">abhishekrsen.in@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="icon">☎</span>
                <a href="tel:6282978008">+91 6282978008</a>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Neyyatinkara, Trivandrum</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-card delay-200 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Popup */}
      {(status === 'success' || status === 'error') && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className={`modal-content ${status}`} onClick={(e) => e.stopPropagation()}>
            {status === 'success' ? (
              <>
                <h3>Success!</h3>
                <p>Your message has been sent successfully. I'll get back to you soon.</p>
              </>
            ) : (
              <>
                <h3>Oops!</h3>
                <p>Something went wrong. Please try again later.</p>
              </>
            )}
            <button className="modal-close-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
