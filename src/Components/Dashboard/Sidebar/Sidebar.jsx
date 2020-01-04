import React from 'react';
import { FaFolderPlus } from 'react-icons/fa';
import { IoMdPodium } from 'react-icons/io';
import { MdTimeline, MdCreditCard } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <span className="sidebar-logo">Outlay</span>
      <a className="sidebar-nav active">
        <FaFolderPlus className="sidebar-icon" />
        Add Expense
      </a>
      <a className="sidebar-nav">
        <MdCreditCard className="sidebar-icon" />
        History
      </a>
      <a className="sidebar-nav">
        <MdTimeline className="sidebar-icon" />
        Reports
      </a>
      <a className="sidebar-nav">
        <IoMdPodium className="sidebar-icon" />
        Statistics
      </a>
    </div>
  );
}

export default Sidebar;