import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './utils/style/globalStyle.css';

// Render the app in the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router></Router>
  </StrictMode>
);
