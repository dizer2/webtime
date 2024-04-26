// Pages.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, HashRouter } from 'react-router-dom';
import Index from './Index';
import ServicesPage from '../components/ServicesPage/ServicesPage';
import { useTranslation } from 'react-i18next';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Loader from '../components/UI/Loader/Loader';

const Pages = () => {
  const { i18n } = useTranslation();
  const [hideLoader, setHideLoader] = useState(false);
  
  const defaultLanguage = 'cz';
  const savedLanguage = localStorage.getItem('i18nextLng');
  const initialLanguage = savedLanguage ? savedLanguage : defaultLanguage;

  const [currentLang, setCurrentLang] = useState(initialLanguage);

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  useEffect(() => {
    const changeLanguageBasedOnRoute = () => {
      const langParam = window.location.pathname.split('/')[1]; 
      let language = currentLang;
  
      if (['cz', 'ua', 'en'].includes(langParam)) { 
        language = langParam;
      }
  
      i18n.changeLanguage(language);
      setCurrentLang(language);
    };
  
    changeLanguageBasedOnRoute();
  }, [currentLang, i18n]);
  


  return (
    <div>
      <Router>
        <Routes>
          {/* Default path */}
          <Route path="/" element={<Index currentPage="web-development" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          
          {/* Default path for languages */}
          <Route path="/:lang" element={<Index currentPage="web-development" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />


          {/* Service page */}
          <Route path="/:lang/web-development/" element={<ServicesPage currentPage="web-development" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path="/:lang/design/" element={<ServicesPage  currentPage="design" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path="/:lang/poster-billboards/" element={<ServicesPage currentPage="poster-billboards" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path="/:lang/mobile-design/" element={<ServicesPage currentPage="mobile-design" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path="/:lang/business-card-leaflets/" element={<ServicesPage currentPage="business-card-leaflets" hideLoader={hideLoader} setHideLoader={setHideLoader} />} /> 


          <Route path="/web-development/" element={<ServicesPage currentPage="web-development" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path="/design/" element={<ServicesPage  currentPage="design" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path="/poster-billboards/" element={<ServicesPage currentPage="poster-billboards" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path="/mobile-design/" element={<ServicesPage currentPage="mobile-design" hideLoader={hideLoader} setHideLoader={setHideLoader} />} />
          <Route path="/business-card-leaflets/" element={<ServicesPage currentPage="business-card-leaflets" hideLoader={hideLoader} setHideLoader={setHideLoader} />} /> 

          {/* Page not found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

    </div>
  );
}

export default Pages;

