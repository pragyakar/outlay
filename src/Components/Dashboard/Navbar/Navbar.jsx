import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faChartLine, faCog } from '@fortawesome/free-solid-svg-icons'
import NavItem from './NavItem';

library.add(faHome, faChartLine, faCog);

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