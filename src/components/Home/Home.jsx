import React, { Component, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};


  return (
	<section className='home'>
      <h2>{t('title')}</h2>

      <button onClick={() => changeLanguage('ua')}>UA</button> 
      <button onClick={() => changeLanguage('cz')}>CZ</button> 
	</section>
  )
}

export default Home;
