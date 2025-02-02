import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const detectLanguage = () => {
    const userLang = navigator.language || navigator.userLanguage;
    const supportedLanguages = ['en', 'ar', 'it'];

    if (supportedLanguages.includes(userLang.substring(0, 2))) {
      return userLang.substring(0, 2);
    } else {
      return 'en';
    }
  };

  useEffect(() => {
    const defaultLang = detectLanguage();
    i18n.changeLanguage(defaultLang);
    document.body.dir = defaultLang === 'ar' ? 'rtl' : 'ltr';
  }, [i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <div className="language-select" onClick={toggleDropdown}>
        <span>
          {i18n.language === 'en'
            ? 'English'
            : i18n.language === 'ar'
            ? 'العربية'
            : i18n.language === 'it'
            ? 'Italiano'
            : 'language'}
        </span>
        <span className="arrow">▼</span>
      </div>
      {isOpen && (
        <div className="language-dropdown">
          <div
            className="language-option"
            onClick={() => handleLanguageChange('ar')}
          >
            العربية
          </div>
          <div
            className="language-option"
            onClick={() => handleLanguageChange('en')}
          >
            English
          </div>
          <div
            className="language-option"
            onClick={() => handleLanguageChange('it')}
          >
            Italiano
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
