import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation, Trans } from 'react-i18next'; // DEĞİŞİKLİK
import LanguageSwitcher from './LanguageSwitcher'; // DEĞİŞİKLİK

const Header = () => {
    // ... mevcut state ve effect'leriniz aynı kalacak
    const { t } = useTranslation(); // DEĞİŞİKLİK

    // Mevcut state ve effect'leriniz...
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (isHomePage) {
                setScrolled(window.scrollY > 50);
            }
        };
        if (!isHomePage) {
            setScrolled(true);
        } else {
            handleScroll();
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);


    const closeMobileMenu = () => setMobileMenuOpen(false);

    const NavLinks = () => (
        <ul className="nav-menu">
            <li><NavLink to="/" onClick={closeMobileMenu}>{t('header.home')}</NavLink></li>
            <li><NavLink to="/hakkimizda" onClick={closeMobileMenu}>{t('header.about')}</NavLink></li>
            <li><NavLink to="/hizmetlerimiz" onClick={closeMobileMenu}>{t('header.services')}</NavLink></li>
            <li><NavLink to="/ekibimiz" onClick={closeMobileMenu}>{t('header.team')}</NavLink></li>
            <li><NavLink to="/iletisim" onClick={closeMobileMenu} className="nav-contact-button">{t('header.contact')}</NavLink></li>
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
                        {/* DEĞİŞİKLİK: Dil değiştirici masaüstüne eklendi */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <LanguageSwitcher />
                            <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <button className="mobile-menu-close" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <nav>
                    <NavLinks />
                </nav>
                {/* DEĞİŞİKLİK: Dil değiştirici mobile eklendi */}
                <div style={{ marginTop: '30px' }}><LanguageSwitcher /></div>
            </div>
        </>
    );
};

export default Header;