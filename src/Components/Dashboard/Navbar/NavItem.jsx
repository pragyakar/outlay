import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from "react-router-dom";

const NavItem = (props) => {

  const { icon, path } = props;

  const { pathname } = useLocation();
  const currentPath = pathname.split('/')[1];
  
  const isActiveTab = (path, currentPath) => {
    if (path === currentPath) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Link to={`/${path}`}>
      <div className={`navItem ${isActiveTab(path, currentPath) ? "active" : ""}`}>
        <FontAwesomeIcon icon={icon} />  
      </div>
    </Link>
  );
};

export default NavItem;