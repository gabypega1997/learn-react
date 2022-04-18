import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// momentan nu ai nimic de facut aici, aici se adauga pagina virtuala creata de react la elementul "root" din pagina HTML

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

