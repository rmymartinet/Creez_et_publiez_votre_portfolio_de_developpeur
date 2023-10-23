import React, { useState } from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import '../components/hobby.scss';

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
            <span
              className="img-name"
              onMouseOver={() => handleMouseOver(image1)}
              style={{ cursor: 'pointer' }} // Ajoutez un style pour le curseur
            >
              Supporter
            </span>
            <p>since day one, </p>
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
            <p className="padding-right">Huge fan of </p>
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
