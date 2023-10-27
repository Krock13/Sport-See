/**
 * @file Main entry point for the React application.
 */

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SelectionPage } from './pages/SelectionPage/SelectionPage';
import { Home } from './pages/Home/Home';

import './utils/style/globalStyle.css';

// Initialize and render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<SelectionPage />} />
        <Route path='/home/:source/:userId' element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>
);
