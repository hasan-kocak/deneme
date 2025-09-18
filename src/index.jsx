import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
// DEĞİŞİKLİK: 'react-dom/client' yerine 'react-dom' kullanacağız
import ReactDOM from 'react-dom'; 
import App from './App';
import './i18n';

// DEĞİŞİKLİK: Yeni createRoot API'si yerine eski, kararlı render metodu kullanılacak
const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);