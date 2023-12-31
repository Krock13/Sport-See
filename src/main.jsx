/**
 * @file Main entry point for the React application.
 */

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { DataProvider } from './utils/DataContext.jsx';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SelectionPage } from './pages/SelectionPage/selectionPage';
import { Home } from './pages/Home/home';
import { NotFound } from './components/NotFound/NotFound.jsx';

import './utils/style/globalStyle.css';

// Initialize and render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Sidebar />
      <DataProvider>
        <Routes>
          <Route path='/' element={<SelectionPage />} />
          <Route path='/home/:source/:userId' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </DataProvider>
    </Router>
  </StrictMode>
);
