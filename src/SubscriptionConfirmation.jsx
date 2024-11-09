
import React from 'react';
import './SubscriptionConfirmation.css';

const SubscriptionConfirmation = ({ onDismiss }) => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <div className="checkmark">✔️</div>
        <h2>Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please open it and click the button inside to confirm your subscription.
        </p>
        <button className="dismiss-button" onClick={onDismiss}>Dismiss message</button>
      </div>
    </div>
  );
};

export default SubscriptionConfirmation;
