import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Bileşenler
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTop'; // ScrollToTop'u yeniden isimlendirdik
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';

// Sayfalar
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage'; // Yeni Ekip Sayfası

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <Header />
      <main>
        {/* Sayfa geçiş animasyonları için bir sarmalayıcı eklenebilir */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/hizmetlerimiz" element={<ServicesPage />} />
          <Route path="/ekibimiz" element={<TeamPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;