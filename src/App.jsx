import React, { useState, useEffect} from 'react';
import Auth from './Components/Auth';

const App = () => {

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(true);
  }, []);

  return (    
    <div className="App">
      { authenticated ? <p>Dashboard</p> : <Auth /> }
    </div>
  )
};

export default App;