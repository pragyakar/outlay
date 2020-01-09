import React from 'react';
import CountUp from 'react-countup';

const StatBox = (props) => {
  const {label, amount} = props;

  return (
    <p className="statistics-item">
      <span className="statistics-label">{label}</span>
      <span className="statistics-amount">
      <span className="currency">NRs.</span>
        <CountUp 
          start={0}
          end={props.amount}
          duration={3}
          prefix=" "
        />
      </span>
    </p>
  );
} 

export default StatBox;