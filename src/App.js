import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";


import SubscriptionConfirmation from './SubscriptionConfirmation';
import NewsletterForm from './NewsletterForm';

function App() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleFormSubmit = () => {
    setShowConfirmation(true); // Show confirmation message after form submission
  };

  const handleDismissConfirmation = () => {
    setShowConfirmation(false); // Hide confirmation message
  };

  return (
    <div>
      {!showConfirmation && (
        <NewsletterForm onSubmit={handleFormSubmit} />
      )}

      {showConfirmation && (
        <SubscriptionConfirmation onDismiss={handleDismissConfirmation} />
      )}
    </div>
  );
}

export default App;
