import React, { useState } from 'react';
import FinancialDashboard from './components/FinancialDashboard';
import Login from './components/Login';

// Componente principal de la aplicación
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {isLoggedIn ? (
        // Renderizar el componente del TABLERO FINANCIERO si el usuario está logueado
        <FinancialDashboard darkMode={darkMode} setDarkMode={setDarkMode} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        // Renderizar el formulario de inicio de sesión si el usuario no está logueado
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
