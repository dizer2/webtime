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

const Home = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);


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
  


  // Static Header
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollingDown(prevScrollPos < currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  // const dropdownContent = document.querySelector('.header__dropdown-content');
  // dropdownContent.classList.add('_hide');
  
  return (
    <section id='home' className="home">
        {
          devToolsOpen ?
          ""
          :
          <div
            style={{ top: mousePosition.y, left: mousePosition.x }}
            className={`cursor-mini ${cursorVariant === "hide" ? "_hide" : ""} ${isMobile ? "_hide" : "" }`}
          ></div>
        }


        {
          devToolsOpen ?
          ""
          :
          <motion.div
            className={`cursor ${cursorVariant === "hide" ? "_hide" : ""} ${isMobile ? "_hide" : "" }`}
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
      <header className={`home__header ${!scrollingDown ? "_header-show" : "_header-hide"}`} style={{backgroundColor: scrollingDown ? 'rgba(0, 0, 0, 0.8)' : 'transparent'}}  >
        <div id='header' className="header__phantom"></div>

        <div className={`header__wrapper`}>
          <div className="header__logo">
            <Logo/>
          </div>

          <nav className="header__nav">
            <ul className="header__list">
              <li onClick={() => handleScrollToSection('about')} className="header__item">About</li>
              <li onClick={() => handleScrollToSection('services')} className="header__item header__dropdown">
                Services 
                <svg className='header__dropdown-arrow' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M5.70696 10.4899C5.31643 10.8804 5.31643 11.5136 5.70696 11.9041L10.5992 16.7915C11.3804 17.5719 12.6462 17.5716 13.427 16.7909L18.3173 11.9005C18.7079 11.51 18.7079 10.8768 18.3173 10.4863C17.9268 10.0957 17.2936 10.0957 16.9031 10.4863L12.7175 14.6719C12.327 15.0625 11.6938 15.0624 11.3033 14.6719L7.12117 10.4899C6.73065 10.0993 6.09748 10.0993 5.70696 10.4899Z" fill="white"/>
                </svg>

                <div className="header__dropdown-content__overlay">
                  <ul className='header__dropdown-content'>
                      <div className="header__dropdown--left">
                        <Link to="/web-development">
                          <li className="header__dropdown-item">
                              <IconBox
                                boxSize={40}
                                imgPath={LaptopIcon}

                                iconWidth={26} 
                                iconHeight={26}

                                circleSize = {12}
                                top = {20}
                              />
                              Web Development
                          </li>                        
                        </Link>


                        <Link to={"/design"}>
                          <li className="header__dropdown-item">
                              <IconBox
                                boxSize={40}
                                imgPath={PalleteIcon}

                                iconWidth={26} 
                                iconHeight={26}

                                circleSize = {12}
                                top = {20}
                              />
                              Design / Redesign / Logo
                          </li>
                        </Link>

                        <Link to={"/poster-billboards"}>
                          <li className="header__dropdown-item">
                              <IconBox
                                boxSize={40}
                                imgPath={PosterIcon}

                                iconWidth={26} 
                                iconHeight={26}

                                circleSize = {12}
                                top = {20}
                              />
                              Posters / Billboards 
                          </li>
                        </Link>

                      </div>


                      <div className="header__dropdown--right">

                        <Link to={"/mobile-design"}>
                          <li className="header__dropdown-item">
                              <IconBox
                                boxSize={40}
                                imgPath={PhoneIcon}

                                iconWidth={26} 
                                iconHeight={26}

                                circleSize = {12}
                                top = {20}
                              />
                              Mobile design
                          </li>
                        </Link>

                        <Link to={"/business-card-leaflets"}>
                          <li className="header__dropdown-item">
                              <IconBox
                                boxSize={40}
                                imgPath={CardIcon}

                                iconWidth={26} 
                                iconHeight={26}

                                circleSize = {12}
                                top = {20}
                              />
                              Business card / Leaflets
                          </li>
                        </Link>

                      </div>
                  </ul>
                </div>
              </li>
              <li onClick={() => handleScrollToSection('portfolio')} className="header__item">Portfolio</li>
              <li onClick={() => handleScrollToSection('contacts')} className="header__item">Contacts</li>
            </ul>
          </nav>

          <button className="header__btn">
            <span>Contacts</span> 
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
                    <p>About</p>
                  </div>
                  <div onClick={() => handleScrollToSection('services')} className="header__menu-item">
                    <div className='header__menu-item__order'>02</div>
                    <div className='header__menu-item__rhombus'></div>

                    <p>Services</p>
                  </div>
                  <div onClick={() => handleScrollToSection('portfolio')} className="header__menu-item">
                    <div className='header__menu-item__order'>03</div>
                    <div className='header__menu-item__rhombus'></div>
                    <p>Portfolio</p>
                  </div>
                  <div onClick={() => handleScrollToSection('contacts')} className="header__menu-item">
                    <div className='header__menu-item__order'>04</div>
                    <div className='header__menu-item__rhombus'></div>
                    <p>Contacts</p>
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
          <strong>WebTime</strong> <strong>―</strong> your time with webtime, where design and development converge.
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
            <div className="intro__card-header">
              <h4 className="intro__card-title">Website & design</h4>

              <p className="intro__card-price">from: 700$</p>
            </div>

            <div className="intro__card-img intro__card-img--1"></div>

            <GradientBtn
              text="View more"
              width="100%"
              height="50"
            />
          </SwiperSlide>

          <SwiperSlide className="intro__card">
            <div className="intro__card-header">
              <h4 className="intro__card-title">Web design</h4>

              <p className="intro__card-price">from: 400$</p>
            </div>

            <div className="intro__card-img intro__card-img--2"></div>

            <GradientBtn
              text="View more"
              width="100%"
              height="50"
            />
          </SwiperSlide>

          <SwiperSlide className="intro__card">
            <div className="intro__card-header">
              <h4 className="intro__card-title">Poster</h4>

              <p className="intro__card-price">from: 250$</p>
            </div>  

            <div className="intro__card-img intro__card-img--3"></div>

            <GradientBtn
              text="View more"
            />
          </SwiperSlide>

          <SwiperSlide className="intro__card">
            <div className="intro__card-header">
              <h4 className="intro__card-title">Business cards</h4>

              <p className="intro__card-price">from: 100$</p>
            </div>

            <div className="intro__card-img intro__card-img--4"></div>

            <GradientBtn
              text="View more"
              width="100%"
              height="50"
            />
          </SwiperSlide>
        </Swiper>

      </section>


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
    </section>
  )
}

export default Home;
