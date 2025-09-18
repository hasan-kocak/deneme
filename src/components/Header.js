import React from 'react';
import { Link } from 'react-router-dom';

// DEĞİŞİKLİK: Bütün hook'lar (useState, useEffect, useLocation) ve NavLink kaldırıldı.
// Bu, bir Header'ın olabilecek en temel halidir.

const Header = () => {

    // Mobil menü için state yönetimi bile kaldırıldı. Butonlar şimdilik bir şey yapmayacak.
    const NavLinks = () => (
        <ul className="nav-menu">
            {/* DEĞİŞİKLİK: NavLink yerine basit Link kullanıldı */}
            <li><Link to="/">Anasayfa</Link></li>
            <li><Link to="/hakkimizda">Hakkımızda</Link></li>
            <li><Link to="/hizmetlerimiz">Hizmetlerimiz</Link></li>
            <li><Link to="/ekibimiz">Ekibimiz</Link></li>
            <li><Link to="/iletisim" className="nav-contact-button">İletişim</Link></li>
        </ul>
    );

    return (
        <>
            {/* DEĞİŞİKLİK: Header'a her zaman "scrolled" class'ı vererek arka planını garantiliyoruz. */}
            <header className="header scrolled" id="header">
                <div className="container">
                    <div className="header-content">
                        <Link to="/" className="logo">Hukuk Bürosu</Link>
                        <nav className="desktop-nav">
                            <NavLinks />
                        </nav>
                        {/* Mobil menü butonu şimdilik bir işlev görmeyecek */}
                        <button className="mobile-menu-toggle" style={{fontSize: '28px'}}>
                            ☰
                        </button>
                    </div>
                </div>
            </header>
            {/* Mobil menü div'i tamamen kaldırıldı */}
        </>
    );
};

export default Header;