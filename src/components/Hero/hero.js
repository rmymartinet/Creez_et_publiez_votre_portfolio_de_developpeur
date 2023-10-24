import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../Hero/hero.scss';
import { AnimateLetters, AnimatedTextStaggerWords } from './hero_components.js';

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
        <motion.div className="hero-info" style={{ opacity: opacityhero }}>
          <p>
            Ouvert à toute collaboration <br /> pour créer des designs modernes
            et épurés
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
                ☺ <span className="passioné">Passioné</span> par le design
                créatif pour concevoir des projets uniques
              </p>
            </motion.div>
          </motion.div>
          <div className="info-container">
            <motion.div className="info" style={{ opacity: opacityhero }}>
              <AnimatedTextStaggerWords text="Rémy (il/lui) est un developpeur indépendant" />
              <br />
              {delay && <AnimatedTextStaggerWords text="de Bordeaux, France" />}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
