import React from 'react';

const Dashboard = (props) => {

  const { user } = props;

  return (
  <p>Welcome, {user}</p>
  );
}

export default Dashboard;