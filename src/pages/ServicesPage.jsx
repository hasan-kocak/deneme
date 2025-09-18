import React from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
    return (
        <div className="page-wrapper">
            {/* Services bileşenine grid olarak görünmesi için prop gönderiyoruz */}
            <Services displayAsGrid={true} />
        </div>
    );
};

export default ServicesPage;