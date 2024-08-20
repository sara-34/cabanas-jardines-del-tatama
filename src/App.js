import React from 'react';
import './App.css';
import fondo from './assets/img/fondo2.jpg'
import parrafo from './assets/img/DSC_8740.JPG'
import galeria1 from './assets/img/gal1.jpg'
import galeria2 from './assets/img/gal2.jpg'
import galeria3 from './assets/img/gal3.jpg'
import galeria4 from './assets/img/gal4.jpg'
import cabana2 from './assets/img/cabana2.jpg';
import galeria6 from './assets/img/gal6.jpg'
import galeria7 from './assets/img/cabana3.jpg'
import galeria8 from './assets/img/cabana4.jpg'
import galeria9 from './assets/img/cabana5.jpg'
import galeria10 from './assets/img/nat3.jpg'
import galeria11 from './assets/img/nat4.jpg'
import galeria12 from './assets/img/nat5.jpg'
import cabanas from './assets/img/cabana1.jpg'
import cabanas6 from './assets/img/cabana6.jpg'

function NavBar() {
  return (
    <nav className='nav-class'>
      <ul className='lista-nav'>
        <li><a href='#inicio'>Inicio</a></li>
        <li><a href='#cabanas'>Cabañas</a></li>
        <li><a href='#ubicacion'>Ubicación</a></li>
        <li><a href='#contacto'>Contactanos</a></li>
      </ul>
    </nav>
  );
}

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




function Parrafo() {
  return (
    <div className='parrafo'>
      <div className="imagen-contenedor">
        <img src={parrafo} alt="parrafo" className="banner-img" />
      </div>
      <p>
      Descubre un oasis de tranquilidad
       y diversión en Cabañas Jardines del Tatamá. 
       Relájate en nuestras acogedoras cabañas mientras 
       disfrutas de actividades al aire libre, entretenimiento
        en nuestro salón de juegos y deliciosos platillos en
         nuestro restaurante. Ya sea para una escapada corta o 
         una estadía prolongada, te ofrecemos el lugar perfecto
        para crear recuerdos
       inolvidables en un entorno natural impresionante.
      </p>
    </div>
  );
}



function ImageGallery() {

  return (
    <section className="image-gallery">
      <h2>Nuestro espacio</h2>
      <div className="images">
        <img src={galeria1} alt="parrafo" className="banner-img" />
        <img src={galeria12} alt="parrafo" className="banner-img" />
        <img src={galeria2} alt="parrafo" className="banner-img" />
        <img src={galeria10} alt="parrafo" className="banner-img" />
        <img src={galeria3} alt="parrafo" className="banner-img" />
        <img src={galeria11} alt="parrafo" className="banner-img" />
        <img src={galeria6} alt="parrafo" className="banner-img" />
        <img src={galeria4} alt="parrafo" className="banner-img" />
      </div>
    </section>
  );
}

function CabinCard() {
  return (
    <div>
      <h2>Nuestras cabañas</h2>
      <div className="cabin-card-container">
        <div className="cabin-card">
          <h3>Cabaña Amaraya</h3>
          <img src={cabanas} alt="Cabañas" />
          <p>DESCRIPCIÓN</p>
          <a href="#" className="more-info-button">Ver Más</a>
        </div>

        <div className="cabin-card">
          <h3>Cabaña El Recreo</h3>
          <img src={cabana2} alt="Cabañas" />
          <p>DESCRIPCIÓN</p>
          <a href="#" className="more-info-button">Ver Más</a>
        </div>

        <div className="cabin-card">
          <h3>Cabaña La Loma</h3>
          <img src={galeria7} alt="Cabañas" />
          <p>DESCRIPCIÓN</p>
          <a href="#" className="more-info-button">Ver Más</a>
        </div>

        <div className="cabin-card">
          <h3>Cabaña Pino</h3>
          <img src={galeria8} alt="Cabañas" />
          <p>DESCRIPCIÓN</p>
          <a href="#" className="more-info-button">Ver Más</a>
        </div>

        <div className="cabin-card">
          <h3>Cabaña Familiar 1</h3>
          <img src={galeria9} alt="Cabañas" />
          <p>DESCRIPCIÓN</p>
          <a href="#" className="more-info-button">Ver Más</a>
        </div>

        <div className="cabin-card">
          <h3>Cabaña Familiar 2</h3>
          <img src={cabanas6} alt="Cabañas" />
          <p>DESCRIPCIÓN</p>
          <a href="#" className="more-info-button">Ver Más</a>
        </div>
      </div>
    </div>
  );
}




function Map() {
  return (
    <section id="ubicacion" className="map-section">
      <h2>Ubicación</h2>
      <iframe 
        title="Ubicación de Cabañas Jardines del Tatamá"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1274.0181527253394!2d-76.03961!3d5.2133138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e479545a43f81d9%3A0x1da5bdbb0523ee30!2sJardines%20del%20Tatam%C3%A1!5e1!3m2!1ses!2sco!4v1633020289465!5m2!1ses!2sco" 
        width="600" 
        height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy">
      </iframe>
    </section>
  );
}


function Footer() {
  return (
    <footer id="contacto" className="App-footer">
      <h2>Información de Contacto</h2>
      <p>Cabañas Jardines del Tatamá</p>
      <p>Dirección: [Dirección específica]</p>
      <p>Teléfono: [Número de teléfono]</p>
      <p>Email: [Correo electrónico]</p>
      <a 
        href="https://wa.me/3122587675" 
        className="reserve-button"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Reservar
      </a>
    </footer>
  );
}

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

