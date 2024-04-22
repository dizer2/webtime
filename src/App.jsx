import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./components/main/style.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Pages from './Pages/Pages.jsx';

import appleTouchIcon from "./favicon/apple-touch-icon.png"
import favicon32x32 from "./favicon/favicon-32x32.png"
import favicon16x16 from "./favicon/favicon-16x16.png"
import webmanifest from "./favicon/site.webmanifest"
import safariPinnedTab from "./favicon/safari-pinned-tab.svg"


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
      {/* <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content="WebTime Studio - Creating Unique Websites with Versatile Frameworks and Unparalleled Experiences"/>
          <meta name="keywords" content="WebTime, Webové stránky, WebTime Studio, websites, web development, UX, UI, technology, Czech Republic"/>
          <meta name="author" content="WebTime Studio"/>
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}/>
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32}/>
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16}/>
          <link rel="manifest" href={webmanifest}/>
          <link rel="mask-icon" href={safariPinnedTab} color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#2b5797"/>
        </Helmet>
      </HelmetProvider> */}

      <Pages currentLang={currentLang}/>
    </div>
  );
}

export default App;
