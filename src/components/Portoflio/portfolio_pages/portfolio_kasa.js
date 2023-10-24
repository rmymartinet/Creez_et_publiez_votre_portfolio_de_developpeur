import React, { useEffect, useState } from 'react';
import '../../Portoflio/Portfolio.scss';
import { motion } from 'framer-motion';
import HorizontalCarouselleKasa from '../portfolio_components/carouselle_kasa.js';

import kasa from '../../../images/kasa1.jpg';

const PortfolioKasa = () => {
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
      {showCarouselle && <HorizontalCarouselleKasa />}
      <div className="portfolio-container">
        <div>
          <motion.div
            className="portfolio-img"
            initial={{ x: 0, height: '400px', width: '420px' }}
            animate={{ x: '320px', height: '85vh', width: '60vw' }}
            transition={{ duration: 0.9 }}
            onAnimationComplete={handleAnimation}
          >
            <img alt="kasa" src={kasa}></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioKasa;
