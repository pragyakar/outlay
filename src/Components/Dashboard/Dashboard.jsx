import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../../index.css';
import Navbar from './Navbar';
import DashboardRouter from './DashboardRouter';
import AddExpense from './AddExpense';

const Dashboard = () => {
  return (
    <div className="root-container">
      <BrowserRouter>
        <Navbar />
        <AddExpense />
        <div className="body-container">
          <DashboardRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Dashboard;