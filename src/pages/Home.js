'use client';

import Hero from '../components/Hero/hero.js';
import ImageGallery from '../components/Gallery/gallery.js';
import About from '../components/About/about.js';
import Service from '../components/Stages/service.js';
import Contact from '../components/Contact/Contact.js';

const Home = () => {
  return (
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
