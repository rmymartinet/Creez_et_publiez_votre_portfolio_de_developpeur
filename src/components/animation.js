import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

import { useRef } from 'react';

//Animation des textes

export const letterTransition = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const lettersMove = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
      duration: 1,
    },
  },
};

export const wordsAnimation = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const PortfolioAnimatedLetters = ({ title }) => (
  <motion.span
    className="row-title"
    variants={letterTransition}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter) => (
      <motion.span
        className={`row-letter ${letter === 'y' ? 'special-class' : ''}`}
        variants={lettersMove}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

export const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 400,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.05, 0.01, 0.9],
      duration: 1,
    },
  },
};
