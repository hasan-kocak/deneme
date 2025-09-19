import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// 1. ADIM: Gerekli tüm bileşenleri ve ikonları import ediyoruz
import LanguageSwitcher from './LanguageSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa'; // react-icons'tan ikonlar

const Header = () => {
    const { t } = useTranslation();
    const location = useLocation();

    // 2. ADIM: Mobil menünün ve scroll durumunun state'lerini geri getiriyoruz
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // 3. ADIM: Sayfa kaydırma efektini yöneten useEffect'i geri getiriyoruz
    useEffect(() => {
        const isHomePage = location.pathname === '/';

        const handleScroll = () => {
            if (isHomePage) {
                setScrolled(window.scrollY > 50);
            }
        };

        if (!isHomePage) {
            setScrolled(true);
        } else {
            handleScroll(); // Sayfa yüklendiğinde de kontrol et
        }

        // Sadece anasayfada scroll dinleyicisi ekle
        if (isHomePage) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (isHomePage) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [location.pathname]);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    // 4. ADIM: Link metinlerini t() fonksiyonu ile dinamik hale getiriyoruz
    const NavLinks = () => (
        <ul className="nav-menu">
            <li><NavLink to="/" onClick={closeMobileMenu}>{t('header.home')}</NavLink></li>
            <li><NavLink to="/hakkimizda" onClick={closeMobileMenu}>{t('header.about')}</NavLink></li>
            <li><NavLink to="/hizmetlerimiz" onClick={closeMobileMenu}>{t('header.services')}</NavLink></li>
            <li><NavLink to="/ekibimiz" onClick={closeMobileMenu}>{t('header.team')}</NavLink></li>
            <li><NavLink to="/iletisim" onClick={closeMobileMenu}>{t('header.contact')}</NavLink></li>
        </ul>
    );

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
                <div className="container">
                    <div className="header-content">
                        <Link to="/" className="logo" onClick={closeMobileMenu}>{t('header.logo')}</Link>
                        
                        <nav className="desktop-nav">
                            <NavLinks />
                        </nav>
                        
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* 5. ADIM: Dil değiştiriciyi ve mobil menü butonunu JSX'e geri ekliyoruz */}
                            <LanguageSwitcher />
                            <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <button className="mobile-menu-close" onClick={closeMobileMenu}>
                    <FaTimes />
                </button>
                <nav>
                    <NavLinks />
                </nav>
                <div style={{ marginTop: '30px' }}>
                    <LanguageSwitcher />
                </div>
            </div>
        </>
    );
};

export default Header;