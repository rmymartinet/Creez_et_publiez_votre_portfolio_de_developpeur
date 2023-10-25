import React from 'react';
import './service.scss';
import { AnimatedTextStaggerLetter } from '../Hero/hero_components.js';

const Service = () => {
  return (
    <main className="main-container">
      <header className="main-header">
        <span>Processus de </span>
        <AnimatedTextStaggerLetter text="travail" className="text-red" />
      </header>
      <div className="list-item">
        <div className="row-1">
          <div className="test-col1">
            <div className="test-container">
              <div className="test-content">
                <span>(a)</span>
                <div className="test-text">
                  <h1>Discution de taches</h1>
                  <p>
                    À mon avis, une compréhension approfondie du cahier des
                    charges et du client est indispensable au point de départ.
                    La définition des objectifs du projet et des spécifications
                    fonctionnelles, la connaissance des concurrents et du public
                    cible, ainsi que la réalisation de recherches sont des
                    étapes cruciales à ce stade pour trouver une combinaison
                    précise entre la typographie, les couleurs, la composition,
                    les animations et les éléments de la marque. Pour moi, ce
                    processus est la base pour résoudre les problèmes
                    commerciaux et découvrir la bonne direction pour le design
                    parfait.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="test-col1">
            <div className="test-container">
              <div className="test-content">
                <span>(b)</span>
                <div className="test-text">
                  <h1>Structure du site</h1>
                  <p>
                    Après avoir examiné vos besoins, nous passons à la
                    structuration de votre site web. Avant même de penser au
                    design, il est essentiel de mener une recherche approfondie.
                    Nous analysons le marché, les forces et faiblesses de votre
                    entreprise, ainsi que vos concurrents. Nous prenons
                    également le temps de comprendre votre public cible. Sur la
                    base de ces informations, je crée un prototype en noir et
                    blanc qui servira de base pour le design final.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-3">
          <div className="test-col1">
            <div className="test-container">
              <div className="test-content">
                <span>(c)</span>
                <div className="test-text">
                  <h1>Design du site</h1>
                  <p>
                    Le design est une étape critique dans la création de votre
                    site web. Je prépare des références de design que nous
                    discutons ensemble. Nous créons un ou deux prototypes de
                    mise en page pour les sections initiales du site afin de
                    valider le style global qui correspond à vos préférences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-4">
          <div className="test-col1">
            <div className="test-container">
              <div className="test-content">
                <span>(d)</span>
                <div className="test-text">
                  <h1>Full Design</h1>
                  <p>
                    Une fois que nous avons déterminé le style que vous aimez,
                    je passe à la conception complète du site web. Cela implique
                    la création d'une mise en page détaillée qui intègre
                    l'ensemble du concept de design pour l'ensemble du site.
                    C'est là que l'esthétique prend vie, avec une attention
                    particulière à la mise en page, aux couleurs, à la
                    typographie et aux éléments visuels soigneusement choisis
                    pour offrir une expérience utilisateur cohérente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-5">
          <div className="test-col1">
            <div className="test-container">
              <div className="test-content">
                <span>(e)</span>
                <div className="test-text">
                  <h1>Developpement</h1>
                  <p>
                    La phase de développement transforme le design statique en
                    un site web interactif. J'utilise des outils de
                    développement comme Figma pour transférer la mise en page
                    conçue précédemment. Je m'assure également que le site est
                    connecté aux services nécessaires, tels que les bases de
                    données ou les systèmes de gestion de contenu. Avant de le
                    rendre accessible au public, le site est configuré avec soin
                    et testé pour garantir un fonctionnement fluide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-6">
          <div className="test-col1">
            <div className="test-container">
              <div className="test-content">
                <span>(f)</span>
                <div className="test-text">
                  <h1>Livraison finale</h1>
                  <p>
                    Enfin, nous passons à la livraison du site. Je transfère le
                    site final sur votre compte payant. Si nécessaire, je peux
                    vous fournir des instructions vidéo pour vous aider à gérer
                    et à entretenir votre site web. Cela inclut des conseils sur
                    la gestion du contenu, les mises à jour et d'autres aspects
                    essentiels pour maintenir votre site à jour et en bon état
                    de fonctionnement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Service;
