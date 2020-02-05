import React, { useState } from 'react';
import Login from './Components/Login';

const App = () => {

  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState('pragyakar');

  return (    
    <div className="App">
      { authenticated ? 
        "Authenticated"
        : <Login setUser={setUser} setAuthenticated={setAuthenticated} /> 
      }
    </div>
  )
};

export default App;