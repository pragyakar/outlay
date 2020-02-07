import React from 'react';

const TopStats = () => {
  return (
    <div className="top-stats-container">
      <div className="container">
        <div className="stats-grid">
          <div className="stats-one">
            <span className="stat">
              <span className="currency">NRs.</span> 
              <span className="amount">800</span> 
            </span>
            <span className="stat-label">Today</span>
          </div>
          <div className="stats-two">
            <span className="stat">
              <span className="currency">NRs.</span> 
              <span className="amount">1800</span> 
            </span>
            <span className="stat-label">Last 7 Days</span>
          </div>
          <div className="stats-three">
            <span className="stat">
              <span className="currency">NRs.</span> 
              <span className="amount">2800</span> 
            </span>
            <span className="stat-label">Last 30 Days</span>
          </div>
          <div className="stats-four">
            <span className="stat">
              <span className="currency">NRs.</span> 
              <span className="amount">900</span> 
            </span>
            <span className="stat-label">Average</span>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default TopStats;