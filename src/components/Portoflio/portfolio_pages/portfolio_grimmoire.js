import React, { useEffect, useState } from 'react';
import '../../Portoflio/Portfolio.scss';
import { motion } from 'framer-motion';
import CarouselGrimmoire from '../portfolio_components/carouselle_grimmoire.js';

import grimmoire from '../../../images/grimmoire1.png';

const PortfolioGrimmoire = () => {
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
      {showCarouselle && <CarouselGrimmoire />}
      <div className="portfolio-container">
        <div>
          <motion.div
            className="portfolio-img"
            initial={{ x: 0 }}
            animate={{ x: '320px', height: '85vh', width: '60vw' }}
            transition={{ duration: 0.9 }}
            onAnimationComplete={handleAnimation}
          >
            <img alt="grimmoire" src={grimmoire}></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrimmoire;
