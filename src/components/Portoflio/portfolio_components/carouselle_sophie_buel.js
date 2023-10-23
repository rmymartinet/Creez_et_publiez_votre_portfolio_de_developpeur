import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import imageDesert from '../../../images/image2.jpg';
import {
  AnimateLetters,
  AnimatedText,
  AnimatedTextStaggerLetter,
} from '../../Hero/hero_components.js';
import '../portfolio_components/horizontal_scroll.scss';

const CarouselSophieBuel = () => {
  let target = 0; // sert à définir la position de l'image
  let current = 0; // sert à définir quelle image est affichée
  let ease = 0.075; // sert à définir la transition de l'image

  const sliderWrapperRef = useRef(null);

  useEffect(() => {
    const sliderWrapper = sliderWrapperRef.current;

    //calcul jusqu'ou je vais pouvoir scroller
    let maxScroll = sliderWrapper.offsetWidth - window.innerWidth; //cal

    console.log(sliderWrapper.offsetWidth);

    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    function update() {
      current = lerp(current, target, ease);
      gsap.set('.slider-wrapper', {
        x: -current,
      });

      requestAnimationFrame(update);
    }
    window.addEventListener('resize', () => {
      maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
    });

    window.addEventListener('wheel', (e) => {
      target += e.deltaY;

      target = Math.max(0, target);
      target = Math.min(maxScroll, target);
    });

    update();
  }, []);

  return (
    <>
      <motion.section exit={{ opacity: 0, duration: 1 }}>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2.5 }}
        >
          <div>
            <Link to={`/`} className="back-hover">
              Back
            </Link>
            <div>Scroll to the rigth </div>
          </div>
          <div>Bordeaux 2023</div>
        </motion.nav>
        <div className="slider">
          <div ref={sliderWrapperRef} className="slider-wrapper">
            <div className="first-container">
              <div className="number-title">
                <p>03.</p>
              </div>
              <h1 className="first-title">
                <AnimatedTextStaggerLetter text="Architecte" />
              </h1>
              <div className="description-container">
                <div className="description-title">
                  Agence ArchiWebos, Sophie Buel, interior architect
                  <br />
                  France.
                </div>
                <div className="separate-line"></div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="description-content"
                >
                  <div className="description-col-1">
                    <div className="brief-content">
                      <div className="brief-title">Brief:</div>
                      <div className="text-brief-paragraphe">
                        This project aims to create a portfolio for the interior
                        architect Sophie Buel. I was connected with the team
                        responsible for the project to work on the front-end of
                        the website. I had to implement the website's design, as
                        well as ensure the proper functioning of various
                        features in connection with an API provided to me
                      </div>
                    </div>
                    <div className="lead-content">
                      <div className="lead-title">Challenges:</div>
                      <div className="text-lead-paragraphe">
                        I enjoyed this project and did not encounter significant
                        challenges. I quickly understood how the API worked.
                      </div>
                    </div>
                  </div>
                  <div className="description-col-1">
                    <div className="brief-content">
                      <div className="brief-title">Skills:</div>
                      <div className="text-brief-paragraphe">
                        <ul>
                          <li>Manage user events with JavaScript</li>
                          <li>Manipulate DOM elements with JavaScript.</li>
                          <li>
                            Retrieve user data in JavaScript through forms.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="lead-content">
                      {/* <div className="lead-title">Delivrables:</div> */}
                      <div className="text-lead-paragraphe"></div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* <motion.div
                className="first-button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
              >
                <div data-form-type="card">
                  <Link to={`/`} class="btn">
                    <span class="btn__circle"></span>
                    <span class="btn__black-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="icon-arrow-right"
                        viewBox="0 0 21 12"
                      >
                        <path
                          d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span class="btn__text">Visit site</span>
                  </Link>
                </div>
              </motion.div> */}
              <div className="button-project">
                <div className="button-content">
                  <span>Visite site</span>
                </div>
              </div>

              <div className="first-image">
                <img src={imageDesert} alt="" />
              </div>
            </div>

            <motion.div className="slide">
              <img src={imageDesert} alt="" />
            </motion.div>
            <motion.div className="slide">
              <img src={imageDesert} alt="" />
            </motion.div>
            <motion.div className="last">
              <img src={imageDesert} alt="" />
            </motion.div>
            <Link to={`/potfolio/grimmoire`} className="button-next-project">
              <span>Next project</span>
            </Link>
          </div>
        </div>
        <motion.footer
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 0.4 }}
        // transition={{ duration: 2.5 }}
        >
          <div>Sophie buel web designs</div>
          <p>Year: 2023</p>
          <p>Role: Front-end</p>
          <p>Type: Portfolio</p>
          <div>Martinet Rémy 2023 &copy;</div>
        </motion.footer>
      </motion.section>
    </>
  );
};

export default CarouselSophieBuel;
