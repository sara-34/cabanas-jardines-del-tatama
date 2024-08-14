import React from 'react';
import './App.css';

function Session({ title, description, whatsappLink }) {
  return (
    <div className="Session">
     
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        Chat en WhatsApp
      </a>
    </div>
  );
}

function App() {
  const sessions = [
    {
      title: 'Sesión 1',
      description: 'Descripción de la sesión 1.',
      whatsappLink: 'https://wa.me/3122587675'
    },
    
    // Puedes añadir más sesiones aquí
  ];

  return (
    <div className="App">
      <nav className='nav-class'>
        <div className='lista'>
          <div>
            <ul className='lista-nav'>
              <li><a href='#'>Inicio</a></li>
              <li><a href='#'>Cabañas</a></li>
              <li><a href='#'>Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>


      <header className="App-header">
  <h1>CABAÑAS JARDINES DEL TATAMA</h1>
  <div className="banner">
  <img
  src="./imagenes/Imagen de WhatsApp 2024-08-12 a las 22.39.35_d5a35b4e.jpg"
  
/>

  </div>
</header>









      <footer className="App-header">
        <h1>INFORMACION</h1>
        {sessions.map((session, index) => (
          <Session
            whatsappLink={session.whatsappLink}
          />
        ))}
      </footer>
    </div>
  );
}

export default App;

