import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavItem = (props) => {
  const { icon, path } = props;
  return (
    <Link to={`/${path}`}>
      <div className="navItem">
        <FontAwesomeIcon icon={icon} />  
      </div>
    </Link>
  );
};

export default NavItem;