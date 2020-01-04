import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { FaFolderPlus } from 'react-icons/fa';
import { MdTimeline, MdCreditCard } from 'react-icons/md';

const Sidebar = (props) => {
  
  const { pathname } = props.location;
  
  return (
    <div className="sidebar-container">
      <span className="sidebar-logo">Outlay</span>
      <Link to="/add" className={`sidebar-nav ${pathname === '/add' ? 'active' : ''}`}>
        <FaFolderPlus className="sidebar-icon" />
        Add Expense
      </Link>
      <Link to="/history" className={`sidebar-nav ${pathname === '/history' ? 'active' : ''}`}>
        <MdCreditCard className="sidebar-icon" />
        History
      </Link>
      <Link to="/reports" className={`sidebar-nav ${pathname === '/reports' ? 'active' : ''}`}>
        <MdTimeline className="sidebar-icon" />
        Reports
      </Link>
    </div>
  );
}

export default withRouter(Sidebar);