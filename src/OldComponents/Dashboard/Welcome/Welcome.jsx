import React from 'react';

const Welcome = (props) => {

  const { user } = props; 
  return (
    <div className="welcome-container">
      <p className="welcome-title">👋 Welcome back {capitalize(user)}</p>
      <p className="welcome-subtitle">Look at all the money you are spending and regret. Such a shame.</p>
    </div>
  )
}

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export default Welcome;