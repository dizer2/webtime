import React, { useEffect, useState } from 'react';
import "./style/localisation-field.css";
import { useTranslation } from 'react-i18next';

function LocalisationField({ gradient }) {
  const { t, i18n } = useTranslation();

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

  // const setByDefaultLang = () => {
  //   window.location.href = `/${currentLanguage}`;
  //   console.log(currentLanguage)
  // }

  // let lang = (window.location.href).lastIndexOf("/")
  // console.log((window.location.href).toString().slice(lang, -2));



  // let fullPath = (window.location.href).lastIndexOf("/");
  // let fullPath = window.location.href;
  // let basePath = fullPath.slice(-3);
  // console.log(basePath)


  let oldLang = currentLanguage;
  // console.log(oldLang)

  const handleLangChange = (lang) => {
    let isPathWithoutLang = true;
    console.log(lang)

    let path = window.location.href;
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

      window.location.href = path.replace(oldLang, lang);

      // let pathWitoutLang = path.substring(0, lastSlash);
      // console.log("PATH: ", pathWitoutLang);  
      // window.location.href = `${pathWitoutLang}/${lang}`;
    } else if(isPathWithoutLang) {
      setCurrentLanguage(lang);
      changeLanguage(lang);
      localStorage.setItem("i18nextLng", lang);

      window.location.href = path.replace(oldLang, lang);


      // window.location.href = `${path}${lang}`;
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
