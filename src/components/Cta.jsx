import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const Cta = () => {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section className={`cta fade-in ${inView ? 'visible' : ''}`} ref={ref}>
            <div className="container">
                <div className="cta-content">
                    <h2>{t('cta.title')}</h2>
                    <p>{t('cta.description')}</p>
                    <Link to="/iletisim" className="btn btn-gold">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        {t('cta.button')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cta;