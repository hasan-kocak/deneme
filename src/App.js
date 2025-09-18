import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// DEĞİŞİKLİK: Header bileşenini geri import ediyoruz.
import Header from './components/Header';

// Test bileşenleri aynı kalıyor.
const MinimalHomePage = () => (
  <div className="page-wrapper">
    <div className="container" style={{ color: 'white', minHeight: '50vh' }}>
      <h1>Header Testi</h1>
      <p>Eğer bu sayfa mavi ekrana düşerse, sorun kesin olarak Header bileşenindedir.</p>
      <br/>
      <Link to="/hakkimizda" style={{ color: 'var(--accent-gold)', fontSize: '20px' }}>Hakkımızda Sayfasını Test Etmek İçin Tıkla</Link>
    </div>
  </div>
);

const MinimalAboutPage = () => (
  <div className="page-wrapper">
    <div className="container" style={{ color: 'white', minHeight: '50vh' }}>
      <h1>Hakkımızda Sayfası Çalışıyor</h1>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      {/* DEĞİŞİKLİK: Header bileşenini geri ekledik. */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MinimalHomePage />} />
          <Route path="/hakkimizda" element={<MinimalAboutPage />} />
        </Routes>
      </main>
      {/* Footer ve diğerleri hala dışarıda */}
    </BrowserRouter>
  );
}

export default App;