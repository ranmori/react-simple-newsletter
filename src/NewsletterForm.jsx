
import React from 'react';
import React, { useState } from "react";
import './style.css';

const NewsletterForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Basic email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(''); // Clear error when user starts typing
  }
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents page reload

    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    onSubmit(); // Calls the function to show confirmation
    
  
  };
  return (
    <div className="newsletter-container">
      <div className="newsletter-box">
        <div className="newsletter-content">
          <h2>Stay updated!</h2>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <input type="email"
           placeholder="email@company.com" className="email-input" 
           value={email}
           onChange={handleEmailChange}
           required/>
                  {error && <p className="error-message">{error}</p>}
          <button className="subscribe-button" onClick={handleFormSubmit }>
            Subscribe to monthly newsletter</button>
        </div>
        <div className="newsletter-image">
          {/* Placeholder for image */}
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
