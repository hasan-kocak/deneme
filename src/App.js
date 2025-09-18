import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// DEĞİŞİKLİK: Header ve Footer gibi temel yapıları geri getirdik.
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTop';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';

// DEĞİŞİKLİK: Gerçek sayfalar yerine basit test bileşenleri kullanacağız
const MinimalHomePage = () => (
  <div className="page-wrapper">
    <div className="container" style={{ color: 'white', minHeight: '50vh' }}>
      <h1>Anasayfa Çalışıyor</h1>
      <p>Eğer bunu görüyorsanız, Router ve Header/Footer sorunsuz yüklenmiştir.</p>
      <p>Şimdi bir sonraki adıma geçebilirsiniz.</p>
      <br/>
      <Link to="/hakkimizda" style={{ color: 'var(--accent-gold)' }}>Hakkımızda Sayfasını Test Et</Link>
    </div>
  </div>
);

const MinimalAboutPage = () => (
  <div className="page-wrapper">
    <div className="container" style={{ color: 'white', minHeight: '50vh' }}>
      <h1>Hakkımızda Sayfası Çalışıyor</h1>
      <p>Sayfa geçişleri de sorunsuz.</p>
    </div>
  </div>
);


function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <Header />
      <main>
        {/* DEĞİŞİKLİK: Gerçek sayfalar yerine test sayfalarını kullanıyoruz */}
        <Routes>
          <Route path="/" element={<MinimalHomePage />} />
          {/* Diğer linklerin de kırılmaması için geçici olarak yönlendirmeleri ayarlıyoruz */}
          <Route path="/hakkimizda" element={<MinimalAboutPage />} />
          <Route path="/hizmetlerimiz" element={<MinimalHomePage />} />
          <Route path="/ekibimiz" element={<MinimalHomePage />} />
          <Route path="/iletisim" element={<MinimalHomePage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;