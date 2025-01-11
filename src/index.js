import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Creamos el root para la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación dentro de React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
