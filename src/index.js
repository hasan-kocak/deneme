import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import "core-js/stable";
import "regenerator-runtime/runtime";

// YENİ EKLENEN SATIRLAR: Tarayıcının varsayılan kaydırma davranışını devre dışı bırakır.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);