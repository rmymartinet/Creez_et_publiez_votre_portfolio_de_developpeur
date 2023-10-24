import React, { useState } from 'react';
import image1 from '../../../images/image1.webp';
import image2 from '../../../images/image2.webp';
import image3 from '../../../images/image3.webp';
import psg from '../../../images/psg.webp';
import './hobby.scss';

const Hobby = () => {
  const [currentImage, setCurrentImage] = useState(image1);

  const handleMouseOver = (image) => {
    setCurrentImage(image);
  };

  return (
    <section className="hobby-section">
      <div className="hobby-container">
        <div className="hobby-names">
          <div className="hobby-flex">
            <img alt="psg" src={psg} />
            <span
              className="img-name"
              onMouseOver={() => handleMouseOver(image1)}
              style={{ cursor: 'pointer' }} // Ajoutez un style pour le curseur
            >
              Supporter
            </span>
            <p>depuis le premier jour, </p>
          </div>
          <div className="hobby-flex">
            <p className="padding-right">Player of</p>
            <span
              className="img-name"
              onMouseOver={() => handleMouseOver(image2)}
              style={{ cursor: 'pointer' }} // Ajoutez un style pour le curseur
            >
              oldies
            </span>
            <p>but goldies,</p>
          </div>
          <div className="hobby-flex">
            <p className="padding-right">Enorme fan de </p>
            <span
              className="img-name"
              onMouseOver={() => handleMouseOver(image3)}
              style={{ cursor: 'pointer' }} // Ajoutez un style pour le curseur
            >
              science fiction
            </span>
          </div>
        </div>
        <div className="img-preview-container">
          <img src={currentImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hobby;

// Huge fan of science fiction
