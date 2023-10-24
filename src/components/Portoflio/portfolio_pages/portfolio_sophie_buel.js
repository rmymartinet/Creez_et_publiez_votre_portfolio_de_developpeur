import React, { useEffect, useState } from 'react';
import '../../Portoflio/Portfolio.scss';
import { motion } from 'framer-motion';
import CarouselSophieBuel from '../portfolio_components/carouselle_sophie_buel.js';
import sophiebuel from '../../../images/sophiebuel1.webp';

const PortfolioSophieBuel = () => {
  const [showCarouselle, setShowCarouselle] = useState(false);

  const handleAnimation = () => {
    setShowCarouselle(true);
  };

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, []);
  return (
    <section>
      {showCarouselle && <CarouselSophieBuel />}
      <div className="portfolio-container">
        <div>
          <motion.div
            className="portfolio-img"
            initial={{ x: 0 }}
            animate={{ x: '320px', height: '85vh', width: '60vw' }}
            transition={{ duration: 0.9 }}
            onAnimationComplete={handleAnimation}
          >
            <img alt="sophie buel" src={sophiebuel}></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSophieBuel;
