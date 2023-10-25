import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home.js';
import '../src/css/global.css';

import PortfolioGrimmoire from './components/Portoflio/portfolio_pages/portfolio_grimmoire.js';
import PortfolioBooki from './components/Portoflio/portfolio_pages/portfolio_booki.js';
import PortfolioKasa from './components/Portoflio/portfolio_pages/portfolio_kasa.js';
import PortfolioSophieBuel from './components/Portoflio/portfolio_pages/portfolio_sophie_buel.js';

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route exact index element={<Home />} />
        <Route exact path="/portfolio/kasa" element={<PortfolioKasa />} />
        <Route
          exact
          path="/portfolio/grimmoire"
          element={<PortfolioGrimmoire />}
        />
        <Route
          exact
          path="/portfolio/sophiebuel"
          element={<PortfolioSophieBuel />}
        />
        exact
        <Route path="/portfolio/booki" element={<PortfolioBooki />} />
      </Routes>
    </>
  );
}

export default App;
