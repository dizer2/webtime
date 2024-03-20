import React, { useEffect, useState } from 'react';
import "./style/localisation-field.css";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

function LocalisationField({ gradient }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

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
  const defaultLanguage = 'cz'; // Установите язык по умолчанию
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("i18nextLng") || defaultLanguage);

  let oldLang = currentLanguage;

  const handleLangChange = (lang) => {
    let isPathWithoutLang = true;
    console.log(lang)

    let path =  window.location.pathname
    let last = path.slice(-3);
    let lastSlash = path.lastIndexOf("/");

    for(let i = 0; i < languages.length + 1; i++) {
      if(`/${languages[i]}` == last) {
        isPathWithoutLang = false;
        console.log("Use now lang:", last);
      }
    }


    if(!isPathWithoutLang) {
      setCurrentLanguage(lang);
      changeLanguage(lang);
      localStorage.setItem("i18nextLng", lang);

      window.location.pathname = path.replace(oldLang, lang);
      console.log("PATHNAME: ", window.location.pathname);

      // navigate(path.replace(oldLang, lang));
    } else if(isPathWithoutLang) {
      setCurrentLanguage(lang);
      changeLanguage(lang);
      localStorage.setItem("i18nextLng", lang);

      window.location.pathname = path.replace(oldLang, lang);
      console.log("PATHNAME: ", window.location.pathname);
      // navigate(path.replace(oldLang, lang))
    }
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
