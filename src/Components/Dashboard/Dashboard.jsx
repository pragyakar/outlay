import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Dashboard = (props) => {

  const { user } = props;

  return (
    <div>
      <Sidebar />
      <div className="content-panel-container">
        <Topbar user={user} />
      </div>
    </div>
  );
}

export default Dashboard;