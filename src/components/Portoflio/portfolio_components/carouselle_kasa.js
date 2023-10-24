import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedTextStaggerLetter } from '../../Hero/hero_components.js';
import '../portfolio_components/horizontal_scroll.scss';
import kasa from '../../../images/kasa1.jpg';

const CarouselleKasa = () => {
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
          </div>
          <div>Bordeaux 2023</div>
        </motion.nav>
        <div className="slider">
          <div className="slider-wrapper-kasa">
            <div className="first-container">
              <div className="number-title">
                <p>01.</p>
              </div>
              <h1 className="first-title">
                <AnimatedTextStaggerLetter text="KASA" />
              </h1>
              <div className="description-container">
                <div className="description-title">
                  Kasa est l'un des leaders de la location d'appartements entre
                  particuliers en
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
                        J'ai dirigé le développement complet d'une application
                        React, en respectant les maquettes Figma pour garantir
                        la réactivité et l'esthétique, malgré l'absence d'un
                        développeur back-end
                      </div>
                    </div>
                    <div className="lead-content">
                      <div className="lead-title">Challenges:</div>
                      <div className="text-lead-paragraphe">
                        J'ai rencontré quelques <span>défis</span> lors de la
                        configuration des itinéraires et de la navigation entre
                        les pages, ainsi que lors de l'ouverture et de la
                        fermeture des animations de menu. J'ai trouvé des
                        <span>solutions</span> aux problèmes que j'ai rencontrés
                        en m'appuyant sur les cours React disponibles pour moi,
                        ainsi qu'en approfondissant ma recherche sur MDN.
                      </div>
                    </div>
                  </div>
                  <div className="description-col-1">
                    <div className="brief-content">
                      <div className="brief-title">Skills:</div>
                      <div className="text-brief-paragraphe">
                        <ul>
                          <li>Développer une interface web avec Sass</li>
                          <li>
                            Mettre en place la navigation entre les pages de
                            l'application avec React Router
                          </li>
                          <li>
                            Développer des éléments d'interface web en utilisant
                            des composants React
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="lead-content">
                      <div className="text-lead-paragraphe"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="button-project">
                <div className="button-content">
                  <a href="https://stephane-lieumont.fr/demo/openclassrooms-kasa/">
                    Visiter le site
                  </a>
                </div>
              </div>

              <div className="first-image">
                <img src={kasa} alt="" />
              </div>
            </div>
          </div>
        </div>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2.5 }}
        >
          <div>Kasa designs</div>
          <p>Year: 2023</p>
          <p>Role: Front-end </p>
          <p>Type: Plateforme de location d'appartements</p>
          <div>Martinet Rémy 2023 &copy;</div>
        </motion.footer>
      </motion.section>
    </>
  );
};

export default CarouselleKasa;
