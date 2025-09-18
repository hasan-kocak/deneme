import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3>{t('footer.about_title')}</h3>
                        <p>{t('footer.about_text')}</p>
                    </div>
                    <div className="footer-section">
                        <h3>{t('footer.links_title')}</h3>
                        <p><Link to="/">{t('header.home')}</Link></p>
                        <p><Link to="/hakkimizda">{t('header.about')}</Link></p>
                        <p><Link to="/hizmetlerimiz">{t('header.services')}</Link></p>
                        <p><Link to="/ekibimiz">{t('header.team')}</Link></p>
                        <p><Link to="/iletisim">{t('header.contact')}</Link></p>
                    </div>
                    <div className="footer-section">
                        <h3>{t('footer.contact_title')}</h3>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Cumhuriyet Mah. Hukuk Sk. No: 15, Şişli / İstanbul</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} /> +90 212 555 0123</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> info@hukukburosu.com</p>
                        <div className="footer-social-links">
                            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" aria-label="X (Twitter)"><FontAwesomeIcon icon={faXTwitter} /></a>
                            <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} {t('header.logo')}. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;