import React from 'react';
import './LoadingSpinner.css'; // Vamos criar este CSS

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;