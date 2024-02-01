

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Cambiado aquí
import AppRouter from './AppRouter';  

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {/* Cambiado aquí */}
      <AppRouter />
    </Router>
  </React.StrictMode>,
);
