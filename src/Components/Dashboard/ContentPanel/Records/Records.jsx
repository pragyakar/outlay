import React from 'react';
import History from './History';
import Welcome from './Welcome';

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
          {/* Item 1 */}
        </div>
        <div className="grid-3 grid-side">
          {/* Item 2 */}
        </div>
        <div className="grid-4 grid-side">
          {/* Graph 1 */}
        </div>
      </div>
    </div>
  )
}

export default Records;