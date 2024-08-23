import React from 'react';
import './CabinDetails.css'; // Asegúrate de que este archivo CSS exista

function CabinDetails({ cabin, onClose }) {
  const whatsappMessage = `Hola, estoy interesado en reservar la ${cabin.name}.`;

  return (
    <div className="cabin-details">
      <button onClick={onClose} className="close-button">X</button>
      <h3>{cabin.name}</h3>
      <div className="cabin-details-images">
        {cabin.images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen de ${cabin.name}`} className="cabin-details-img" />
        ))}
      </div>
      <p>{cabin.description}</p>
      
      <a 
        href={`https://wa.me/3122587675?text=${encodeURIComponent(whatsappMessage)}`} // Enlace con mensaje predefinido
        className="reserve-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        
        Reservar
      </a>
    </div>
  );
}

export default CabinDetails;
