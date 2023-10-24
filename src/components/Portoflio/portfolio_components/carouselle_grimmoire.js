import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedTextStaggerLetter } from '../../Hero/hero_components.js';
import '../portfolio_components/horizontal_scroll.scss';
import grimmoire from '../../../images/grimmoire1.png';

const CarouselGrimmoire = () => {
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
                <p>02.</p>
              </div>
              <h1 className="first-title">
                <AnimatedTextStaggerLetter text="Grimmoire" />
              </h1>
              <div className="description-container">
                <div className="description-title">
                  Mon vieux grimoire" est une chaîne de librairies à Lille,
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
                        Le but de ce projet est de créer un site web de notation
                        de livres appelé "Mon Vieux Grimoire". Le site permettra
                        aux utilisateurs de noter et de partager des critiques
                        sur des livres. En fournissant un moyen convivial de
                        noter et de découvrir des livres, le projet vise à
                        promouvoir les services de la librairie et à établir une
                        communauté en ligne pour les amateurs de livres.
                      </div>
                    </div>
                    <div className="lead-content">
                      <div className="lead-title">Challenges:</div>
                      <div className="text-lead-paragraphe">
                        Il y a eu plusieurs défis, notamment la capacité de
                        créer, gérer et communiquer avec une API. J'ai rencontré
                        quelques difficultés dans la communication entre le
                        front-end et le back-end. <br />
                        Pour trouver des solutions, je me suis appuyé sur la
                        documentation des langages pertinents pour ce projet,
                        notamment MDN.
                      </div>
                    </div>
                  </div>
                  <div className="description-col-1">
                    <div className="brief-content">
                      <div className="brief-title">Skills:</div>
                      <div className="text-brief-paragraphe">
                        <ul>
                          <li>
                            Mettre en place un modèle de données logique
                            conforme à la réglementation
                          </li>
                          <li>
                            Mettre en œuvre de manière sécurisée les opérations
                            CRUD (Create, Read, Update, Delete)
                          </li>
                          <li>Stocker les données de manière sécurisée</li>
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
                  <a href="https://p7.arthurpellissier.com/">Visiter le site</a>
                </div>
              </div>

              <div className="first-image">
                <img src={grimmoire} alt="" />
              </div>
            </div>
          </div>
        </div>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2.5 }}
        >
          <div>Grimmoire designs</div>
          <p>Year: 2023</p>
          <p>Role: Front-end</p>
          <p>Type: bookstore </p>
          <div>Martinet Rémy 2023 &copy;</div>
        </motion.footer>
      </motion.section>
    </>
  );
};

export default CarouselGrimmoire;
