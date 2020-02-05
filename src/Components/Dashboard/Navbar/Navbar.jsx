import React from 'react';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-header">
        <span className="navbar-logo">O</span>
      </div>
      <div className="navbar-nav">
        <NavItem content="Home" path="asdasd"/>
        <NavItem content="Reports" path="reasd"/>
      </div>
      <div className="navbar-footer" />
    </div>
  );
}

export default Navbar;