import React, { useState, useEffect } from 'react';
import "./style/localisation-field.css";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

function LocalisationField({ gradient, setHideLoader, isServicesPage = false }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = ['cz', 'en', 'ua'];
  const defaultLanguage = 'cz';
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    return savedLanguage || defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem("i18nextLng", currentLanguage);
  }, [currentLanguage]);

  const handleLangChange = (lang) => {
    const langToSet = lang === 'en-US' ? 'en' : lang;
    const newPath = pathname.replace(`/${currentLanguage}`, `/${langToSet}`);
    setCurrentLanguage(langToSet);
    changeLanguage(langToSet); 
    // localStorage.setItem("lastVisitedPath", newPath); // Сохраняем новый адрес
    let path = `/${lang}`

    if(isServicesPage) {
      navigate(newPath);
    } else {
      navigate(path);
    }
    console.log(window.location.href, "LANG TO SET:", langToSet, "NEW PATH:", newPath)
  
    setHideLoader(false);
    document.body.classList.add("_body-hidden"); 
  };
  const remainingLanguages = languages.filter(lang => lang !== currentLanguage);


  const styles = {
    text: {
      background: gradient,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    line: { background: gradient }
  }


  return (
    <div className='localisation-field'>
      <p className='localisation-field__language' onClick={() => { handleLangChange(remainingLanguages[0]) }} style={styles.text}>{remainingLanguages[0].toUpperCase()}</p>
      <div className="localisation-field__line" style={styles.line}></div>
      <p className='localisation-field__language' onClick={() => { handleLangChange(remainingLanguages[1]) }} style={styles.text}>{remainingLanguages[1].toUpperCase()}</p>
    </div>
  );
}

export default LocalisationField;