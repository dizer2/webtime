import { useTranslation } from 'react-i18next';
import React from 'react';
import "./components/main/style.css";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Services from './components/Services/Services';


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Contacts/>
    </div>
  );
}



export default App;
