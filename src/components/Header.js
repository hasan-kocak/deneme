import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// DEĞİŞİKLİK: useTranslation ve LanguageSwitcher kaldırıldı.

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (isHomePage) { setScrolled(window.scrollY > 50); }
        };
        if (!isHomePage) { setScrolled(true); } else { handleScroll(); }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    // DEĞİŞİKLİK: t('...') fonksiyonları yerine metinler doğrudan yazıldı.
    const NavLinks = () => (
        <ul className="nav-menu">
            <li><NavLink to="/" onClick={closeMobileMenu}>Anasayfa</NavLink></li>
            <li><NavLink to="/hakkimizda" onClick={closeMobileMenu}>Hakkımızda</NavLink></li>
            <li><NavLink to="/hizmetlerimiz" onClick={closeMobileMenu}>Hizmetlerimiz</NavLink></li>
            <li><NavLink to="/ekibimiz" onClick={closeMobileMenu}>Ekibimiz</NavLink></li>
            <li><NavLink to="/iletisim" onClick={closeMobileMenu} className="nav-contact-button">İletişim</NavLink></li>
        </ul>
    );

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
                <div className="container">
                    <div className="header-content">
                        <Link to="/" className="logo" onClick={closeMobileMenu}>Hukuk Bürosu</Link>
                        <nav className="desktop-nav">
                            <NavLinks />
                        </nav>
                        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
                        </button>
                    </div>
                </div>
            </header>
            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <button className="mobile-menu-close" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <nav> <NavLinks /> </nav>
            </div>
        </>
    );
};

export default Header;