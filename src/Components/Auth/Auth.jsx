import React, {useState} from 'react';

const Auth = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "pragyakar") {
      props.setUser(username);
      props.setAuthenticated(true);
    } else {
      setError("Invalid credentials")
    }
  }
  
  return (
    <div className="auth-container">
      <span className="logo-lg">Outlay</span>
      <form onSubmit={handleSubmit}>
        <div className="auth-box">  
          <input 
            type="text" 
            placeholder="username"
            name="username"
            value={username}
            autoComplete="off"
            onChange={e => setUsername(e.target.value)}  
            className="auth-input"
          />
          <input 
            type="password" 
            placeholder="password"
            name="password"
            value={password}
            autoComplete="off"
            onChange={e => setPassword(e.target.value)}
            className="auth-input" 
          />
        </div>
        <button type="submit" className="auth-button">Login</button>
        <p className="auth-error">&nbsp;{error}</p>
      </form>
    </div>
  );
}

export default Auth;