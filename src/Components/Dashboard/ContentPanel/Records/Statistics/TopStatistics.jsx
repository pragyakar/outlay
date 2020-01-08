import React from 'react';
import StatBox from './StatBox';

const TopStatistics = () => {
  return (
    <div className="statistics-container">
      <h1 className="statistics-title">Top Stats 🔥 <span className="tips">(in a day)</span></h1>
      <StatBox label={"Average"} amount={'500'} />
      <StatBox label={"Highest"} amount={'8,000'} />
      <StatBox label={"Lowest"} amount={'100'} />
    </div>
  )
};

export default TopStatistics;