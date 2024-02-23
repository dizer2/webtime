import { useTranslation } from 'react-i18next';
import React from 'react';
import "./components/main/style.css";

import ServicesPage from './components/ServicesPage/ServicesPage';
import { ParallaxText } from './components/UI/ParallaxProps/ParallaxProps.tsx';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from './Pages/Index.jsx';
import Pages from './Pages/Pages.jsx';


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <Pages/>
    </div>
  );
}



export default App;
