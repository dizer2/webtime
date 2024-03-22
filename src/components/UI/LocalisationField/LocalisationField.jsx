import React, { useState, useEffect } from 'react';
import "./style/localisation-field.css";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

function LocalisationField({ gradient }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const styles = {
    text: {
      background: gradient,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    line: { background: gradient }
  }

  const languages = ['en', 'ua', 'cz'];
  const defaultLanguage = 'cz';
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    return savedLanguage || defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem("i18nextLng", currentLanguage);
  }, [currentLanguage]);

  const handleLangChange = (lang) => {
    const newPath = pathname.replace(`/${currentLanguage}`, `/${lang}`);
    setCurrentLanguage(lang);
    changeLanguage(lang);
    localStorage.setItem("lastVisitedPath", newPath); // Сохраняем новый адрес
    navigate(newPath);
  };
  const remainingLanguages = languages.filter(lang => lang !== currentLanguage);

  return (
    <div className='localisation-field'>
      <p className='localisation-field__language' onClick={() => { handleLangChange(remainingLanguages[0]) }} style={styles.text}>{remainingLanguages[0].toUpperCase()}</p>
      <div className="localisation-field__line" style={styles.line}></div>
      <p className='localisation-field__language' onClick={() => { handleLangChange(remainingLanguages[1]) }} style={styles.text}>{remainingLanguages[1].toUpperCase()}</p>
    </div>
  );
}

export default LocalisationField;
