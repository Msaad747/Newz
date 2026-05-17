/**
 * Entry Point for the News App
 * 
 * This file initializes the React application and wraps it with:
 * - BrowserRouter for client-side routing
 * - StrictMode for development warnings
 * - React Performance Monitoring (reportWebVitals)
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
