import React, { useEffect, useState } from 'react'
import { BrowserRouter as HashRouter, Router, Routes, Route, Link } from "react-router-dom";
import Index from './Index';
import ServicesPage from '../components/ServicesPage/ServicesPage';
import { useTranslation } from 'react-i18next';
import Loader from '../components/UI/Loader/Loader';


const Pages = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

	const [hideLoader, setHideLoader] = useState(false);


  return (
    <div>
        <HashRouter>
            <Routes>
                <Route path="/" element={ <Index hideLoader={hideLoader} setHideLoader={setHideLoader}/> } />
                <Route path="/web-development" element={<ServicesPage hideLoader={hideLoader} setHideLoader={setHideLoader} currentPage="web-development" />} />
                <Route path="/design" element={ <ServicesPage currentPage="design" />  } />
                <Route path="/poster-billboards" element={ <ServicesPage currentPage="poster-billboards" />  } />
                <Route path="/mobile-design" element={ <ServicesPage currentPage="mobile-design" />  } />
                <Route path="/business-card-leaflets" element={ <ServicesPage currentPage="business-card-leaflets" />  } />
            </Routes>
        </HashRouter>


    </div>
  )
}

export default Pages