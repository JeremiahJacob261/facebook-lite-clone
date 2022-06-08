import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Switch, Route,Routes, Link, BrowserRouter as Router } from 'react-router-dom';
import Mac from './Mac';
import Login,{login} from './Login';
import Register from './Register';
import About from './About';

export default function App(){
return(
  <div>
    <Routes>
    <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/Register" element={<Register/>}></Route>
          <Route exact path="/Mac" element={<Mac />}></Route>
          <Route exact path="/About" element={<About />}></Route>
        </Routes>
  </div>
);
}