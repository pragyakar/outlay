import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const { content, path } = props;
  return (
    <Link to={`/${path}`}>
      <div className="navItem">
        {content}      
      </div>
    </Link>
  );
};

export default NavItem;