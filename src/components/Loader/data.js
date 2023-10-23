export const words = ['design', 'develop', 'build', 'deploy', 'elevate'];

{
  /* <p>develop</p>
          <p>build</p>
          <p>deploy</p>
          <p>elevate</p> */
}
import { motion } from 'framer-motion';

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -90,
    duration: 2,
  },
  visible: {
    duration: 2,
    opacity: 1,
    y: -20,
    rotateX: 90,
    stagger: 0.015,
  },
  exit: {
    opacity: 0,
    y: -20,
    rotateX: 90,
    duration: 2,
  },
};

export const AnimateLetters = ({ words }) => {
  return (
    <motion.div className="aria-hidden">
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {word.split('').map((char, index) => (
            <motion.span
              className="inline-block"
              key={index}
              variants={defaultAnimation}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
};

// import { gsap } from 'gsap';
// import SplitTextJS from 'split-text-js';
// <div className="container">
//   <div className="text-wrapper">
//     <p>manger</p>
//     <p>boire</p>
//     <p>fumer</p>
//     <p>baiser</p>
//   </div>
// </div>;

// const title = gsap.utils.toArray('.text-wrapper p');
// const tl = gsap.timeline();

// title.forEach((title) => {
//   const splitTitle = new SplitTextJS(title);

//   tl.from(
//     splitTitle.chars,
//     {
//       opacity: 0,
//       y: 80,
//       rotateX: -90,
//       stagger: 0.1,
//     },
//     '<'
//   );

//   tl.to(
//     splitTitle.chars,
//     {
//       opacity: 0,
//       y: -80,
//       rotateX: 90,
//       stagger: 0.1,
//     },
//     '<1'
//   );
// });
