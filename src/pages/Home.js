// import React from 'react';
// import ImageGallery from '../components/imageGallery.js';
// import transition from '../transition.js';
// import Hero from '../components/Hero/index.js';
// import Loader from '../components/Loader/index.js';
// import { useLayoutEffect, useState } from 'react';
// import gsap from 'gsap';

// function Home() {
//   const [loadingFinished, setLoadingFinished] = useState(false);
//   const [timeline, setTimeline] = useState(null);

//   useLayoutEffect(() => {
//     const context = gsap.context(() => {
//       const tl = gsap.timeline({
//         onComplete: () => {
//           setLoadingFinished(true);
//           console.log('loading finished');
//         },
//       });
//       setTimeline(tl);
//     });
//     return () => context.revert(); // sert à annuler l'animation
//   }, []);

//   return (
//     <>
//       {loadingFinished ? <Hero /> : <Loader timeline={timeline} />}

//       <section className="home-container">
//         <ImageGallery />
//       </section>
//     </>
//   );
// }

// export default Home;

'use client';

import { useEffect, useState } from 'react';

/* eslint-disable no-unused-vars */

import Loader from '../components/Loader/index.js';
import Hero from '../components/Hero/hero.js';
import ImageGallery from '../components/Gallery/gallery.js';
import About from '../components/About/about.js';
import Service from '../components/Stages/service.js';
import Contact from '../components/Contact/Contact.js';

const Home = () => {
  /* eslint-disable no-unused-vars */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);
  return (
    // <main>{loaderFinished ? <Hero /> : <Loader timeline={timeline} />}</main>
    // <AnimatePresence>
    //   {loading ? (
    //     <motion.div key="loader">
    //       <Loader setLoading={setLoading} />
    //     </motion.div>
    //   ) : (
    //     <>
    //       <Hero />
    //     </>
    //   )}
    // </AnimatePresence>
    <div>
      <Hero />
      <ImageGallery />
      <Service />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
