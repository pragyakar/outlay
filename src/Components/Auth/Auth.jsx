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
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="pragyakar"
          name="username"
          value={username}
          autoComplete="off"
          onChange={e => setUsername(e.target.value)}  
        />
        <br />
        <br />
        <input 
          type="password" 
          placeholder="password"
          name="password"
          value={password}
          autoComplete="off"
          onChange={e => setPassword(e.target.value)} 
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <p>{error}</p>
      </form>
    </div>
  );
}

export default Auth;