import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Index from './Index';
import ServicesPage from '../components/ServicesPage/ServicesPage';
import { useTranslation } from 'react-i18next';
import PageNotFound from '../components/PageNotFound/PageNotFound';

const Pages = () => {
  const { i18n } = useTranslation();
  const [hideLoader, setHideLoader] = useState(false);
  const [isUserOnHomePage, setIsUserOnHomePage] = useState(true);
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('i18nextLng'));

  useEffect(() => {
    const changeLanguageBasedOnRoute = () => {
      const path = window.location.pathname;
      let language = currentLang;

      if (path.startsWith("/cz")) {
        language = "cz";
      } else if (path.startsWith("/ua")) {
        language = "ua";
      } else if (path.startsWith("/en")) {
        language = "en";
      }

      i18n.changeLanguage(language);
    };

    changeLanguageBasedOnRoute();
  }, [i18n]);

  return (
    <div>
      <Router>
        <Routes>
          {/* Default path */}
          <Route path="/" element={<Navigate to={`/${currentLang}`} />} />
          
          {/* Default path for languages*/}
          <Route path="/cz" element={<Index hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path="/ua" element={<Index hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path="/en" element={<Index hideLoader={hideLoader} setHideLoader={setHideLoader} />} />

          <Route path={`*`} element={<PageNotFound/>} />

          {/* Service page */}
          <Route path={`${currentLang}/web-development/`} element={<ServicesPage currentPage="web-development" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path={`${currentLang}/design/`} element={<ServicesPage  currentPage="design" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path={`${currentLang}/poster-billboards/`} element={<ServicesPage currentPage="poster-billboards" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path={`${currentLang}/mobile-design/`} element={<ServicesPage currentPage="mobile-design" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path={`${currentLang}/business-card-leaflets/`} element={<ServicesPage currentPage="business-card-leaflets" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Pages;
