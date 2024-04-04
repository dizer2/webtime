import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Loader from '../components/UI/Loader/Loader.jsx';
import { ParallaxText } from '../components/UI/ParallaxProps/ParallaxProps.tsx';
import Home from "../components/Home/Home.jsx";
import About from "../components/About/About.jsx";
import Services from "../components/Services/Services.jsx";
import Portfolio from "../components/Portfolio/Portfolio.jsx";
import Contacts from "../components/Contacts/Contacts.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Index = ({ hideLoader, setHideLoader, currentPage }) => {
  const { t } = useTranslation();

  const [baseVelocity, setBaseVelocity] = useState({});
  const [calculatorShow, setCalculatorShow] = useState(false);
  const [calculatorMenu, setCalculatorMenu] = useState(false);
  const [aboutScrolled, setAboutScrolled] = useState(false);
  const [serviceScrolled, setServiceScrolled] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

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
    <div style={{ overflowX: "hidden" }}>
      {!hideLoader && <Loader currentPage={currentPage} hideLoader={hideLoader} setHideLoader={setHideLoader}/>}
      <Home setCalculatorMenu={setCalculatorMenu} calculatorMenu={calculatorMenu} setCalculatorShow={setCalculatorShow}  hideLoader={hideLoader} setHideLoader={setHideLoader}/>
      <About id="about" setCalculatorMenu={setCalculatorMenu}/>
        <section className='text-animation'>
          <ParallaxText baseVelocity={baseVelocity.velocity1}>{t('homePage.main.paralaxText1')}</ParallaxText>
          <ParallaxText baseVelocity={baseVelocity.velocity2}>{t('homePage.main.paralaxText2')}</ParallaxText>
        </section>
        <>
          <Services hideLoader={hideLoader} setHideLoader={setHideLoader} scrolled={serviceScrolled}/>
          <Portfolio/>
          <Contacts/>
          <Footer setCalculatorShow={setCalculatorShow} calculatorShow={calculatorShow}/>
        </>
    </div>
  );
}

export default Index;
