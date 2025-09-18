import React from 'react';
import Hero from '../components/Hero';
import AboutPreview from '../components/About'; // Anasayfa için özet versiyon
import Services from '../components/Services';
// DEĞİŞİKLİK: Testimonials bileşeni artık kullanılmadığı için import satırı kaldırıldı.
import Cta from '../components/Cta';

const HomePage = () => {
    return (
        <>
            <Hero />
            <AboutPreview />
            <Services />
            {/* DEĞİŞİKLİK: <Testimonials /> satırı buradan kaldırıldı. */}
            <Cta />
        </>
    );
};

export default HomePage;