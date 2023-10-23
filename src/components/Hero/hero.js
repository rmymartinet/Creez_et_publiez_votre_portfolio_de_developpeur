import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useScroll, useTransform, useTime } from 'framer-motion';
import '../Hero/hero.scss';

import { AnimateLetters, AnimatedTextStaggerWords } from './hero_components.js';

import debout from '../../images/debout.JPG';
export const Hero = () => {
  const [delay, setdelay] = useState(false);

  // TARGET
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end center '],
  });

  //OPACITY
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const opacityMartinet = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 0.9],
    [1, 1, 1, 1, 1, 0]
  );

  const opacityhero = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  //POSITION
  const position = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.99 ? 'relative' : 'fixed';
  });

  //SCALE
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
    [1, 1, 0.95, 0.9, 0.8, 0.7, 0.6]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setdelay(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="hero-container" ref={targetRef}>
        <motion.div className="hero-info">
          <p>
            Open to any collaboration <br /> for creating clean modern designs
          </p>
        </motion.div>
        <motion.div className="hero-version">
          <p>portfolio vol.1</p>
        </motion.div>
        <motion.div className="hero-left">
          {/*div qui contient le titre et prénom*/}
          <motion.div className="hero-content" style={{ position }}>
            <motion.div style={{ opacity }}>
              <AnimateLetters
                title={'Rémy'}
                customclass={'banner-row row-top'}
              />
            </motion.div>
            <motion.div
              style={{
                opacity: opacityMartinet,
                scale,
              }}
            >
              <AnimateLetters
                title={'Martınet'}
                customclass={'banner-row row-bottom'}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="hero-text"
              style={{ opacity: opacityhero }}
            >
              <p>
                ☺ <span>Passionate</span> about creating unforgettable and
                beautiful digital experiences.
              </p>
            </motion.div>
          </motion.div>
          <div className="info-container">
            <motion.div className="info" style={{ opacity: opacityhero }}>
              <AnimatedTextStaggerWords text="Rémy (he/him) is and independent develloper" />
              <br />
              {delay && (
                <AnimatedTextStaggerWords text="from Bordeaux, France" />
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
