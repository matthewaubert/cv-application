import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function resizeDisplay() {
  const displayFactor =
    window.innerWidth > 1196
      ? 1
      : window.innerWidth > 880
        ? (window.innerWidth - 383) / 816
        : (window.innerWidth - 64) / 816;

  document.documentElement.style.setProperty('--display-factor', displayFactor);
}

window.addEventListener('resize', resizeDisplay);
resizeDisplay();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
