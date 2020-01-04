import React, { useState, useEffect} from 'react';
import Auth from './Components/Auth';

const App = () => {

  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState('');

  return (    
    <div className="App">
      { authenticated ? <p>Welcome, {user}</p> : <Auth setUser={setUser} setAuthenticated={setAuthenticated} /> }
    </div>
  )
};

export default App;