import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function getValueU(email) {
    setEmail(email.target.value);
  }
  function getValueP(password) {
    setPassword(password.target.value);
  }
  function login() {
  

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert(user.email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    
  }
  return (
    <div>
          <div>
            <h2>LOGIN</h2>
            <input
              type="email"
              placeholder="email"
              id="textfield"
              onChange={getValueU}
              value={email}
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
           
            <button id="login" onClick={login}>
              Login
            </button>
          
            <br />
            <subscript>
              dont't have an account? Try <Link to="/Register"> Register</Link>
            </subscript>
          </div>
    </div>
  );
}
export default Login;