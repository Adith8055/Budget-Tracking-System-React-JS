// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Importing the CSS file if you have it (optional)
import App from './app';  // Correctly importing the lowercase 'app.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
