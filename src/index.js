import React from 'react';
import ReactDom from 'react-dom/client';
import App from '../src/App';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();

export default root;
