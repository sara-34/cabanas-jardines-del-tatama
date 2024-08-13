import React from 'react';
import './App.css';

function Session({ title, description, whatsappLink }) {
  return (
    <div className="Session">
      <h2>{title}</h2>
      <p>{description}</p>
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
      whatsappLink: 'https://wa.me/1234567890'
    },
    {
      title: 'Sesión 2',
      description: 'Descripción de la sesión 2.',
      whatsappLink: 'https://wa.me/0987654321'
    },
    // Puedes añadir más sesiones aquí
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mis Sesiones</h1>
        {sessions.map((session, index) => (
          <Session
            key={index}
            title={session.title}
            description={session.description}
            whatsappLink={session.whatsappLink}
          />
        ))}
      </header>
    </div>
  );
}

export default App;

