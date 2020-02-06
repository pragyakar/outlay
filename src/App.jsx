import React, { useState, useEffect} from 'react';
import registerFonts from './fontawesome';

import Login from './Components/Login';
import Router from './Router';

registerFonts();

const App = () => {

  const [authenticated, setAuthenticated] = useState(true);
  const [user, setUser] = useState('pragyakar');

  return (    
    <div className="App">
      { authenticated ? 
        <Router/> 
        : <Login setUser={setUser} setAuthenticated={setAuthenticated} /> 
      }
    </div>
  )
};

export default App;