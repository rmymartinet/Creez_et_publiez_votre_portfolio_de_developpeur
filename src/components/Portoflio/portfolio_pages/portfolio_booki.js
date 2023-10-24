import React, { useEffect, useState } from 'react';
import '../../Portoflio/Portfolio.scss';
import { motion } from 'framer-motion';
import CarouselBooki from '../portfolio_components/carouselle_booki.js';
import booki from '../../../images/booki1.webp';

const PortfolioBooki = () => {
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
      {showCarouselle && <CarouselBooki />}
      <div className="portfolio-container">
        <div>
          <motion.div
            className="portfolio-img"
            initial={{ x: 0 }}
            animate={{ x: '320px', height: '85vh', width: '60vw' }}
            transition={{ duration: 0.9 }}
            onAnimationComplete={handleAnimation}
          >
            <img alt="booki" src={booki}></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBooki;
