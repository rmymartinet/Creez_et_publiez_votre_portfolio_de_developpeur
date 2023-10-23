import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { letterTransition } from '../animation.js';
import { defaultAnimation } from '../animation.js';
import { lettersMove } from '../animation.js';

export const AnimateLetters = ({ title, customclass }) => {
  return (
    <div className={customclass}>
      <div className="row-col">
        <HeroAnimatedLetters title={title} />
      </div>
    </div>
  );
};

const HeroAnimatedLetters = ({ title }) => (
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

//with useinview
export const AnimatedText = ({
  text,
  el: Wrapper = 'p',
  className = 'animated-text',
}) => {
  const targetRef2 = useRef(null);
  const isInView = useInView(targetRef2, { amount: 0.5 });
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={targetRef2}
        aria-hidden
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ delayChildren: 0.4, staggerChildren: 0.1 }}
      >
        {text.split('').map((char) => (
          <motion.span
            style={{ display: 'inline-block' }}
            variants={defaultAnimation}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

//withou useinview
export const AnimatedTextStaggerLetter = ({
  text,
  el: Wrapper = 'p',
  className = 'animated-text',
}) => {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: 0.4, staggerChildren: 0.1 }}
      >
        {text.split('').map((char) => (
          <motion.span
            style={{ display: 'inline-block' }}
            variants={defaultAnimation}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export const AnimatedTextStaggerWords = ({
  text,
  el: Wrapper = 'p',
  className = 'animated-text',
}) => {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: 0.4, staggerChildren: 0.1 }}
      >
        {text.split(' ').map((word, index) => (
          <React.Fragment key={index}>
            <motion.span
              style={{ display: 'inline-block' }}
              variants={defaultAnimation}
            >
              {word}
            </motion.span>
            {index !== text.split(' ').length - 1 && ' '}
          </React.Fragment>
        ))}
      </motion.span>
    </Wrapper>
  );
};
