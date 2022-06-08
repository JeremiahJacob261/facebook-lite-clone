import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  function getValueU(username) {
    setUsername(username.target.value);
  }
  function getValueP(password) {
    setPassword(password.target.value);
  }
  function login() {
    if (username == password) {
      alert('yes');
    } else {
      alert('Invalid password or email');
    }
  }
  return (
    <div>
          <div>
            <h2>LOGIN</h2>
            <input
              type="text"
              placeholder="username"
              id="textfield"
              onChange={getValueU}
              value={username}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              id="textfield"
              value={password}
              onChange={getValueP}
            />
            <br />
            <Link to="/About">
            <button id="login" onClick={login}>
              Login
            </button>
            </Link>
            <br />
            <subscript>
              dont't have an account? Try <Link to="/Register"> Register</Link>
            </subscript>
          </div>
    </div>
  );
}
export default Login;