import React, { useState, useEffect } from 'react';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Portfolio from '../components/Portfolio/Portfolio';
import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';
import { ParallaxText } from '../components/UI/ParallaxProps/ParallaxProps.tsx';
import Loader from '../components/UI/Loader/Loader.jsx';
import { useTranslation } from 'react-i18next';
import Calculator from '../components/UI/Calculator/Calculator.jsx';

const Index = ({ hideLoader, setHideLoader, currentPage }) => {
  const { t, i18n } = useTranslation();

  const [baseVelocity, setBaseVelocity] = useState({});
  const [calculatorShow, setCalculatorShow] = useState(false);
  const [calculatorMenu, setCalculatorMenu] = useState(false);

  useEffect(() => {
    const updateBaseVelocity = () => {
      const isMobile = window.innerWidth <= 500;
      setBaseVelocity({
        velocity1: isMobile ? -1 : -1.7,
        velocity2: isMobile ? 0.5 : 1
      });
    };

    updateBaseVelocity();
    window.addEventListener('resize', updateBaseVelocity);
    return () => window.removeEventListener('resize', updateBaseVelocity);
  }, []);



  return (
    <div>
      <Loader currentPage={currentPage} hideLoader={hideLoader} setHideLoader={setHideLoader}/>
      <Home setCalculatorMenu={setCalculatorMenu} calculatorMenu={calculatorMenu} setCalculatorShow={setCalculatorShow}  hideLoader={hideLoader} setHideLoader={setHideLoader}/>
      <About setCalculatorMenu={setCalculatorMenu}/>
      <section className='text-animation'>
        <ParallaxText baseVelocity={baseVelocity.velocity1}>{t('homePage.main.paralaxText1')}</ParallaxText>
        <ParallaxText baseVelocity={baseVelocity.velocity2}>{t('homePage.main.paralaxText2')}</ParallaxText>
      </section>
      <Services hideLoader={hideLoader} setHideLoader={setHideLoader}/>
      <Portfolio />
      <Contacts/>
      <Footer setCalculatorShow={setCalculatorShow} calculatorShow={calculatorShow}/>
    </div>
  );
}

export default Index;
