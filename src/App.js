import React, { useState , useEffect } from 'react';
import './App.css';
import CabinDetails from './CabinDetails';
// Importación de imágenes
import fondo from './assets/img/fondo2.jpg';
import parrafo from './assets/img/DSC_8740.JPG';
import galeria1 from './assets/img/gal1.jpg';
import galeria2 from './assets/img/gal2.jpg';
import galeria3 from './assets/img/gal3.jpg';
import galeria4 from './assets/img/gal4.jpg';
import galeria6 from './assets/img/gal6.jpg';
import galeria10 from './assets/img/nat3.jpg';
import galeria11 from './assets/img/nat4.jpg';
import galeria12 from './assets/img/nat5.jpg';
import cabana1 from './assets/img/cabana1.jpg';
import cabana2 from './assets/img/cabana2.jpg';
import cabana3 from './assets/img/cabana3.jpg';
import cabana4 from './assets/img/cabana4.jpg';
import cabana5 from './assets/img/cabana5.jpg';
import cabana6 from './assets/img/cabana6.jpg';

// Componente NavBar

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-class ${isScrolled ? 'scrolled' : ''}`}>
      <ul className='lista-nav'>
        <li><a href='#inicio'>Inicio</a></li>
        <li><a href='#cabanas'>Cabañas</a></li>
        <li><a href='#ubicacion'>Ubicación</a></li>
        <li><a href='#contacto'>Contáctanos</a></li>
      </ul>
    </nav>
  );
}



// Componente Banner
function Banner() {
  return (
    <header className="App-header">
      <div className="banner">
        <img src={fondo} alt="Imagen de Cabañas Jardines del Tatamá" className="banner-img" />
      </div>
      <div className='titulo'>
        <h1>Cabañas Jardines del Tatamá</h1>
      </div>
    </header>
  );
}

// Componente Parrafo
function Parrafo() {
  return (
    <div className='parrafo'>
      <div className="imagen-contenedor">
        <img src={parrafo} alt="Parrafo" className="banner-img" />
      </div>
      <p>
        Descubre un oasis de tranquilidad y diversión en Cabañas Jardines del Tatamá. 
        Relájate en nuestras acogedoras cabañas mientras disfrutas de actividades al aire libre, 
        entretenimiento en nuestro salón de juegos y deliciosos platillos en nuestro restaurante. 
        Ya sea para una escapada corta o una estadía prolongada, te ofrecemos el lugar perfecto 
        para crear recuerdos inolvidables en un entorno natural impresionante.
      </p>
    </div>
  );
}

// Componente ImageGallery
function ImageGallery() {
  const [showAllImages, setShowAllImages] = useState(false);

  const images = [
    galeria1,
    galeria12,
    galeria2,
    galeria10,
    galeria3,
    galeria11,
    galeria6,
    galeria4,
  ];

  const visibleImages = showAllImages ? images : images.slice(0, 3);

  const handleToggleImages = () => {
    setShowAllImages(!showAllImages);
  };

  return (
    <section className="image-gallery">
      <h2>Nuestro espacio</h2>
      <div className="images">
        {visibleImages.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index + 1}`} className="banner-img" />
        ))}
      </div>
      <button onClick={handleToggleImages} className="toggle-images-button">
        {showAllImages ? 'Mostrar Menos' : 'Ver Más'}
      </button>
    </section>
  );
}

