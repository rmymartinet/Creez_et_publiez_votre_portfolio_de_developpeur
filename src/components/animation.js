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

// export const HeroRowTop = ({ title }) => {
//   return <HeroAnimatedLetters title={title} />;
// };

//Animation mot par mot
// export const AnimatedWords = ({ title, disabled }) => {
//   const words = title.split(' ');

//   if (!Array.isArray(words)) {
//     return null;
//   }

//   return (
//     <motion.span
//       className="row-title"
//       variants={disabled ? null : letterTransition}
//       initial="initial"
//       animate="animate"
//     >
//       {words.map((word, index) => (
//         <motion.span
//           className="row-word"
//           variants={disabled ? null : wordsAnimation}
//           key={index}
//         >
//           {[...word].map((letter, index) => (
//             <motion.span
//               className={'row-letter'}
//               variants={disabled ? null : lettersMove}
//               key={index}
//             >
//               {letter}
//             </motion.span>
//           ))}
//         </motion.span>
//       ))}
//     </motion.span>
//   );
// };

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

export const CardMove = () => {
  const preElements = document.querySelectorAll('.pre');

  function rotateEl(e) {
    preElements.forEach((element) => {
      const x = e.clientX;
      const y = e.clientY;

      const middlex = window.innerWidth / 2;
      const middley = window.innerHeight / 2;

      const offsetX = ((x - middlex) / middlex) * 100;
      const offsetY = ((y - middley) / middley) * 100 * -1;

      element.style.setProperty('--rotatex', offsetY + 'deg');
      element.style.setProperty('--rotatey', offsetX + 'deg');
    });
  }

  document.addEventListener('mousemove', rotateEl);
};

const ContentLine = ({ content }) => {
  const contentRef = useRef();

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['start start', 'end end'],
  });

  const scrollValue = useTransform(scrollYProgress, [0, 0.9], ['100%', '0%']);
  const clipPathVal = useMotionTemplate`inset(${scrollValue}0% 0%  0%  )`;

  return (
    <span className="text-container">
      <motion.span
        style={{ clipPath: clipPathVal }}
        className="highlighted-text"
        data-text={content}
      />

      <span className="static-text">{content}</span>
    </span>
  );
};

export const ScrollText = ({ content }) => {
  return (
    <div className="outer">
      <div className="inner">
        <p>
          {content.map((item) => (
            <ContentLine key={item} content={item} />
          ))}
        </p>
      </div>
    </div>
  );
};
