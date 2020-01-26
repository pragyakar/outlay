import React, { useState, useEffect} from 'react';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

const App = () => {

  const [authenticated, setAuthenticated] = useState(true);
  const [user, setUser] = useState('pragyakar');

  return (    
    <div className="App">
      { authenticated ? 
        <Dashboard user={user}/>
        : <Login setUser={setUser} setAuthenticated={setAuthenticated} /> 
      }
    </div>
  )
};

export default App;