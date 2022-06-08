import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
      <App />
        </Router>
        );