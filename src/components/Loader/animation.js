// import gsap from 'gsap';
// import SplitTextJS from 'split-text-js';

// export const introAnimation = () => {
//   const tl = gsap.timeline();
//   const wordsGroup = gsap.utils.toArray('.loader-content p');

//   //ANIMATION DISPARITION LOADER
//   // tl.from(loaderRef.current, {
//   //   duration: 1000,
//   //   delay: 0,
//   //   opacity: 1,
//   // });

//   //ANIMATION WORDS
//   wordsGroup.forEach((word) => {
//     const splitWord = new SplitTextJS(word, { type: 'chars' });

//     tl.from(
//       splitWord.chars,
//       {
//         visibility: 'visible',
//         opacity: 0,
//         y: 20,
//         rotateX: -90,
//         stagger: 0.015,
//       },
//       '<'
//     );

//     if (word.innerText === 'Elevate') {
//       tl.to(
//         splitWord.chars,
//         {
//           opacity: 1,
//           x: '-200px',
//         },
//         '<1'
//       );
//     } else {
//       tl.to(
//         splitWord.chars,
//         {
//           opacity: 0,
//           y: -20,
//           rotateX: 90,
//           stagger: 0.015,
//         },
//         '<1'
//       );
//     }
//   });

//   //ANIMATION DISPARITION OVERLAY
//   // tl.to(overlayRef.current, {
//   //   duration: 2,
//   //   backgroundColor: 'red',
//   //   height: '0',
//   //   // onComplete: () => {
//   //   //   const loaderWrapper = document.querySelector('.loader-wrapper');
//   //   //   loaderWrapper.style.visibility = 'hidden';
//   //   // },
//   // });

//   return tl;
// };

// import { motion } from 'framer-motion';

// const defaultAnimation = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//     rotateX: -90,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     rotateX: 0,
//     transition: {
//       //   duration: 1,
//       stagger: 0.015,
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     rotateX: 90,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// export const AnimateLetters = ({ text }) => {
//   return (
//     <div>
//       <motion.span
//         className="aria-hidden"
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         transition={{ staggerChildren: 0.1 }}
//       >
//         {text.split('').map((char, index) => (
//           <motion.span
//             className="inline-block"
//             key={index}
//             variants={defaultAnimation}
//           >
//             {char}
//           </motion.span>
//         ))}
//       </motion.span>
//     </div>
//   );
// };

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
      <motion.div initial="hidden" animate="visible" exit="exit">
        {words.map((word, wordIndex) => (
          <motion.span key={wordIndex} variants={defaultAnimation}>
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
    </motion.div>
  );
};
