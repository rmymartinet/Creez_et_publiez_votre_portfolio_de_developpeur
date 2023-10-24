import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedTextStaggerLetter } from '../../Hero/hero_components.js';
import '../portfolio_components/horizontal_scroll.scss';
import booki from '../../../images/booki1.webp';

const CarouselBooki = () => {
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
          <div className="slider-wrapper">
            <div className="first-container">
              <div className="number-title">
                <p>04.</p>
              </div>
              <h1 className="first-title">
                <AnimatedTextStaggerLetter text="Booki" />
              </h1>
              <div className="description-container">
                <div className="description-title">
                  Booki est un site de location d'appartements entre
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
                        Le projet impliquait le développement d'un site web
                        permettant aux utilisateurs de trouver des hébergements
                        et des activités dans leur ville. J'étais chargé
                        d'intégrer l'interface en collaboration avec l'équipe.
                        L'objectif était de créer une plateforme conviviale.
                      </div>
                    </div>
                    <div className="lead-content">
                      <div className="lead-title">Challenges:</div>
                      <div className="text-lead-paragraphe">
                        Je n'ai rencontré aucune difficulté dans ce projet, ce
                        qui m'a permis d'approfondir mes compétences et
                        d'obtenir un résultat qui correspondait étroitement au
                        design tout en maintenant la qualité du code.
                      </div>
                    </div>
                  </div>
                  <div className="description-col-1">
                    <div className="brief-content">
                      <div className="brief-title">Skills:</div>
                      <div className="text-brief-paragraphe">
                        <ul>
                          <li>
                            Implémenter une interface responsive avec HTML et
                            CSS
                          </li>
                          <li>
                            Intégrer du contenu conformément à un design en
                            utilisant HTML et CSS
                          </li>
                          <li>
                            Versionner votre projet en utilisant Git et GitHub
                          </li>
                          <li>
                            Configurer un environnement de développement
                            front-end
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

              <div className="button-project">
                <div className="button-content">
                  <a href="https://p2.arthurpellissier.com/">Visiter le site</a>
                </div>
              </div>

              <div className="first-image">
                <img src={booki} alt="" />
              </div>
            </div>
          </div>
        </div>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2.5 }}
        >
          <div>Booki design</div>
          <p>Année: 2023</p>
          <p>Role: Front-end</p>
          <p>Type: Photography.</p>
          <div>Martinet Rémy 2023 &copy;</div>
        </motion.footer>
      </motion.section>
    </>
  );
};

export default CarouselBooki;
