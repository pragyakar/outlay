import React from 'react';

const Topbar = (props) => {
  const {user} = props;

  return (
    <div className="topbar-container">
      <span className="topbar-text">Logged in as <span className="topbar-user">@{user}</span></span>
    </div>
  );
}

export default Topbar;