import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedTextStaggerLetter } from '../../Hero/hero_components.js';
import '../portfolio_components/horizontal_scroll.scss';
import sophiebuel from '../../../images/sophiebuel1.webp';

const CarouselSophieBuel = () => {
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
                <p>03.</p>
              </div>
              <h1 className="first-title">
                <AnimatedTextStaggerLetter text="Architecte" />
              </h1>
              <div className="description-container">
                <div className="description-title">
                  Agence ArchiWebos, Sophie Buel, architecte d'intérieur <br />
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
                        Ce projet vise à créer un portfolio pour l'architecte
                        d'intérieur Sophie Buel. J'ai été en contact avec
                        l'équipe en charge du projet pour travailler sur la
                        partie front-end du site web. J'ai dû mettre en place le
                        design du site web et m'assurer du bon fonctionnement de
                        différentes fonctionnalités en lien avec une API qui m'a
                        été fournie.
                      </div>
                    </div>
                    <div className="lead-content">
                      <div className="lead-title">Challenges:</div>
                      <div className="text-lead-paragraphe">
                        J'ai apprécié ce projet et n'ai pas rencontré de défis
                        significatifs. J'ai rapidement compris le fonctionnement
                        de l'API.
                      </div>
                    </div>
                  </div>
                  <div className="description-col-1">
                    <div className="brief-content">
                      <div className="brief-title">Skills:</div>
                      <div className="text-brief-paragraphe">
                        <ul>
                          <li>
                            Gérer les événements utilisateur avec JavaScript
                          </li>
                          <li>Manipuler les éléments du DOM avec JavaScript</li>
                          <li>
                            Récupérer les données utilisateur en JavaScript à
                            travers les formulaires
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
                  <a href="https://p3.arthurpellissier.com/">Visiter le site</a>
                </div>
              </div>
              <div className="first-image">
                <img src={sophiebuel} alt="" />
              </div>
            </div>
          </div>
        </div>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2.5 }}
        >
          <div>Sophie buel designs</div>
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
