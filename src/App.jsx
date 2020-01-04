import React, { useState, useEffect} from 'react';
import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';

const App = () => {

  const [authenticated, setAuthenticated] = useState(true);
  const [user, setUser] = useState('pragyakar');

  return (    
    <div className="App">
      { authenticated ? 
        <Dashboard user={user}/>
        : <Auth setUser={setUser} setAuthenticated={setAuthenticated} /> 
      }
    </div>
  )
};

export default App;