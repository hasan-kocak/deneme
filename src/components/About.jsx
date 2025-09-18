import React from 'react';
import { Link } from 'react-router-dom'; // DEĞİŞİKLİK: Tekrar import edildi
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // DEĞİŞİKLİK: Tekrar import edildi
import { faUsers } from '@fortawesome/free-solid-svg-icons'; // DEĞİŞİKLİK: Ekip ikonu import edildi
import { useInView } from 'react-intersection-observer';
import aboutImage from '../assets/images/pp.png';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section className={`about ${inView ? 'visible' : ''}`} id="about" ref={ref}>
            <div className="container">
                <div className="about-grid">
                    <div className="about-text">
                        <h2>{t('about.title')}</h2>
                        <p>{t('about.p1')}</p>
                        <p>{t('about.p2')}</p>

                        {/* DEĞİŞİKLİK: Ekibimiz butonu buraya eklendi */}
                        <Link to="/ekibimiz" className="btn btn-primary" style={{ marginTop: '20px' }}>
                            <FontAwesomeIcon icon={faUsers} style={{ marginRight: '8px' }} />
                            {t('about.team_button')}
                        </Link>
                    </div>
                    <div className="about-image-wrapper">
                        <img src={aboutImage} alt={t('header.logo')} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;