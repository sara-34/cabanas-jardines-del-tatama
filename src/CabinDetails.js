import React from 'react';
import './CabinDetails.css'; // Asegúrate de que este archivo CSS exista

function CabinDetails({ cabin, onClose }) {
  const whatsappMessage = `Hola, estoy interesado en reservar la ${cabin.name}.`;

  return (
    <div className="cabin-details">
      
      <h3>{cabin.name}</h3>
      <div className="cabin-details-images">
        {cabin.images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen de ${cabin.name}`} className="cabin-details-img" />
        ))}
      </div>
      <p>{cabin.description}</p>
      <h2>ADICIONALES</h2>
      <p>{cabin.adicional}</p>
     
      <a 
        href={`https://wa.me/3122587675?text=${encodeURIComponent(whatsappMessage)}`} // Enlace con mensaje predefinido
        className="reserve-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        
        Reservar
      </a>
      <button onClick={onClose} className="close-button">Cerrar</button>
    </div>
  );
}

export default CabinDetails;
