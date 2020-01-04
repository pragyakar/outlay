import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Topbar from './Topbar';
import Sidebar from './Sidebar';
import ContentPanel from './ContentPanel/ContentPanel';


const Dashboard = (props) => {

  const { user } = props;

  return (
    <Router>
      <Sidebar />
      <div className="content-panel-container">
        <Topbar user={user} />
        <ContentPanel />
      </div>
    </Router>
  );
}

export default Dashboard;