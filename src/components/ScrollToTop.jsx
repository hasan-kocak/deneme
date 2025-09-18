import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'var(--primary-gradient)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: 1000,
                boxShadow: 'var(--shadow-medium)',
                fontSize: '20px'
            }}
            aria-label="Yukarı Çık"
        >
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
    );
};

export default ScrollToTop;