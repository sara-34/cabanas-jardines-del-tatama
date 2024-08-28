import React, { useState } from 'react';
import './CabinDetails.css';

function CabinDetails({ cabin, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const whatsappMessage = `Hola, estoy interesado en reservar la ${cabin.name}.`;

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="cabin-details-overlay" onClick={onClose}></div>
      <div className="cabin-details">
        <h3>{cabin.name}</h3>
        <div className="cabin-details-images">
          {cabin.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagen de ${cabin.name}`}
              className="cabin-details-img"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        <p>{cabin.description}</p>
        <h2>ADICIONALES</h2>
        <p>{cabin.adicional}</p>

        <a
          href={`https://wa.me/3122587675?text=${encodeURIComponent(whatsappMessage)}`}
          className="reserve-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservar
        </a>
        <button onClick={onClose} className="close-button">X</button>

        {selectedImage && (
          <div className="image-modal" onClick={closeImageModal}>
            <img src={selectedImage} alt="Imagen ampliada" className="image-modal-content" />
          </div>
        )}
      </div>
    </>
  );
}

export default CabinDetails;

