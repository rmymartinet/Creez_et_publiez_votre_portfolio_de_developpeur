import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/all';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './gallery_components.scss';

import kasa from '../../../images/kasa1.webp';
import grimmoire from '../../../images/grimmoire1.webp';
import sophiebuel from '../../../images/sophiebuel1.webp';
import booki from '../../../images/booki1.webp';

function GalleryComponent() {
  const imgPreviewRef = useRef(null);
  const imgsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(Flip);

    const imgPreview = imgPreviewRef.current;
    const imgs = imgsRef.current;

    /* eslint-disable no-unused-vars */
    let isimgPreviewOpen = false;
    let activeImg = null;
    let activeImgImg = null;
    let activeImgParent = null;

    imgs.forEach((img, index) => {
      let theImgMask = img.querySelector('.wrap');
      let theImg = img.querySelector('img');

      img.addEventListener('click', () => {
        const imgState = Flip.getState([theImgMask, theImg]);
        gsap.set(imgPreview, { autoAlpha: 1 });
        activeImg = theImgMask;
        activeImgImg = theImgMask.querySelector('img');
        activeImgParent = theImgMask.parentNode;
        imgPreview.appendChild(theImgMask);

        Flip.from(imgState, {
          duration: 1,
          ease: 'power3.inOut',
          scale: true,
          onStart: () => {
            imgPreview.classList.add('imgPreview--active');
          },
          onComplete: () => {
            isimgPreviewOpen = true;
          },
        });
      });
    });
  }, []);

  return (
    <div>
      <div className="imgPreview" ref={imgPreviewRef}></div>
      <motion.div
        className="container"
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="gallery">
          <div
            className="imgContainer pos-1"
            ref={(el) => (imgsRef.current[0] = el)}
          >
            <div className="wrap">
              <Link to="/portfolio/kasa">
                <motion.img className="img" src={kasa} />
              </Link>
            </div>
            <div className="imgContainer-infos">
              <h1>Kasa</h1>
              <p>Location d'appartements</p>
            </div>
          </div>
          <div
            className="imgContainer pos-2"
            ref={(el) => (imgsRef.current[1] = el)}
          >
            <div className="wrap">
              <Link to="/portfolio/grimmoire">
                <img
                  className="img"
                  alt="mon vieux grimmoire"
                  src={grimmoire}
                />
              </Link>
            </div>
            <div className="imgContainer-infos">
              <h1>Mon vieux grimmoire</h1>
              <p>Librairie</p>
            </div>
          </div>
          <div
            className="imgContainer pos-3"
            ref={(el) => (imgsRef.current[2] = el)}
          >
            <div className="wrap">
              <Link to="/portfolio/sophiebuel">
                <img alt="sophie buel" className="img" src={sophiebuel} />
              </Link>
            </div>
            <div className="imgContainer-infos">
              <h1>Architecte</h1>
              <p>Portfolio</p>
            </div>
          </div>
          <div
            className="imgContainer pos-4"
            ref={(el) => (imgsRef.current[3] = el)}
          >
            <div className="wrap">
              <Link to="/portfolio/booki">
                <img alt="booki" className="img" src={booki} />
              </Link>
            </div>
            <div className="imgContainer-infos">
              <h1>Booki</h1>
              <p>Réservation de vacances</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default GalleryComponent;
