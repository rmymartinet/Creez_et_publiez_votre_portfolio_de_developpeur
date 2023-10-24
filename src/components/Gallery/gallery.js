import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GalleryComponent from './gallery_components/gallery_components.js';

import '../Gallery/ImageGallery.scss';

function ImageGallery() {
  const portfolioRef = useRef(null);

  //Animations
  const { scrollYProgress } = useScroll({
    target: portfolioRef,
    offset: ['start center', 'end center'],
  });

  const positionstart = useTransform(scrollYProgress, (pos) => {
    if (pos >= 0.001 && pos <= 0.99) {
      return 'fixed';
    } else if (pos <= 0.099) {
      return 'relative';
    }
  });

  const opacityRowPortfolio = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.5, 0.7, 0.9, 1],
    [1, 1, 1, 1, 1, 1, 0, 0]
  );

  return (
    <div className="image-container" ref={portfolioRef}>
      <GalleryComponent />
      <motion.div
        className="row-portfolio "
        style={{
          position: positionstart,
          opacity: opacityRowPortfolio,
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Projets
      </motion.div>
    </div>
  );
}

export default ImageGallery;
