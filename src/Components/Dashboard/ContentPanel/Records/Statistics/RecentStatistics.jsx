import React from 'react';
import StatBox from './StatBox';

const RecentStatistics = () => {
  return (
    <div className="statistics-container">
      <h1 className="statistics-title">Recent Stats 🕒</h1>
      <StatBox label={"Last 24 hours"} amount={'777'} />
      <StatBox label={"Last 7 days"} amount={'8,000'} />
      <StatBox label={"Last 30 days"} amount={'10,500'} />
    </div>
  )
};

export default RecentStatistics;