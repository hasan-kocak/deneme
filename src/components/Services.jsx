import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faUsers, faPassport, faHandshake, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// İkonları bir haritada tutarak daha kolay erişim sağlayalım
const iconMap = {
    "Gayrimenkul Hukuku": faHome,
    "Real Estate Law": faHome,
    "Ticaret Hukuku": faBriefcase,
    "Commercial Law": faBriefcase,
    "Aile Hukuku": faUsers,
    "Family Law": faUsers,
    "Vatandaşlık Hukuku": faPassport,
    "Citizenship Law": faPassport,
    "İş Hukuku": faHandshake,
    "Labor Law": faHandshake,
    "Borçlar Hukuku": faBalanceScale,
    "Law of Obligations": faBalanceScale,
};

const AnimatedServiceCard = ({ icon, title, description }) => {
    return (
        <div className="service-card">
            <div className="service-icon"><FontAwesomeIcon icon={icon} /></div>
            <h3>{title}</h3><p>{description}</p>
        </div>
    );
};

const VisualServiceCard = ({ title, imageUrl }) => {
    return (<div className="simple-visual-card" style={{ backgroundImage: `url(${imageUrl})` }}><h3>{title}</h3></div>);
};

const Services = ({ displayAsGrid = false }) => {
    const { t } = useTranslation();
    const servicesData = t('services.cards', { returnObjects: true }) || [];

    const swiperRef = useRef(null);
    const timeoutRef = useRef(null);

    // Swiper kontrol fonksiyonları aynı kalabilir...
    const handleNextClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (swiperRef.current?.swiper) {
            const swiper = swiperRef.current.swiper;
            swiper.autoplay.stop();
            swiper.slideNext();
            setTimeout(() => { if (swiper && !swiper.destroyed) swiper.autoplay.start(); }, 1000);
        }
    };
    const handlePrevClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (swiperRef.current?.swiper) {
            const swiper = swiperRef.current.swiper;
            swiper.autoplay.stop();
            swiper.slidePrev();
            setTimeout(() => { if (swiper && !swiper.destroyed) swiper.autoplay.start(); }, 1000);
        }
    };
    useEffect(() => {
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }, []);

    if (displayAsGrid) {
        return (
            <section className="services" id="services">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('services.title')}</h2>
                        <p>{t('services.description')}</p>
                    </div>
                    <div className="services-grid">
                        {servicesData.map((service, index) => <AnimatedServiceCard key={index} icon={iconMap[service.title]} {...service} />)}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <h2>{t('services.title')}</h2>
                    <p>{t('services.description')}</p>
                </div>
                <div className="swiper-container-wrapper">
                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay]}
                        speed={3000}
                        autoplay={{ delay: 1, disableOnInteraction: false, pauseOnMouseEnter: false }}
                        loop={true}
                        allowTouchMove={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } }}
                        className="mySwiper continuous-swiper"
                    >
                        {servicesData.map((service, index) => (
                            <SwiperSlide key={index}>
                                <VisualServiceCard title={service.title} imageUrl={service.imageUrl} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-arrow swiper-arrow-prev" onClick={handlePrevClick}></div>
                    <div className="swiper-arrow swiper-arrow-next" onClick={handleNextClick}></div>
                </div>
            </div>
        </section>
    );
};

export default Services;