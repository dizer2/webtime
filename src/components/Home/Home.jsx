import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import "./style/home.css";
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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  const [positionX, setPosotionX] = useState(0);
  const [positionY, setPosotionY] = useState(0);

  useEffect(() => {
    const mouseMove = e => {
      console.log(e)
      const positionX = e.clientX;
      const positionY = e.clientY;
      setPosotionX(positionX)
      setPosotionY(positionY)

      setMousePosition({
        x: positionX,
        y: positionY,
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);



  const variants = {
    default: {
      x: positionX - 16,
      y: positionY - 16,
      backgroundColor: "rgb(0, 0, 0)",
      mixBlendMode: "difference"
    },
    text: {
      height: 100,
      width: 100,
      x: positionX- 50,
      y: positionY - 50,
      mixBlendMode: "normal"
    }
  }




  const textEnter = (e) =>  {
    setCursorVariant("text");
  }
  
  const textLeave = (e) => {
    setCursorVariant("default");
  } 


  return (
	<section className='home'>
    <div
      style={{ top: mousePosition.y, left: mousePosition.x }}
      className='cursor-mini'
      variants={variants}
      animate={cursorVariant}
    ></div>
    
    <motion.div
      className='cursor'
      variants={variants}
      animate={cursorVariant}
    />




    <header className="home__header">

        <div className="header__logo">
          <Logo/>
        </div>

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">About</li>
            <li className="header__item header__dropdown">
              Services 
              <svg className='header__dropdown-arrow' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M5.70696 10.4899C5.31643 10.8804 5.31643 11.5136 5.70696 11.9041L10.5992 16.7915C11.3804 17.5719 12.6462 17.5716 13.427 16.7909L18.3173 11.9005C18.7079 11.51 18.7079 10.8768 18.3173 10.4863C17.9268 10.0957 17.2936 10.0957 16.9031 10.4863L12.7175 14.6719C12.327 15.0625 11.6938 15.0624 11.3033 14.6719L7.12117 10.4899C6.73065 10.0993 6.09748 10.0993 5.70696 10.4899Z" fill="white"/>
              </svg>


              <div className="header__dropdown-content__overlay">
                <ul className='header__dropdown-content'>
                    <div className="header__dropdown--left">
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
                    </div>


                    <div className="header__dropdown--right">

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
                    </div>
                </ul>
              </div>

            </li>
            <li className="header__item">Portfolio</li>
            <li className="header__item">Contacts</li>
          </ul>
        </nav>

        <button
        className={`header__btn`}
        onMouseEnter={textEnter} onMouseLeave={textLeave}
        >
          <span>Contacts</span>

        {/* <motion.div
          className='header__btn-circle'
          variants={variants}
          animate={cursorVariant}
        /> */}
        </button>

    </header>



    <section className="home__intro">
      <h1 className="intro__title">
        <strong>WebTime</strong> <strong>―</strong> your time with webtime,  developer on web, design solutions.
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

            <p className="intro__card-price">start from: 700$</p>
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

            <p className="intro__card-price">start from: 400$</p>
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

            <p className="intro__card-price">start from: 250$</p>
          </div>  

          <div className="intro__card-img intro__card-img--3"></div>

          <GradientBtn
            text="View more"
            width="100%"
            height="50"
          />
        </SwiperSlide>

        <SwiperSlide className="intro__card">
          <div className="intro__card-header">
            <h4 className="intro__card-title">Business cards</h4>

            <p className="intro__card-price">start from: 100$</p>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M15 43.8888L17.1524 35.8856C15.4165 32.7679 14.865 29.1299 15.5991 25.6391C16.3332 22.1482 18.3036 19.0387 21.1488 16.8812C23.9939 14.7237 27.523 13.6628 31.0884 13.8933C34.6538 14.1238 38.0164 15.6302 40.5591 18.136C43.1018 20.6418 44.6541 23.979 44.9311 27.5352C45.2081 31.0914 44.1912 34.6281 42.0671 37.4962C39.9429 40.3643 36.854 42.3715 33.3672 43.1495C29.8803 43.9275 26.2294 43.424 23.0843 41.7315L15 43.8888ZM23.4741 38.7366L23.9741 39.0327C26.2521 40.3807 28.9128 40.9385 31.5416 40.6193C34.1703 40.3 36.6194 39.1215 38.5073 37.2676C40.3951 35.4136 41.6156 32.9883 41.9786 30.3695C42.3415 27.7508 41.8266 25.0857 40.514 22.7896C39.2014 20.4935 37.1648 18.6954 34.7217 17.6755C32.2786 16.6555 29.5661 16.4711 27.007 17.1509C24.448 17.8307 22.186 19.3365 20.5736 21.4336C18.9613 23.5308 18.0891 26.1016 18.0931 28.7453C18.0909 30.9374 18.6982 33.087 19.8472 34.955L20.1608 35.471L18.9574 39.9379L23.4741 38.7366Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M35.6086 30.8003C35.3155 30.5643 34.9723 30.3981 34.6052 30.3146C34.2381 30.231 33.8567 30.2322 33.4901 30.318C32.9392 30.5465 32.5833 31.4094 32.2274 31.8408C32.1524 31.9443 32.0421 32.0168 31.9173 32.0449C31.7925 32.0729 31.6617 32.0545 31.5495 31.9931C29.5329 31.2046 27.8426 29.7586 26.7531 27.89C26.6602 27.7734 26.6162 27.6253 26.6304 27.477C26.6447 27.3287 26.716 27.1916 26.8294 27.0948C27.2263 26.7024 27.5178 26.2165 27.6768 25.6819C27.7121 25.0923 27.5768 24.5049 27.287 23.9899C27.063 23.2679 26.6366 22.625 26.0582 22.1372C25.76 22.0032 25.4292 21.9583 25.1059 22.0079C24.7826 22.0574 24.4806 22.1993 24.2363 22.4164C23.8121 22.7817 23.4755 23.2374 23.2511 23.7498C23.0267 24.2623 22.9203 24.8184 22.9398 25.3774C22.9411 25.6912 22.9809 26.0038 23.0584 26.308C23.2552 27.0388 23.5578 27.7371 23.9567 28.3807C24.2444 28.8737 24.5584 29.3509 24.8973 29.8104C25.9985 31.3197 27.3828 32.6011 28.9733 33.5836C29.7715 34.0829 30.6245 34.4888 31.5156 34.7934C32.4412 35.2123 33.4632 35.3731 34.4731 35.2587C35.0484 35.1718 35.5936 34.945 36.0605 34.5983C36.5275 34.2516 36.9019 33.7957 37.1509 33.2706C37.2972 32.9534 37.3416 32.5988 37.278 32.2554C37.1255 31.5532 36.1848 31.1387 35.6086 30.8003Z" fill="white"/>
            </svg>
          }
          size='default'
        />

        <SocialMedia
          linkPath="mailto:help.webtime@gmail.com"
          icon={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0385 43.3703H20.5972V29.8707L12.6562 23.915V40.988C12.6562 42.3062 13.7243 43.3703 15.0385 43.3703Z" fill="white"/>
              <path d="M39.6562 43.3703H45.2149C46.5331 43.3703 47.5972 42.3022 47.5972 40.988V23.915L39.6562 29.8707" fill="white"/>
              <path d="M39.6562 19.5472V29.8704L47.5972 23.9147V20.7384C47.5972 17.7923 44.2342 16.1128 41.8797 17.8796" fill="white"/>
              <path d="M20.5977 29.8701V19.5469L30.1268 26.6937L39.656 19.5469V29.8701L30.1268 37.0169" fill="white"/>
              <path d="M12.6562 20.7384V23.9147L20.5972 29.8704V19.5472L18.3738 17.8796C16.0153 16.1128 12.6562 17.7923 12.6562 20.7384Z" fill="white"/>
            </svg>
          }
          size='default'
        />

        <SocialMedia
          linkPath="#!"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M16.6921 28.9371C16.6921 28.9371 28.8989 23.7958 33.1324 21.9854C34.7554 21.2613 40.259 18.944 40.259 18.944C40.259 18.944 42.7992 17.9303 42.5875 20.3923C42.5169 21.4061 41.9524 24.9543 41.388 28.7922C40.5412 34.2232 39.6239 40.1611 39.6239 40.1611C39.6239 40.1611 39.4828 41.8266 38.2833 42.1162C37.0838 42.4059 35.1081 41.1025 34.7554 40.8128C34.4731 40.5956 29.4634 37.337 27.6288 35.7439C27.1349 35.3094 26.5705 34.4405 27.6993 33.4267C30.2395 31.0371 33.2736 28.0682 35.1081 26.1854C35.9549 25.3164 36.8015 23.2889 33.2736 25.7509C28.2639 29.2991 23.3247 32.6302 23.3247 32.6302C23.3247 32.6302 22.1957 33.3542 20.079 32.7025C17.9621 32.0509 15.4925 31.1819 15.4925 31.1819C15.4925 31.1819 13.7992 30.0957 16.6921 28.9371Z" fill="white"/>
            </svg>
          }
          size='default'
        />
      </div>

      <LocalisationField/>
    </footer>
	</section>
  )
}

export default Home;
