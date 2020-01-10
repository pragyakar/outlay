import React from 'react';

const Loader = () => {
  return (
    <div className="loader-container">  
      <div className="loader" />
      <span className="loading-text">Please wait while we calculate your massive expenses...</span>
    </div>
  );
}

export default Loader;