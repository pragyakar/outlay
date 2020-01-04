import React from 'react';
import { Link } from 'react-router-dom';

import { FaFolderPlus } from 'react-icons/fa';
import { IoMdPodium } from 'react-icons/io';
import { MdTimeline, MdCreditCard } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <span className="sidebar-logo">Outlay</span>
      <Link to="/add" className="sidebar-nav active">
        <FaFolderPlus className="sidebar-icon" />
        Add Expense
      </Link>
      <Link to="/history" className="sidebar-nav">
        <MdCreditCard className="sidebar-icon" />
        History
      </Link>
      <Link to="/reports" className="sidebar-nav">
        <MdTimeline className="sidebar-icon" />
        Reports
      </Link>
      <Link to="/statistics" className="sidebar-nav">
        <IoMdPodium className="sidebar-icon" />
        Statistics
      </Link>
    </div>
  );
}

export default Sidebar;