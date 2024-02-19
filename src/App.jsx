import { useTranslation } from 'react-i18next';
import React from 'react';
import "./components/main/style.css";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import { ParallaxText } from './components/UI/ParallaxProps/ParallaxProps.tsx';


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <Home/>
      <About/>
      <section className='text-animation'>
      <ParallaxText baseVelocity={-3}>Website Development • Custom Web Design</ParallaxText>
      <ParallaxText baseVelocity={2}>Posters • Billboards • Mobile Design • Business card • Leaflets </ParallaxText>
      </section>
      <Services/>
      <Portfolio />
      <Contacts/>
      <Footer />
    </div>
  );
}



export default App;
