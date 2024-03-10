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

const Index = ({ hideLoader, setHideLoader }) => {
  const { t, i18n } = useTranslation();

  const [baseVelocity, setBaseVelocity] = useState({});

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
      <Loader hideLoader={hideLoader} setHideLoader={setHideLoader}/>
      <Home  hideLoader={hideLoader} setHideLoader={setHideLoader}/>
      <About/>
      <section className='text-animation'>
        <ParallaxText baseVelocity={baseVelocity.velocity1}>{t('homePage.main.paralaxText1')}</ParallaxText>
        <ParallaxText baseVelocity={baseVelocity.velocity2}>{t('homePage.main.paralaxText1')}</ParallaxText>
      </section>
      <Services/>
      <Portfolio />
      <Contacts/>
      <Footer />
    </div>
  );
}

export default Index;
