import React, { useState } from 'react'
import "./style/localisation-field.css"
import { useTranslation } from 'react-i18next';

function LocalisationField({gradient}) {
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

  // onClick={() => changeLanguage('en')}

  // const languages = ["UA", "EN", "CZ"];

  // let currentLang = 'cz';

  // const [currentLang, setCurrentLang] = useState('cz');
  // const [leftLang, setLeftLang] = useState('ua');
  // const [rightLang, setRightLang] = useState('en');

  const languages = ['en', 'ua', 'cz'];
  const [currentLanguage, setCurrentLanguage] = useState('cz');
  
  // Функция для изменения текущего языка
  const handleLangChange = (lang) => {
      setCurrentLanguage(lang);
      changeLanguage(lang);
  };
  
  // Определяем оставшиеся два языка без текущего
  const remainingLanguages = languages.filter(lang => lang !== currentLanguage);
  
  return (
      <div className='localisation-field'>
          <p className='localisation-field__language' onClick={() => { handleLangChange(remainingLanguages[0]) }} style={styles.text}>{remainingLanguages[0].toUpperCase()}</p>
          <div className="localisation-field__line" style={styles.line}></div>
          <p className='localisation-field__language' onClick={() => { handleLangChange(remainingLanguages[1]) }} style={styles.text}>{remainingLanguages[1].toUpperCase()}</p>
      </div>
  );
}

export default LocalisationField