// Componente CabinCard
function CabinCard() {
  const [showAllCabins, setShowAllCabins] = useState(false);
  const [selectedCabin, setSelectedCabin] = useState(null);

  const cabins = [
    {
      name: 'Cabaña Amaraya',
      image: cabana1,
      description: 'Descripción detallada de la Cabaña Amaraya. Incluye servicios como Wi-Fi, piscina, etc.',
      images: [cabana1] // Añade más imágenes según sea necesario
    },
    {
      name: 'Cabaña El Recreo',
      image: cabana2,
      description: 'Descripción detallada de la Cabaña El Recreo. Ideal para familias y grupos grandes.',
      images: [cabana2, /* otras imágenes */]
    },
    {
      name: 'Cabaña La Loma',
      image: cabana3,
      description: 'Descripción detallada de la Cabaña La Loma. Rodeada de naturaleza y tranquilidad.',
      images: [cabana3, /* otras imágenes */]
    },
    {
      name: 'Cabaña Pino',
      image: cabana4,
      description: 'Descripción detallada de la Cabaña Pino. Acogedora y rústica, perfecta para parejas.',
      images: [cabana4, /* otras imágenes */]
    },
    {
      name: 'Cabaña Familiar 1',
      image: cabana5,
      description: 'Descripción detallada de la Cabaña Familiar 1. Espaciosa y cómoda para familias grandes.',
      images: [cabana5, /* otras imágenes */]
    },
    {
      name: 'Cabaña Familiar 2',
      image: cabana6,
      description: 'Descripción detallada de la Cabaña Familiar 2. Con todas las comodidades para un descanso perfecto.',
      images: [cabana6, /* otras imágenes */]
    },
  ];

  const visibleCabins = showAllCabins ? cabins : cabins.slice(0, 3);

  const handleToggleCabins = () => {
    setShowAllCabins(!showAllCabins);
  };

  const handleShowDetails = (cabin) => {
    setSelectedCabin(cabin);
  };

  const handleCloseDetails = () => {
    setSelectedCabin(null);
  };

  return (
    <section id="cabanas" className='cabanas'>
      <h2>Nuestras cabañas</h2>
      <div className="cabin-card-container">
        {visibleCabins.map((cabin, index) => (
          <div key={index} className="cabin-card">
            <h3>{cabin.name}</h3>
            <img src={cabin.image} alt={cabin.name} className="cabin-img" />
            <p>{cabin.description.slice(0, 50)}...</p> {/* Resumen de la descripción */}
            <button onClick={() => handleShowDetails(cabin)} className="more-info-button">Ver Más</button>
          </div>
        ))}
      </div>
      <button onClick={handleToggleCabins} className="toggle-cabins-button">
        {showAllCabins ? 'Mostrar Menos' : 'Ver Más'}
      </button>

      {selectedCabin && <CabinDetails cabin={selectedCabin} onClose={handleCloseDetails} />}
    </section>
  );
}

// Componente Map
function Map() {
  return (
    <section id="ubicacion" className="map-section">
      <h2>Ubicación</h2>
      <iframe 
        title="Ubicación de Cabañas Jardines del Tatamá"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5096.072610901358!2d-76.03961!3d5.2133138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e479545a43f81d9%3A0x1da5bdbb0523ee30!2sJardines%20del%20Tatam%C3%A1!5e1!3m2!1ses!2sco!4v1633020289465!5m2!1ses!2sco" 
        width="600" 
        height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy">
      </iframe>
    </section>
  );
}

// Componente Footer
function Footer() {
  return (
    <footer id="contacto" className="App-footer">
      <div className="contact-info">
        <h2>Información de Contacto</h2>
        <p>Cabañas Jardines del Tatamá</p>
        <p>Correo Electrónico: cabanasjardinesdeltatama@gmail.com</p>
        <div className="social-icons">
          <a 
            href="https://www.facebook.com/tu-pagina" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
              alt="Facebook Icon"
            />
            <p>Cabañas Jardines del Tatamá</p>
          </a>
          <a 
            href="https://www.instagram.com/tu-pagina" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
              alt="Instagram Icon"
            />
            <p>Cabañas Jardines del Tatamá</p>
          </a>
        </div>
      </div>

      <div className='boton-res'>
        <a 
          href="https://wa.me/3122587675?text=Hola%20estoy%20interesad@%20en%20reservar%20en%20Caba%C3%B1as%20Jardines%20del%20Tatam%C3%A1%20y%20deseo%20m%C3%A1s%20informaci%C3%B3n" 
          className="reserve-button"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp Icon"
          />
          Reservar
        </a>
      </div>
    </footer>
  );
}

// Componente principal App
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Parrafo />
      <ImageGallery />
      <CabinCard />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
