import React from 'react';

const StatBox = (props) => {
  const {label, amount} = props;

  return (
    <p className="statistics-item">
      <span className="statistics-label">{label}</span>
      <span className="statistics-amount">
      <span className="currency">NRs.</span> 
        {" "}
        {amount}
      </span>
    </p>
  );
} 

export default StatBox;