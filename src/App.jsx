import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./components/main/style.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Pages from './Pages/Pages.jsx';


function App() {
  const { t, i18n } = useTranslation();
  const [title, setTitle] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = localStorage.getItem('i18nextLng') || 'cz';


  useEffect(() => {
    setTitle(t("homePage.main.title"));
  }, [t, i18n]);

  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>

      <Pages currentLang={currentLang}/>
    </div>
  );
}

export default App;
