import React from 'react';
import './FooterButtons.css';

// Importa los iconos que necesites o usa SVG directamente
const HomeIcon = () => (
  <svg className="nav-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const SettingsIcon = () => (
  <svg className="nav-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

// Ahora el componente recibe activeTab y onTabChange como props
const FooterButtons = ({ activeTab, onTabChange }) => {
  // Manejador para cambiar el tab y notificar al componente padre
  const handleTabChange = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="bottom-nav">
      <div className="nav-buttons">
        <button
          className={`nav-button ${activeTab === 'cisternas' ? 'active' : ''}`}
          onClick={() => handleTabChange('cisternas')}
        >
          <HomeIcon />
          <span className="nav-button-label">Cisternas</span>
        </button>

        <button
          className={`nav-button ${activeTab === 'osmosis' ? 'active' : ''}`}
          onClick={() => handleTabChange('osmosis')}
        >
          <SettingsIcon />
          <span className="nav-button-label">Osmosis</span>
        </button>
      </div>
    </div>
  );
};

// Propiedades por defecto para el componente
FooterButtons.defaultProps = {
  activeTab: 'cisternas',
  onTabChange: () => { }
};

export default FooterButtons;
