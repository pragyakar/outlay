import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import ContentPanel from './ContentPanel/ContentPanel';

const Dashboard = (props) => {

  const { user } = props;

  return (
    <div>
      <Sidebar />
      <div className="content-panel-container">
        <Topbar user={user} />
        <ContentPanel />
      </div>
    </div>
  );
}

export default Dashboard;