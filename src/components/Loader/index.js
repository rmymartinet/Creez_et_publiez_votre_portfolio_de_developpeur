// import React, { useState } from 'react';
// import '../Loader/loader.scss';
// import { motion, AnimatePresence } from 'framer-motion';

// const Loader = () => {
//   const [animation, setAnimation] = useState(false);

//   // Variants pour la phrase entière
//   const sentenceVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0, transition: { duration: 1 } },
//     exit: { opacity: 0, transition: { duration: 1 } },
//   };

//   const overlayVariants = {
//     initial: { height: '100vh' },
//     animate: { height: 0, transition: { duration: 2, delay: 5 } },
//   };

//   return (
//     <>
//       <div>
//         <motion.div className="loader-wrapper">
//           <AnimatePresence>
//             {animation === false && ( //disparition de sentence
//               <motion.div
//                 className="sentence"
//                 variants={sentenceVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//               >
//                 <p>
//                   Elevate your brand's online presence with my signature web
//                   designs.
//                 </p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//         <AnimatePresence>
//           <motion.div
//             className="overlay"
//             variants={overlayVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           ></motion.div>
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };

// export default Loader;
