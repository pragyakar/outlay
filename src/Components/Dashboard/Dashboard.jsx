import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../../index.css';
import Navbar from './Navbar';
import DashboardRouter from './DashboardRouter';

const Dashboard = () => {
  return (
    <div className="root-container">
      <BrowserRouter>
        <Navbar />
        <DashboardRouter />
      </BrowserRouter>
    </div>
  );
}

export default Dashboard;