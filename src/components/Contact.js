import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onBlur" });
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const onSubmit = (data) => {
        setIsSubmitting(true);
        console.log("Form data:", data);
        setTimeout(() => {
            alert('Your message has been sent successfully! We will get back to you shortly.');
            reset();
            setIsSubmitting(false);
        }, 2000);
    };

    const errorStyle = { color: 'red', fontSize: '13px', marginTop: '5px' };

    return (
        <section className={`contact fade-in ${inView ? 'visible' : ''}`} id="contact" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <h2>{t('contact_page.title')}</h2>
                    <p>{t('contact_page.description')}</p>
                </div>
                <div className="contact-grid">
                    <div className="contact-form">
                        <h3>{t('contact_page.form_title')}</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="name">{t('contact_page.name_label')}</label>
                                <input type="text" id="name" {...register("name", { required: t('contact_page.name_error') })} />
                                {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t('contact_page.email_label')}</label>
                                <input type="email" id="email" {...register("email", { required: t('contact_page.email_error_required'), pattern: { value: /^\S+@\S+$/i, message: t('contact_page.email_error_pattern') } })} />
                                {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">{t('contact_page.phone_label')}</label>
                                <input type="tel" inputMode="tel" id="phone" {...register("phone", { required: t('contact_page.phone_error_required'), pattern: { value: /^[0-9]{10,15}$/, message: t('contact_page.phone_error_pattern') } })} />
                                {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">{t('contact_page.subject_label')}</label>
                                <input type="text" id="subject" {...register("subject", { required: t('contact_page.subject_error') })} />
                                {errors.subject && <p style={errorStyle}>{errors.subject.message}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">{t('contact_page.message_label')}</label>
                                <textarea id="message" rows="5" {...register("message", { required: t('contact_page.message_error') })} ></textarea>
                                {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                {isSubmitting ? <FontAwesomeIcon icon={faSpinner} spin /> : <FontAwesomeIcon icon={faPaperPlane} />}
                                {isSubmitting ? ` ${t('contact_page.submit_button_sending')}` : ` ${t('contact_page.submit_button')}`}
                            </button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h3>{t('contact_page.info_title')}</h3>
                        <div className="contact-item"><div className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div><div className="info"><h4>{t('contact_page.address_title')}</h4><p>Cumhuriyet Mahallesi, Hukuk Sokak No: 15<br />Şişli / İstanbul</p></div></div>
                        <div className="contact-item"><div className="icon"><FontAwesomeIcon icon={faPhoneAlt} /></div><div className="info"><h4>{t('contact_page.phone_title')}</h4><p>+90 212 555 0123<br />+90 532 123 4567</p></div></div>
                        <div className="contact-item"><div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div><div className="info"><h4>{t('contact_page.email_title')}</h4><p>info@hukukburosu.com<br />randevu@hukukburosu.com</p></div></div>
                        <div className="contact-item"><div className="icon"><FontAwesomeIcon icon={faClock} /></div><div className="info"><h4>{t('contact_page.hours_title')}</h4><p>{t('contact_page.hours_p1')}<br />{t('contact_page.hours_p2')}</p></div></div>
                        <div className="footer-social-links" style={{ justifyContent: 'flex-start' }}><a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a><a href="#" aria-label="X (Twitter)"><FontAwesomeIcon icon={faXTwitter} /></a><a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a><a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;