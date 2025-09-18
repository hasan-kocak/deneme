import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Butonlar için basit stil
  const buttonStyle = {
    background: 'transparent',
    border: '1px solid var(--accent-gold)',
    color: 'var(--accent-gold)',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
    fontWeight: '600'
  };

  const activeButtonStyle = {
    ...buttonStyle,
    background: 'var(--accent-gold)',
    color: 'var(--primary-dark)'
  };

  return (
    <div className="language-switcher">
      <button 
        style={i18n.language === 'tr' ? activeButtonStyle : buttonStyle} 
        onClick={() => changeLanguage('tr')}
      >
        TR
      </button>
      <button 
        style={i18n.language === 'en' ? activeButtonStyle : buttonStyle} 
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;