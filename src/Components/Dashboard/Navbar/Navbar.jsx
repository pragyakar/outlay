import React from 'react';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-header">
        <span className="navbar-logo">O</span>
      </div>
      <div className="navbar-nav">
        
      </div>
      <div className="navbar-footer">
        <NavItem icon="home" path=""/>
        <NavItem icon="chart-line" path="reports"/>
        <NavItem icon="cog" path="settings"/>
      </div>
    </div>
  );
}

export default Navbar;