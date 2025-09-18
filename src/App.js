import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// DEĞİŞİKLİK: Header, Footer ve diğer özel bileşenlerin import'ları kaldırıldı.

// Test bileşenleri aynı kalıyor.
const MinimalHomePage = () => (
  <div className="page-wrapper">
    <div className="container" style={{ color: 'white', minHeight: '50vh', paddingTop: '50px' }}>
      <h1>Router Testi Başarılı</h1>
      <p>Eğer bunu görüyorsanız, react-router-dom kütüphanesi tek başına çalışıyor demektir.</p>
      <p>Sorun büyük ihtimalle Header veya Footer bileşeninde.</p>
      <br/>
      <Link to="/hakkimizda" style={{ color: 'var(--accent-gold)', fontSize: '20px' }}>Hakkımızda Sayfasını Test Etmek İçin Tıkla</Link>
    </div>
  </div>
);

const MinimalAboutPage = () => (
  <div className="page-wrapper">
    <div className="container" style={{ color: 'white', minHeight: '50vh', paddingTop: '50px' }}>
      <h1>Hakkımızda Sayfası Çalışıyor</h1>
      <p>Sayfa geçişleri de sorunsuz.</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      {/* DEĞİŞİKLİK: Header, Footer ve Scroll butonları kaldırıldı. */}
      <main>
        <Routes>
          <Route path="/" element={<MinimalHomePage />} />
          <Route path="/hakkimizda" element={<MinimalAboutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;