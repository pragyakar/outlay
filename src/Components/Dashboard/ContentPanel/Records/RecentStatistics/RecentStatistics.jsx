import React from 'react';

const RecentStatistics = () => {
  return (
    <div className="statistics-container">
      <h1 className="statistics-title">Recent Stats 🕒</h1>
      <p className="statistics-item">
        <span className="statistics-label">Last 24 hours</span>
        <span className="statistics-amount">
        <span className="currency">NRs.</span> 
          {" "}
          777
        </span>
      </p>
      <p className="statistics-item">
        <span className="statistics-label">Last 7 Days</span>
        <span className="statistics-amount">
          <span className="currency">NRs.</span> 
          {" "}
          8,000
        </span>
      </p>
      <p className="statistics-item">
        <span className="statistics-label">Last 30 Days</span>
        <span className="statistics-amount">
        <span className="currency">NRs.</span> 
          {" "}
          10,900
        </span>
      </p>
    </div>
  )
};

export default RecentStatistics;