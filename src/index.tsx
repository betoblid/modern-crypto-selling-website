import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Router from './Router';


const root = ReactDOM.createRoot(
  document.getElementById('view') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
