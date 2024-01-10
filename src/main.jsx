import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// compute scale factor (decimal number) for Display component
// and set value of '--display-factor' CSS variable to this number
function resizeDisplay() {
  const displayFactor =
    window.innerWidth > 1196
      ? 1 // max scale factor of 1 for larger displays
      : window.innerWidth > 880
        ? (window.innerWidth - 383) / 816 // scale factor for medium display
        : (window.innerWidth - 64) / 816; // scale factor for small display

  document.documentElement.style.setProperty('--display-factor', displayFactor);
}

// set Display scale factor on app init and on window resize
window.addEventListener('resize', resizeDisplay);
resizeDisplay();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
