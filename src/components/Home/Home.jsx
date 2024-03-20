import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import "./style/Home.css";
import { useTranslation } from 'react-i18next';
import Logo from '../main/img/Logo.jsx';
import IconBox from '../UI/IconBox/IconBox.jsx';

import LaptopIcon from "./../main/img/laptop-icon.svg";
import PhoneIcon from "./../main/img/phone-icon.svg";
import PalleteIcon from "./../main/img/pallete-icon.svg";
import CardIcon from "./../main/img/card-icon.svg";
import PosterIcon from "./../main/img/poster-icon.svg";

import SocialMedia from '../UI/SocialMedia/SocialMedia.jsx';
import LocalisationField from '../UI/LocalisationField/LocalisationField.jsx';
import GradientBtn from '../UI/GradientBtn/GradientBtn.jsx';

import { Outlet, Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Reveal } from '../utils/Reveal/Reveal.tsx';
import { RevealSecodary } from '../utils/RevealSecodary/RevealSecodary.tsx';
import BurgerMenu from '../UI/BurgerMenu/BurgerMenu.jsx';

const Home = ({ setCalculatorShow, calculatorMenu, setCalculatorMenu }) => {
  const { t, i18n } = useTranslation();
  let path = window.location.href;


  const currentLang = localStorage.getItem("i18nextLng");

  const changeLanguage = (lng) => { i18n.changeLanguage(lng); };
  const [inHomeSection, setInHomeSection] = useState(true);

  // Cursor Animation
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;

    if (clientX >= 0 && clientX <= maxX && clientY >= 0 && clientY <= maxY) {
      setMousePosition({ x: clientX, y: clientY });
      setCursorVariant("default");
    } else {
      setMousePosition({ x: -100, y: -100 });
      setCursorVariant("hide");
    }
  };

  const handleMouseEnter = useCallback(() => setCursorVariant("default"), []);
  const handleMouseLeave = useCallback(() => setCursorVariant("hide"), []);

  useEffect(() => {
    // Get initial mouse coordinates
    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseEnter, handleMouseLeave]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgb(0, 0, 0)",
      mixBlendMode: "difference",
    },
    hide: {
      height: 10,
      width: 10,
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
    },
  };


  // Remove Cursor if preloader active 
  const [isPreloaderShow, setIsPreloaderShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  
  // Check device 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const mobileKeywords = ['android', 'iphone', 'ipad', 'mobile'];
    const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword));

    setIsMobile(isMobileDevice);
  }, []);


  // Check if the Dev Tool open
  const [devToolsOpen, setDevToolsOpen] = useState(false);

  useEffect(() => {
    const detectDevTools = () => {
      // Пороговое значение для определения, что инструменты разработчика могут быть открыты
      const threshold = 160;
      const devToolsDetected =
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold;

      setDevToolsOpen(devToolsDetected);
    };

    // Проверяем при монтировании компонента
    detectDevTools();

    // Добавляем обработчик события resize для отслеживания изменений размера окна
    window.addEventListener('resize', detectDevTools);

    // Удаляем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', detectDevTools);
    };
  }, []);


  // Scroll To Section 
  const handleScrollToSection = (sectionId) => {
    if(isMenuOpen) {
      menuHandleClick();
      document.querySelector(".header__menu-overlay").classList.add('_quickly-close-overlay');
    }
    
    document.body.classList.remove("body-hidden", false); 

    if (!sectionId || sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
  
    const sectionRef = document.getElementById(sectionId);
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // Burger Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandleClick = () => {
      setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  
      const bodyClassList = document.body.classList;
      const parentElement = document.getElementById('home');
      document.querySelector(".header__menu-overlay").classList.remove('_quickly-close-overlay');
      
  
      if (!isMenuOpen) {
          bodyClassList.add("_body-hidden");
          parentElement.classList.add('_menu-open');
          parentElement.classList.remove('_menu-close');
      } else {
          bodyClassList.remove("_body-hidden");
          parentElement.classList.remove('_menu-open');
          parentElement.classList.add('_menu-close');
      }
  }
  


  // Fixed Header
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isUserOnTop, setIsUserOnTop] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollingDown(prevScrollPos < currentScrollPos);
      prevScrollPos = currentScrollPos;

      currentScrollPos > 0 ? setIsUserOnTop(false) : setIsUserOnTop(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const calculatroPopupOpen = () => {
    setCalculatorShow(true);
  }


  useEffect(() => {
    const handleScroll = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.id === 'home') {
                setInHomeSection(true);
                setCalculatorMenu(false);
            } else {
                setInHomeSection(false);
                setCalculatorMenu(true);
            }
        });
    };

    const observer = new IntersectionObserver(handleScroll, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // При необхідності адаптуйте значення для розміру екрану
    });

    const homeSection = document.getElementById('home');
    if (homeSection) {
        observer.observe(homeSection);
    }

    return () => {
        if (homeSection) {
            observer.unobserve(homeSection);
        }
    };
}, []); // Пам'ята


  return (
    <section id='home' className="home">

      <div className={calculatorMenu ? 'calculator calculator--show' : 'calculator'} onClick={calculatroPopupOpen}>
        <div className="calculator__container">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.4511 39.714C10.1601 39.714 6.01465 39.714 3.43896 36.8521C0.863281 33.9903 0.863281 29.3842 0.863281 20.1719C0.863281 10.9597 0.863281 6.35362 3.43896 3.49175C6.01465 0.629883 10.1601 0.629883 18.4511 0.629883C26.7421 0.629883 30.8876 0.629883 33.4633 3.49175C36.039 6.35362 36.039 10.9597 36.039 20.1719L36.039 20.7421C34.8748 20.3717 33.6346 20.1717 32.3477 20.1717C30.7698 20.1717 29.2621 20.4723 27.8787 21.0193C27.5263 20.5075 26.9363 20.1719 26.268 20.1719C25.1887 20.1719 24.3138 21.0469 24.3138 22.1262C24.3138 22.4476 24.3914 22.751 24.5289 23.0185C22.4297 24.7828 20.9356 27.2439 20.4027 30.0456C20.4045 30.0116 20.4053 29.9774 20.4053 29.943C20.4053 28.8637 19.5304 27.9888 18.4511 27.9888C17.3719 27.9888 16.4969 28.8637 16.4969 29.943C16.4969 31.0223 17.3719 31.8972 18.4511 31.8972C19.3379 31.8972 20.0866 31.3066 20.3256 30.4973C20.2351 31.0955 20.1882 31.7079 20.1882 32.3312C20.1882 35.0995 21.1133 37.6516 22.6711 39.6955C21.3973 39.714 19.9962 39.714 18.4511 39.714ZM24.3138 8.44671H12.5885C11.6798 8.44671 11.2255 8.44671 10.8527 8.54659C9.84117 8.81764 9.05104 9.60777 8.77999 10.6193C8.68011 10.9921 8.68011 11.4464 8.68011 12.3551C8.68011 13.2638 8.68011 13.7181 8.77999 14.0909C9.05104 15.1025 9.84117 15.8926 10.8527 16.1636C11.2255 16.2635 11.6798 16.2635 12.5885 16.2635H24.3138C25.2224 16.2635 25.6768 16.2635 26.0495 16.1636C27.0611 15.8926 27.8512 15.1025 28.1223 14.0909C28.2222 13.7181 28.2222 13.2638 28.2222 12.3551C28.2222 11.4464 28.2222 10.9921 28.1223 10.6193C27.8512 9.60777 27.0611 8.81764 26.0495 8.54659C25.6768 8.44671 25.2224 8.44671 24.3138 8.44671ZM12.5885 22.1262C12.5885 23.2054 11.7136 24.0804 10.6343 24.0804C9.55503 24.0804 8.68011 23.2054 8.68011 22.1262C8.68011 21.0469 9.55503 20.1719 10.6343 20.1719C11.7136 20.1719 12.5885 21.0469 12.5885 22.1262ZM18.4511 24.0804C19.5304 24.0804 20.4053 23.2054 20.4053 22.1262C20.4053 21.0469 19.5304 20.1719 18.4511 20.1719C17.3719 20.1719 16.4969 21.0469 16.4969 22.1262C16.4969 23.2054 17.3719 24.0804 18.4511 24.0804ZM10.6343 31.8972C11.7136 31.8972 12.5885 31.0223 12.5885 29.943C12.5885 28.8637 11.7136 27.9888 10.6343 27.9888C9.55503 27.9888 8.68011 28.8637 8.68011 29.943C8.68011 31.0223 9.55503 31.8972 10.6343 31.8972ZM32.229 41.9833C37.6254 41.9833 42 37.6087 42 32.2123C42 26.8159 37.6254 22.4412 32.229 22.4412C26.8326 22.4412 22.4579 26.8159 22.4579 32.2123C22.4579 37.6087 26.8326 41.9833 32.229 41.9833ZM32.9618 26.3497C32.9618 25.9449 32.6337 25.6168 32.229 25.6168C31.8242 25.6168 31.4961 25.9449 31.4961 26.3497V26.6591C29.903 26.9444 28.5648 28.1413 28.5648 29.7695C28.5648 31.3978 29.903 32.5947 31.4961 32.8799V36.2697C30.5817 36.0197 30.0305 35.318 30.0305 34.655C30.0305 34.2503 29.7024 33.9222 29.2977 33.9222C28.8929 33.9222 28.5648 34.2503 28.5648 34.655C28.5648 36.2833 29.903 37.4802 31.4961 37.7654V38.0749C31.4961 38.4796 31.8242 38.8077 32.229 38.8077C32.6337 38.8077 32.9618 38.4796 32.9618 38.0749V37.7654C34.5549 37.4802 35.8931 36.2833 35.8931 34.655C35.8931 33.0268 34.5549 31.8299 32.9618 31.5447V28.1548C33.8763 28.4049 34.4274 29.1066 34.4274 29.7695C34.4274 30.1743 34.7555 30.5023 35.1603 30.5023C35.565 30.5023 35.8931 30.1743 35.8931 29.7695C35.8931 28.1413 34.5549 26.9444 32.9618 26.6591V26.3497ZM31.4961 28.1548C30.5817 28.4049 30.0305 29.1066 30.0305 29.7695C30.0305 30.4324 30.5817 31.1342 31.4961 31.3842V28.1548ZM32.9618 33.0404V36.2697C33.8763 36.0197 34.4274 35.318 34.4274 34.655C34.4274 33.9921 33.8763 33.2904 32.9618 33.0404Z" fill="white"/>
          </svg>
        </div>
      </div>

        {
          devToolsOpen ?
          ""
          :
          <div
            style={{ top: mousePosition.y, left: mousePosition.x }}
            className={`cursor-mini ${cursorVariant === "hide" ? "_hide" : ""} ${isMobile ? "_hide" : "" } ${isPreloaderShow ? " _hide-with-preloader" : ""}`}
          ></div>
        }


        {
          devToolsOpen ?
          ""
          :
          <motion.div
            className={`cursor ${cursorVariant === "hide" ? "_hide" : ""} ${isMobile ? "_hide" : "" } ${isPreloaderShow ? " _hide-with-preloader" : ""}`}
            variants={variants}
            animate={cursorVariant}
          />
        }



      <div className="home__interactive-element home__interactive-element--1"></div>
      
      <div className="home__interactive-element home__interactive-element--2">
        <svg width="376" height="355" viewBox="0 0 376 355" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M258.096 80.4934C299.696 101.356 365.564 82.8114 374.809 97.2991C384.053 112.366 335.519 160.465 330.897 205.667C326.852 251.448 365.564 294.332 359.786 314.614C338.477 366.381 290.708 294.656 241.5 335C192.292 375.344 175.5 345.5 157.477 323.381C136.098 319.904 144.272 316.932 103.827 319.25C63.3816 321.569 0.980587 335.477 0.980587 319.25C0.4028 302.445 62.226 255.505 64.5371 210.303C67.4261 164.522 11.3807 121.059 14.8475 109.469C18.3142 98.4581 80.7152 119.32 118.849 96.1401C156.405 72.3803 169.117 3.99842 184.139 0.521377C199.161 -2.95567 216.495 59.0516 258.096 80.4934Z" fill="url(#paint0_linear_752_351)"/>
          <defs>
          <linearGradient id="paint0_linear_752_351" x1="17.9296" y1="51.6188" x2="415.141" y2="117.007" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2BBFFE"/>
          <stop offset="0.521875" stopColor="#8629FD"/>
          <stop offset="1" stopColor="#FC4AF5"/>
          </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="home__interactive-element home__interactive-element--3">
        <svg width="402" height="380" viewBox="0 0 402 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M401.98 235.946C402.889 255.773 372.234 263.795 361.667 280.6C350.995 297.573 353.013 322.821 338.668 336.831C324.533 350.635 301.699 363.72 282.728 358.191C245.245 347.267 250.836 257.487 212.217 263.23C171.745 269.247 211.305 383.035 170.505 379.938C137.707 377.448 155.534 314.767 151.534 282.134C149.641 266.695 160.775 245.311 149.068 235.064C137.591 225.018 118.238 238.42 102.986 238.755C69.1664 239.498 8.26435 267.98 0.543571 235.061C-8.70356 195.634 103.02 216.721 108.489 176.596C110.961 158.461 68.1203 156.388 68.551 138.09C68.862 124.875 86.327 116.408 98.6722 111.666C112.311 106.427 133.818 122.472 142.947 111.068C165.96 82.3191 87.5962 19.5291 119.932 1.89465C145.898 -12.2654 155.079 57.3447 183.683 64.8695C194.743 67.7789 207.185 50.1616 217.131 55.8036C232.42 64.4761 214.92 101.297 231.524 107.067C261.121 117.354 277.033 51.4873 308.368 51.3126C324.991 51.22 344.241 64.6591 349.46 80.434C355.758 99.4689 331.965 118.19 330.611 138.192C329.741 151.045 331.398 165.31 337.61 176.596C351.54 201.905 400.657 207.09 401.98 235.946Z" fill="url(#paint0_linear_752_352)"/>
          <defs>
          <linearGradient id="paint0_linear_752_352" x1="18.1736" y1="54.9179" x2="443.98" y2="125.025" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2BBFFE"/>
          <stop offset="0.521875" stopColor="#8629FD"/>
          <stop offset="1" stopColor="#FC4AF5"/>
          </linearGradient>
          </defs>
        </svg>
      </div>


      <div className="header__menu-overlay"></div>

        <div className="home__header--phantom"></div>
      <header className={`home__header ${!scrollingDown ? "_header-show" : "_header-hide"}`} 

        style={{
          backgroundColor: isUserOnTop || isMenuOpen || scrollingDown ? "transparent" : "rgba(0, 0, 0, 0.8)",
          backdropFilter: isUserOnTop || isMenuOpen || scrollingDown ? "blur(0px)" : "blur(5px)",
        }}
        >
        <div id='header' className="header__phantom"></div>

        <div className={`header__wrapper`}>
          <div onClick={() => handleScrollToSection('home')} className="header__logo">
            <Logo/>
          </div>
        
          <nav className="header__nav">
            <ul className="header__list">
              <li onClick={() => handleScrollToSection('about')} className="header__item">{t('homePage.main.navigation.about')}</li>
              <li onClick={() => handleScrollToSection('services')} className={`header__item header__dropdown`}>
                {t('homePage.main.navigation.services')}
                <svg className='header__dropdown-arrow' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.292898 0.296507C-0.0976325 0.687017 -0.0976325 1.32022 0.292898 1.71072L5.18509 6.59812C5.96629 7.37852 7.23209 7.37822 8.01289 6.59752L12.9032 1.70712C13.2938 1.31662 13.2938 0.683417 12.9032 0.292897C12.5127 -0.0976325 11.8795 -0.0976325 11.489 0.292897L7.30339 4.47852C6.91289 4.86912 6.27969 4.86902 5.88919 4.47852L1.70711 0.296507C1.31659 -0.0940228 0.683418 -0.0940228 0.292898 0.296507Z" fill="white"/>
                </svg>

                <div className="header__dropdown-content__overlay">
                  <ul className='header__dropdown-content'>
                      <div className="header__dropdown--left">
                        <Link to={`${path}/web-development`}>
                          <li className="header__dropdown-item">
                              <IconBox
                                boxSize={40}
                                imgPath={LaptopIcon}

                                iconWidth={26} 
                                iconHeight={26}

                                circleSize = {12}
                                top = {20}
                              />
                              {t('homePage.main.services.service1')}
                          </li>                        
                        </Link>


                        <Link to={`${path}/design`}>
                          <li className="header__dropdown-item">
                              <IconBox
                                boxSize={40}
                                imgPath={PalleteIcon}

                                iconWidth={26} 
                                iconHeight={26}

                                circleSize = {12}
                                top = {20}
                              />
                              {t('homePage.main.services.service2')}
                          </li>
                        </Link>

                        <Link to={`${path}/poster-billboards`}>
                          <li className="header__dropdown-item">
                              <IconBox
                                boxSize={40}
                                imgPath={PosterIcon}

                                iconWidth={26} 
                                iconHeight={26}

                                circleSize = {12}
                                top = {20}
                              />
                              {t('homePage.main.services.service3')} 
                          </li>
                        </Link>

                      </div>


                      <div className="header__dropdown--right">
                        <Link to={`${path}/mobile-design`}>
                          <li className="header__dropdown-item">
                              <IconBox
                                boxSize={40}
                                imgPath={PhoneIcon}

                                iconWidth={26} 
                                iconHeight={26}

                                circleSize = {12}
                                top = {20}
                              />
                              {t('homePage.main.services.service4')}
                          </li>
                        </Link>
                        
                        <Link to={`${path}/business-card-leaflets`}>
                          <li className="header__dropdown-item">
                              <IconBox
                                boxSize={40}
                                imgPath={CardIcon}

                                iconWidth={26} 
                                iconHeight={26}

                                circleSize = {12}
                                top = {20}
                              />
                              {t('homePage.main.services.service5')}
                          </li>
                        </Link>

                      </div>
                  </ul>
                </div>
              </li>
              <li onClick={() => handleScrollToSection('portfolio')} className="header__item">{t('homePage.main.navigation.portfolio')}</li>
              <li onClick={() => handleScrollToSection('contacts')} className="header__item">{t('homePage.main.navigation.contacts')}</li>
            </ul>
          </nav>

          <button onClick={() => handleScrollToSection('contacts')} className="header__btn">
            <span>{t('homePage.home.contactBtn')}</span> 
          </button>


          <div className="header__menu-wrapper">
            <div className="header__menu-header--phantom"></div>

            <div className="header__menu-row">
              <svg className='header__menu-img' width="500" height="132" viewBox="0 0 563 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0V144.693H38.9629V80.9785L66.5088 131.67H85.3564L112.957 78.6943L113.264 144.693H152.227L151.865 0H116.708L76.5234 77.0088L35.1572 0H0ZM214.949 107.899V88.8828H268.591V53.7432H214.949V36.793H276.021V0H172.905V144.693H278.377V107.899H214.949ZM294.842 0V144.693H336.522V78.8975L384.728 144.693H419.886V0H378.204V65.7939L329.999 0H294.842ZM455.715 130.017C466.589 142.006 481.751 148 501.202 148C520.654 148 535.816 142.006 546.689 130.017C557.563 118.028 562.999 101.216 562.999 79.5811V0H520.956V78.1338C520.956 89.1582 519.204 97.0127 515.7 101.698C512.317 106.246 507.606 108.52 501.565 108.52C495.646 108.52 490.934 106.246 487.43 101.698C483.926 97.0127 482.174 89.1582 482.174 78.1338V0H439.405V79.5811C439.405 101.216 444.842 118.028 455.715 130.017Z" fill="white"/>
              </svg>

              <div className="header__menu-nav">
                <div className="header__menu-list">
                  <div onClick={() => handleScrollToSection('about')} className="header__menu-item">
                    <div className='header__menu-item__order'>01</div>
                    <div className='header__menu-item__rhombus'></div>
                    <p>{t('homePage.main.navigation.about')}</p>
                  </div>
                  <div onClick={() => handleScrollToSection('services')} className="header__menu-item">
                    <div className='header__menu-item__order'>02</div>
                    <div className='header__menu-item__rhombus'></div>

                    <p>{t('homePage.main.navigation.services')}</p>
                  </div>
                  <div onClick={() => handleScrollToSection('portfolio')} className="header__menu-item">
                    <div className='header__menu-item__order'>03</div>
                    <div className='header__menu-item__rhombus'></div>
                    <p>{t('homePage.main.navigation.portfolio')}</p>
                  </div>
                  <div onClick={() => handleScrollToSection('contacts')} className="header__menu-item">
                    <div className='header__menu-item__order'>04</div>
                    <div className='header__menu-item__rhombus'></div>
                    <p>{t('homePage.main.navigation.contacts')}</p>
                  </div>
                </div>
              </div>
            </div>

            <footer className='home__footer'>
              <div className="social__media-wrapper">
                <SocialMedia
                  linkPath="#!"
                  icon={
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 38.8888L12.1524 30.8856C10.4165 27.7679 9.86504 24.1299 10.5991 20.6391C11.3332 17.1482 13.3036 14.0387 16.1488 11.8812C18.9939 9.72366 22.523 8.66281 26.0884 8.8933C29.6538 9.12379 33.0164 10.6302 35.5591 13.136C38.1018 15.6418 39.6541 18.979 39.9311 22.5352C40.2081 26.0914 39.1912 29.6281 37.0671 32.4962C34.9429 35.3643 31.854 37.3715 28.3672 38.1495C24.8803 38.9275 21.2294 38.424 18.0843 36.7315L10 38.8888ZM18.4741 33.7366L18.9741 34.0327C21.2521 35.3807 23.9128 35.9385 26.5416 35.6193C29.1703 35.3 31.6194 34.1215 33.5073 32.2676C35.3951 30.4136 36.6156 27.9883 36.9786 25.3695C37.3415 22.7508 36.8266 20.0857 35.514 17.7896C34.2014 15.4935 32.1648 13.6954 29.7217 12.6755C27.2786 11.6555 24.5661 11.4711 22.007 12.1509C19.448 12.8307 17.186 14.3365 15.5736 16.4336C13.9613 18.5308 13.0891 21.1016 13.0931 23.7453C13.0909 25.9374 13.6982 28.087 14.8472 29.955L15.1608 30.471L13.9574 34.9379L18.4741 33.7366Z" fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M30.6086 25.8007C30.3155 25.5647 29.9723 25.3986 29.6052 25.3151C29.2381 25.2315 28.8567 25.2327 28.4901 25.3185C27.9392 25.5469 27.5833 26.4099 27.2274 26.8413C27.1524 26.9448 27.0421 27.0173 26.9173 27.0453C26.7925 27.0734 26.6617 27.055 26.5495 26.9936C24.5329 26.2051 22.8426 24.7591 21.7531 22.8905C21.6602 22.7739 21.6162 22.6258 21.6304 22.4775C21.6447 22.3292 21.716 22.1921 21.8294 22.0952C22.2263 21.7029 22.5178 21.217 22.6768 20.6824C22.7121 20.0928 22.5768 19.5054 22.287 18.9904C22.063 18.2684 21.6366 17.6255 21.0582 17.1377C20.76 17.0037 20.4292 16.9588 20.1059 17.0084C19.7826 17.0579 19.4806 17.1998 19.2363 17.4168C18.8121 17.7822 18.4755 18.2379 18.2511 18.7503C18.0267 19.2628 17.9203 19.8189 17.9398 20.3779C17.9411 20.6917 17.9809 21.0043 18.0584 21.3085C18.2552 22.0393 18.5578 22.7376 18.9567 23.3812C19.2444 23.8742 19.5584 24.3514 19.8973 24.8109C20.9985 26.3202 22.3828 27.6016 23.9733 28.5841C24.7715 29.0834 25.6245 29.4893 26.5156 29.7939C27.4412 30.2128 28.4632 30.3736 29.4731 30.2592C30.0484 30.1722 30.5936 29.9455 31.0605 29.5988C31.5275 29.2521 31.9019 28.7962 32.1509 28.2711C32.2972 27.9539 32.3416 27.5993 32.278 27.2559C32.1255 26.5537 31.1848 26.1391 30.6086 25.8007Z" fill="white"/>
                    </svg>
                  }
                  size='big'
                />

                <SocialMedia
                  linkPath="mailto:help.webtime@gmail.com"
                  icon={
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.0385 38.3703H15.5972V24.8707L7.65625 18.915V35.988C7.65625 37.3062 8.72431 38.3703 10.0385 38.3703Z" fill="white"/>
                      <path d="M34.6562 38.3703H40.2149C41.5331 38.3703 42.5972 37.3023 42.5972 35.988V18.915L34.6562 24.8707" fill="white"/>
                      <path d="M34.6562 14.5477V24.8709L42.5972 18.9152V15.7389C42.5972 12.7928 39.2342 11.1133 36.8797 12.8801" fill="white"/>
                      <path d="M15.5977 24.8706V14.5474L25.1268 21.6942L34.656 14.5474V24.8706L25.1268 32.0174" fill="white"/>
                      <path d="M7.65625 15.7389V18.9152L15.5972 24.8709V14.5477L13.3738 12.8801C11.0153 11.1133 7.65625 12.7928 7.65625 15.7389" fill="white"/>
                    </svg>
                  }
                  size='big'
                />

                <SocialMedia
                  linkPath="#!"
                  icon={
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6921 23.9371C11.6921 23.9371 23.8989 18.7958 28.1324 16.9854C29.7554 16.2613 35.259 13.944 35.259 13.944C35.259 13.944 37.7992 12.9303 37.5875 15.3923C37.5169 16.4061 36.9524 19.9543 36.388 23.7922C35.5412 29.2232 34.6239 35.1611 34.6239 35.1611C34.6239 35.1611 34.4828 36.8266 33.2833 37.1162C32.0838 37.4059 30.1081 36.1025 29.7554 35.8128C29.4731 35.5956 24.4634 32.337 22.6288 30.7439C22.1349 30.3094 21.5705 29.4405 22.6993 28.4267C25.2395 26.0371 28.2736 23.0682 30.1081 21.1854C30.9549 20.3164 31.8015 18.2889 28.2736 20.7509C23.2639 24.2991 18.3247 27.6302 18.3247 27.6302C18.3247 27.6302 17.1957 28.3542 15.079 27.7025C12.9621 27.0509 10.4925 26.1819 10.4925 26.1819C10.4925 26.1819 8.79919 25.0957 11.6921 23.9371Z" fill="white"/>
                    </svg>

                  }
                  size='big'
                />
              </div>

              <LocalisationField
                gradient="linear-gradient(99deg, #2BBFFE 5.86%, #8629FD 54.99%, #FC4AF5 100%)"
              />
            </footer>
          </div>


          <BurgerMenu burgerOnClick={menuHandleClick}/>
        </div>
      </header>


      <section className="home__intro">

        <h1 className="intro__title">
          {/* <strong>WebTime</strong> <strong>―</strong> your time with webtime, where innovation meets design. */}
          <strong>{t('homePage.home.title.companyName')}</strong> <strong>{t('homePage.home.title.slash')}</strong> {t('homePage.home.title.text')}
        </h1>

        <Swiper
          slidesPerView='auto'
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="intro__slider mySwiper"
        >
          <SwiperSlide className="intro__card"> 
            <Link to={`${path}/web-development`}>
              <div className="intro__card-header">
                <h4 className="intro__card-title">{t('homePage.home.card1.title')}</h4>

                <p className="intro__card-price">{t('homePage.home.card1.price')}</p>
              </div>

              <div className="intro__card-img intro__card-img--1"></div>

              <GradientBtn
                text={`${t('homePage.main.viewMore')}`}
                width="100%"
                height="50"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide className="intro__card">
            <Link to={`${path}/design`}>
              <div className="intro__card-header">
                <h4 className="intro__card-title">{t('homePage.home.card2.title')}</h4>

                <p className="intro__card-price">{t('homePage.home.card2.price')}</p>
              </div>

              <div className="intro__card-img intro__card-img--2"></div>

              <GradientBtn
                text={`${t('homePage.main.viewMore')}`}
                width="100%"
                height="50"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide className="intro__card">
            <Link to={`${path}/poster-billboards`}>
              <div className="intro__card-header">
                <h4 className="intro__card-title">{t('homePage.home.card3.title')}</h4>

                <p className="intro__card-price">{t('homePage.home.card3.price')}</p>
              </div>  

              <div className="intro__card-img intro__card-img--3"></div>

              <GradientBtn
                text={`${t('homePage.main.viewMore')}`}
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide className="intro__card">
            <Link to={`${path}/design`}>
              <div className="intro__card-header">
                <h4 className="intro__card-title">{t('homePage.home.card4.title')}</h4>

                <p className="intro__card-price">{t('homePage.home.card4.price')}</p>
              </div>

              <div className="intro__card-img intro__card-img--4"></div>

              <GradientBtn
                text={`${t('homePage.main.viewMore')}`}
                width="100%"
                height="50"
              />
            </Link>
          </SwiperSlide>
          
          <SwiperSlide className="intro__card">
            <Link to={`${path}/business-card-leaflets`}>
              <div className="intro__card-header">
                <h4 className="intro__card-title">{t('homePage.home.card5.title')}</h4>

                <p className="intro__card-price">{t('homePage.home.card5.price')}</p>
              </div>

              <div className="intro__card-img intro__card-img--5"></div>

              <GradientBtn
                text={`${t('homePage.main.viewMore')}`}
                width="100%"
                height="50"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide className="intro__card">
            <Link to={`${path}/business-card-leaflets`}>
              <div className="intro__card-header">
                <h4 className="intro__card-title">{t('homePage.home.card6.title')}</h4>

                <p className="intro__card-price">{t('homePage.home.card6.price')}</p>
              </div>

              <div className="intro__card-img intro__card-img--6"></div>

              <GradientBtn
                text={`${t('homePage.main.viewMore')}`}
                width="100%"
                height="50"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide className="intro__card">
            <Link to={`${path}/poster-billboards`}>
              <div className="intro__card-header">
                <h4 className="intro__card-title">{t('homePage.home.card7.title')}</h4>

                <p className="intro__card-price">{t('homePage.home.card7.price')}</p>
              </div>

              <div className="intro__card-img intro__card-img--7"></div>

              <GradientBtn
                text={`${t('homePage.main.viewMore')}`}
                width="100%"
                height="50"
              />
            </Link>
          </SwiperSlide>
        </Swiper>

      </section>


      <footer className='home__footer'>
        <div className="social__media-wrapper">
          <SocialMedia
            nameOfMedia = "whats-up"
            linkPath="#!"
            icon={
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 38.8888L12.1524 30.8856C10.4165 27.7679 9.86504 24.1299 10.5991 20.6391C11.3332 17.1482 13.3036 14.0387 16.1488 11.8812C18.9939 9.72366 22.523 8.66281 26.0884 8.8933C29.6538 9.12379 33.0164 10.6302 35.5591 13.136C38.1018 15.6418 39.6541 18.979 39.9311 22.5352C40.2081 26.0914 39.1912 29.6281 37.0671 32.4962C34.9429 35.3643 31.854 37.3715 28.3672 38.1495C24.8803 38.9275 21.2294 38.424 18.0843 36.7315L10 38.8888ZM18.4741 33.7366L18.9741 34.0327C21.2521 35.3807 23.9128 35.9385 26.5416 35.6193C29.1703 35.3 31.6194 34.1215 33.5073 32.2676C35.3951 30.4136 36.6156 27.9883 36.9786 25.3695C37.3415 22.7508 36.8266 20.0857 35.514 17.7896C34.2014 15.4935 32.1648 13.6954 29.7217 12.6755C27.2786 11.6555 24.5661 11.4711 22.007 12.1509C19.448 12.8307 17.186 14.3365 15.5736 16.4336C13.9613 18.5308 13.0891 21.1016 13.0931 23.7453C13.0909 25.9374 13.6982 28.087 14.8472 29.955L15.1608 30.471L13.9574 34.9379L18.4741 33.7366Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M30.6086 25.8007C30.3155 25.5647 29.9723 25.3986 29.6052 25.3151C29.2381 25.2315 28.8567 25.2327 28.4901 25.3185C27.9392 25.5469 27.5833 26.4099 27.2274 26.8413C27.1524 26.9448 27.0421 27.0173 26.9173 27.0453C26.7925 27.0734 26.6617 27.055 26.5495 26.9936C24.5329 26.2051 22.8426 24.7591 21.7531 22.8905C21.6602 22.7739 21.6162 22.6258 21.6304 22.4775C21.6447 22.3292 21.716 22.1921 21.8294 22.0952C22.2263 21.7029 22.5178 21.217 22.6768 20.6824C22.7121 20.0928 22.5768 19.5054 22.287 18.9904C22.063 18.2684 21.6366 17.6255 21.0582 17.1377C20.76 17.0037 20.4292 16.9588 20.1059 17.0084C19.7826 17.0579 19.4806 17.1998 19.2363 17.4168C18.8121 17.7822 18.4755 18.2379 18.2511 18.7503C18.0267 19.2628 17.9203 19.8189 17.9398 20.3779C17.9411 20.6917 17.9809 21.0043 18.0584 21.3085C18.2552 22.0393 18.5578 22.7376 18.9567 23.3812C19.2444 23.8742 19.5584 24.3514 19.8973 24.8109C20.9985 26.3202 22.3828 27.6016 23.9733 28.5841C24.7715 29.0834 25.6245 29.4893 26.5156 29.7939C27.4412 30.2128 28.4632 30.3736 29.4731 30.2592C30.0484 30.1722 30.5936 29.9455 31.0605 29.5988C31.5275 29.2521 31.9019 28.7962 32.1509 28.2711C32.2972 27.9539 32.3416 27.5993 32.278 27.2559C32.1255 26.5537 31.1848 26.1391 30.6086 25.8007Z" fill="white"/>
              </svg>
            }
            size='big'
          />

          <SocialMedia
            nameOfMedia = "email"
            linkPath="mailto:help.webtime@gmail.com"
            icon={
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0385 38.3703H15.5972V24.8707L7.65625 18.915V35.988C7.65625 37.3062 8.72431 38.3703 10.0385 38.3703Z" fill="white"/>
                <path d="M34.6562 38.3703H40.2149C41.5331 38.3703 42.5972 37.3023 42.5972 35.988V18.915L34.6562 24.8707" fill="white"/>
                <path d="M34.6562 14.5477V24.8709L42.5972 18.9152V15.7389C42.5972 12.7928 39.2342 11.1133 36.8797 12.8801" fill="white"/>
                <path d="M15.5977 24.8706V14.5474L25.1268 21.6942L34.656 14.5474V24.8706L25.1268 32.0174" fill="white"/>
                <path d="M7.65625 15.7389V18.9152L15.5972 24.8709V14.5477L13.3738 12.8801C11.0153 11.1133 7.65625 12.7928 7.65625 15.7389" fill="white"/>
              </svg>
            }
            size='big'
          />

          <SocialMedia
            nameOfMedia = "telegram"
            linkPath="#!"
            icon={
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6921 23.9371C11.6921 23.9371 23.8989 18.7958 28.1324 16.9854C29.7554 16.2613 35.259 13.944 35.259 13.944C35.259 13.944 37.7992 12.9303 37.5875 15.3923C37.5169 16.4061 36.9524 19.9543 36.388 23.7922C35.5412 29.2232 34.6239 35.1611 34.6239 35.1611C34.6239 35.1611 34.4828 36.8266 33.2833 37.1162C32.0838 37.4059 30.1081 36.1025 29.7554 35.8128C29.4731 35.5956 24.4634 32.337 22.6288 30.7439C22.1349 30.3094 21.5705 29.4405 22.6993 28.4267C25.2395 26.0371 28.2736 23.0682 30.1081 21.1854C30.9549 20.3164 31.8015 18.2889 28.2736 20.7509C23.2639 24.2991 18.3247 27.6302 18.3247 27.6302C18.3247 27.6302 17.1957 28.3542 15.079 27.7025C12.9621 27.0509 10.4925 26.1819 10.4925 26.1819C10.4925 26.1819 8.79919 25.0957 11.6921 23.9371Z" fill="white"/>
              </svg>

            }
            size='big'
          />
        </div>

        <LocalisationField
          gradient="linear-gradient(99deg, #2BBFFE 5.86%, #8629FD 54.99%, #FC4AF5 100%)"
        />
      </footer>
    </section>
  )
}

export default Home;
