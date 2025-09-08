import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Form submission status
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  // Import social links from central data file
  const { socialLinks } = require('../../data/portfolioData');
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // In a real implementation, this would send the form data to a server
    // For now, we'll just simulate a successful submission
    setSubmitStatus({
      submitted: true,
      success: true,
      message: 'Message sent successfully! I will get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus(prev => ({
        ...prev,
        submitted: false
      }));
    }, 5000);
  };
  
  return (
    <div className="contact-form-section">
      <div className="contact-header">
        <h3>Get In Touch</h3>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <p>Feel free to contact me for any work or suggestions below.</p>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.url} 
                target={link.id !== 'email' && link.id !== 'phone' ? '_blank' : ''}
                rel={link.id !== 'email' && link.id !== 'phone' ? 'noopener noreferrer' : ''}
                className="social-link"
                aria-label={link.name}
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              placeholder="Your Name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              placeholder="Your Email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          
          {submitStatus.submitted && (
            <div className={`submit-message ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <button type="submit" className="submit-button">
            <span className="send-icon">📨</span>
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
