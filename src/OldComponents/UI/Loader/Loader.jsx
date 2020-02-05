import React from 'react';

const Loader = (props) => {
  return (
    <div className="loader-container">  
      <div className="loader" />
  <span className="loading-text">{props.text}</span>
    </div>
  );
}

export default Loader;