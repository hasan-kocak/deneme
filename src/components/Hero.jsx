import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next'; // DEĞİŞİKLİK

const Hero = () => {
    const { t } = useTranslation(); // DEĞİŞİKLİK

    return (
        <section className="hero" id="home">
            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="highlight" style={{ marginBottom: '20px', fontSize: '1.1rem' }}>{t('hero.subtitle')}</p>
                    <h1>
                        <Trans i18nKey="hero.title">
                            Adaletin <span className="highlight">Modern</span> Yüzü.
                        </Trans>
                    </h1>
                    <p>{t('hero.description')}</p>
                    <div className="hero-buttons">
                        <Link to="/hizmetlerimiz" className="btn btn-primary">{t('hero.services_button')}</Link>
                        <Link to="/iletisim" className="btn">{t('hero.appointment_button')}</Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;