import React from 'react';
import Topbar from './Topbar/Topbar';

const Dashboard = (props) => {

  const { user } = props;

  return (
    <div>
      <Topbar user={user} />
    </div>
  );
}

export default Dashboard;