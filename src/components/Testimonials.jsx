import React from 'react';
// Swiper.js gibi bir slider kütüphanesi kullanılabilir
// Bu örnekte basit bir yapı gösterilmiştir.
const Testimonials = () => {
    const testimonials = [
        {
            quote: "Hukuki sürecimin her aşamasında gösterdikleri profesyonellik ve ilgi sayesinde davamı kazandım. Kendilerine minnettarım.",
            author: "Ali V.",
            company: "CEO, Teknoloji A.Ş."
        },
        // ... diğer yorumlar
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">Müvekkillerimiz Ne Diyor?</h2>
                <div className="testimonial-card">
                    <p className="quote">"{testimonials[0].quote}"</p>
                    <p className="author">- {testimonials[0].author}, {testimonials[0].company}</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;