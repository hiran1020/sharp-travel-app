import React, { useState } from 'react';
import SEO from '../components/SEO';
import './ContactPage.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prev => ({ ...prev, submitting: true }));

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({
        submitted: true,
        submitting: false,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        error: 'There was an error submitting your message. Please try again.'
      });
    }
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us - Sharp Travels & Tours"
        description="Get in touch with Sharp Travels & Tours for any inquiries about tours, destinations, or custom travel packages in Nepal."
      />
      <div className="container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p className="contact-intro">
            Have questions about our tours or services? We're here to help! 
            Fill out the form below or reach out to us directly.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-info-header">
              <h2>Contact Information</h2>
              <p>We're here to help and answer any questions you might have</p>
            </div>

            <div className="contact-info-grid">
              <div className="info-card">
                <div className="info-icon">👤</div>
                <div className="info-content">
                  <h3>Managing Director</h3>
                  <p>Mr. Subash Gautam</p>
                  <p className="info-subtitle">NATTA Member ID: NATTA-668/17</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">🏢</div>
                <div className="info-content">
                  <h3>Company</h3>
                  <p>Sharp Travels & Tours Pvt. Ltd.</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h3>Visit Us</h3>
                  <p>Shanti Marg, Hattisar</p>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h3>Call Us</h3>
                  <p>+977-01-4539877</p>
                  <p>+977-01-4539899</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <h3>Email Us</h3>
                  <p>info@sharpnepal.com</p>
                  <p>info.sharpnepal@gmail.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">⏰</div>
                <div className="info-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            {status.submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                <button 
                  className="button"
                  onClick={() => setStatus(prev => ({ ...prev, submitted: false }))}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Enter subject"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Preferred Contact Method</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleChange}
                      />
                      <span>Email</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleChange}
                      />
                      <span>Phone</span>
                    </label>
                  </div>
                </div>

                {status.error && (
                  <div className="error-message">
                    {status.error}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="button submit-button"
                  disabled={status.submitting}
                >
                  {status.submitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 