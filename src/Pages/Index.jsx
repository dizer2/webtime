import React, { useState, useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Loader from '../components/UI/Loader/Loader.jsx';
import { ParallaxText } from '../components/UI/ParallaxProps/ParallaxProps.tsx';

const LazyHome = React.lazy(() => import("../components/Home/Home.jsx"));
const LazyAbout = React.lazy(() => import("../components/About/About.jsx"));
const LazyService = React.lazy(() => import("../components/Services/Services.jsx"));
const LazyPortfolio = React.lazy(() => import("../components/Portfolio/Portfolio.jsx"));
const LazyContacts = React.lazy(() => import("../components/Contacts/Contacts.jsx"));
const LazyFooter = React.lazy(() => import("../components/Footer/Footer.jsx"));

const Index = ({ hideLoader, setHideLoader, currentPage }) => {
  const { t } = useTranslation();

  const [baseVelocity, setBaseVelocity] = useState({});
  const [calculatorShow, setCalculatorShow] = useState(false);
  const [calculatorMenu, setCalculatorMenu] = useState(false);
  const [aboutScrolled, setAboutScrolled] = useState(false);
  const [serviceScrolled, setServiceScrolled] = useState(false);
  const [portfolioScrolled, setPortfolioScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const aboutComponent = document.getElementById('about');
      const serviceComponent = document.getElementById('services');
      const portfolioComponent = document.getElementById('portfolio');

      if (aboutComponent && !aboutScrolled && window.scrollY >= aboutComponent.offsetTop) {
        setAboutScrolled(true);
      }

      if (serviceComponent && !serviceScrolled && window.scrollY >= serviceComponent.offsetTop) {
        setServiceScrolled(true);
      }

      if (portfolioComponent && !portfolioScrolled && window.scrollY >= portfolioComponent.offsetTop) {
        setPortfolioScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [aboutScrolled, serviceScrolled, portfolioScrolled]);

  return (
    <div style={{ overflowX: "hidden" }}>
      {!hideLoader && <Loader currentPage={currentPage} hideLoader={hideLoader} setHideLoader={setHideLoader}/>}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHome setCalculatorMenu={setCalculatorMenu} calculatorMenu={calculatorMenu} setCalculatorShow={setCalculatorShow}  hideLoader={hideLoader} setHideLoader={setHideLoader}/>
        <LazyAbout id="about" setCalculatorMenu={setCalculatorMenu}/>
        {aboutScrolled && (
          <section className='text-animation'>
            <ParallaxText baseVelocity={baseVelocity.velocity1}>{t('homePage.main.paralaxText1')}</ParallaxText>
            <ParallaxText baseVelocity={baseVelocity.velocity2}>{t('homePage.main.paralaxText2')}</ParallaxText>
          </section>
        )}
        {(aboutScrolled || serviceScrolled) && (
          <LazyService hideLoader={hideLoader} setHideLoader={setHideLoader}/>
        )}
        {serviceScrolled && (
          <LazyPortfolio/>
        )}
        {portfolioScrolled && (
          <LazyContacts/>
        )}
        <LazyFooter setCalculatorShow={setCalculatorShow} calculatorShow={calculatorShow}/>
      </Suspense>
    </div>
  );
}

export default Index;
