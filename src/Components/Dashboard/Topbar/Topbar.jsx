import React from 'react';

const Topbar = (props) => {
  const {user} = props;

  return (
    <div>
      <span>Welcome, {user}</span>
    </div>
  );
}

export default Topbar;