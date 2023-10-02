import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/header';
import { Sidebar } from './components/Sidebar/sidebar';
import { Home } from './pages/Home/home';

import './utils/style/globalStyle.css';

// Render the app in the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>
);
