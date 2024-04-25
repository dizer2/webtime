import React, { useState, useEffect } from 'react';
import "./style/localisation-field.css";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

function LocalisationField({ gradient, setHideLoader }) {
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
    // Преобразуем en-US в en
    const langToSet = lang === 'en-US' ? 'en' : lang;
    // Получаем текущий путь без языкового префикса
    const newPath = pathname.replace(`/${currentLanguage}`, '');
    // Формируем новый путь с новым языковым префиксом
    const newFullPath = `/${langToSet}${newPath}`;
    setCurrentLanguage(langToSet); // Устанавливаем новый язык
    changeLanguage(langToSet); // Меняем язык в i18next
    localStorage.setItem("lastVisitedPath", newFullPath); // Сохраняем новый адрес
    navigate(newFullPath); // Обновляем путь
  
    setHideLoader(false);
    document.body.classList.add("_body-hidden");
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
