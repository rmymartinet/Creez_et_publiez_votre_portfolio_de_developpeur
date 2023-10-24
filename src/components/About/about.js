import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Hobby from './about_components/Hobby.js';
import debout from '../../images/debout.JPG';
import assis from '../../images/assis.JPG';
import guitare from '../../images/guitare.JPG';

import '../About/about.scss';

const AboutFake = () => {
  const AboutRef = useRef();

  const { scrollYProgress } = useScroll({
    target: AboutRef,
    offset: ['start center', 'end center'],
  });

  const img1Zindex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.9],
    [2, 2, 0, 0, 0]
  );
  const img2Zindex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.9],
    [1, 1, 3, 3, 3]
  );
  const img3Zindex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.9],
    [1, 1, 1, 3, 4]
  );

  return (
    <>
      <motion.div className="about-container">
        <motion.div className="about-title">
          <p>
            In the game for over 1 years, I'm currently based in Bordeaux city,
            working as an independent developer since October 2023."
          </p>
        </motion.div>
        <motion.div className="about-subtitle">
          <p>
            Enthusiastic about crafting ideas, visual elements, motion, and
            typography into memorable creations.
          </p>
        </motion.div>
        <div className="about-content" ref={AboutRef}>
          <motion.img
            src={debout}
            data-img="about1"
            style={{ zIndex: img1Zindex }}
          ></motion.img>
          <motion.img
            src={assis}
            data-img="about2"
            style={{ zIndex: img2Zindex }}
          ></motion.img>
          <motion.img
            src={guitare}
            data-img="about3"
            style={{ zIndex: img3Zindex }}
          ></motion.img>
        </div>
      </motion.div>
      <Hobby />
    </>
  );
};

export default AboutFake;
