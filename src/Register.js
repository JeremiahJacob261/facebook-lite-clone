import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBQOD6MpXV81SJGsyll6lm8hwyYUfCMVkg',
  authDomain: 'jerp-store.firebaseapp.com',
  databaseURL: 'https://jerp-store.firebaseio.com',
  projectId: 'jerp-store',
  storageBucket: 'jerp-store.appspot.com',
  messagingSenderId: '889039310115',
  appId: '1:889039310115:web:85ccd708292b19a5965096',
  measurementId: 'G-CLEHJF55SW',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

function Register() {
  const [registeremail, setRegisterEmail] = useState();
  const [registerusername, setRegisterUsername] = useState();
  const [registerpassword, setRegisterPassword] = useState();
  const signp = async () => {
    createUserWithEmailAndPassword(auth, registeremail, registerpassword)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        // ...
        <p>{user}</p>
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorMessage });

        // ..
      });
  };

  const signOut = async () => {};
  return (
    <div>
      <h2>Register</h2>
      <form>
        <input
          type="text"
          placeholder="username"
          id="textfield"
          value={registerusername}
          onChange={(registerusername) => {
            setRegisterUsername(registerusername.target.value);
          }}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          id="textfield"
          value={registeremail}
          onChange={(registeremail) => {
            setRegisterEmail(registeremail.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          id="textfield"
          value={registerpassword}
          onChange={(registerpassword) => {
            setRegisterPassword(registerpassword.target.value);
          }}
        />
        <br />
        <button id="login" onClick={signp}>
          Register
        </button>
        <br />
        Already Have an Account ?<Link to="/"> Login</Link>
      </form>
    </div>
  );
}
export default Register;
