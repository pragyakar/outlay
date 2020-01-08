import React from 'react';
import History from './History';
import Welcome from './Welcome';
import RecentStatistics from './RecentStatistics';

const Records = () => {
  return (
    <div className="records-container">
      <div className="welcome-wrapper">
        <Welcome />
      </div>
      <div className="grid-wrapper">
        <div className="grid-1 grid-table">
          <History />
        </div>
        <div className="grid-2 grid-side">
          <RecentStatistics />
        </div>
        <div className="grid-3 grid-side">
        </div>
        <div className="grid-4 grid-side">
          {/* Graph 1 */}
        </div>
      </div>
    </div>
  )
}

export default Records;