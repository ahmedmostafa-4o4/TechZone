import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown element

  // Function to detect the browser language or set default to 'en'
  const detectLanguage = () => {
    const userLang = navigator.language || navigator.userLanguage; // Get browser language
    const supportedLanguages = ['en', 'ar', 'it']; // Supported languages in the app

    // Check if the browser language is supported, else default to 'en'
    if (supportedLanguages.includes(userLang.substring(0, 2))) {
      return userLang.substring(0, 2); // Return the first two characters (e.g., 'en')
    } else {
      return 'en'; // Default to English if not sure
    }
  };

  useEffect(() => {
    const defaultLang = detectLanguage();
    i18n.changeLanguage(defaultLang); // Set the detected or default language
    document.body.dir = defaultLang === 'ar' ? 'rtl' : 'ltr'; // Adjust text direction
  }, [i18n]);

  // Function to close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if clicking outside
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    setIsOpen(false); // Close the dropdown after selecting a language
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
