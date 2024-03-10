import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Імпортуємо стилі для навігації
import "./style/portfolio.css"
import SubTitle from "../UI/SubTitle/SubTitle.jsx"
import Title from '../UI/Title/Title.jsx'
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"


import { Parallax, Navigation } from 'swiper/modules'; // Додаємо модуль Navigation
import { Reveal } from '../utils/Reveal/Reveal.tsx'
import { RevealSecodary } from '../utils/RevealSecodary/RevealSecodary.tsx'
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
	const {t} = useTranslation();


  const swiperRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (swiperRef.current) {
        const swiper = swiperRef.current.swiper;
        if (event.deltaY > 0) {
          swiper.slideNext();
        } else {
          swiper.slidePrev();
        }
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div id='portfolio' className='portfolio'>
		  <Reveal>
        <SubTitle text={t('homePage.portfolio.banner')}/>
		  </Reveal>

      <RevealSecodary>
        <Title 
          text={t('homePage.portfolio.mainTitle.title')}
          description={t('homePage.portfolio.mainTitle.secondTitle')}
        />
		  </RevealSecodary>

      <div className="portfolio__box">
        <Swiper
          centeredSlides={true}
          loop={true}
          slidesPerView='auto'
          spaceBetween={20}
          className="portfolio__slider mySwiper"
          ref={swiperRef}
		      speed={300}
          parallax={true}
          modules={[Parallax, Navigation]} // Додаємо модуль Navigation
          navigation={{ // Додаємо параметри для навігації
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          <SwiperSlide className="portfolio__card"> 
            <div className="portfolio__card-img portfolio__card-img1">
              <img src={img1} alt="img" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="portfolio__card"> 
            <div className="portfolio__card-img portfolio__card-img2">
              <img src={img2} alt="img" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="portfolio__card"> 
            <div className="portfolio__card-img portfolio__card-img3">
              <img src={img3} alt="img" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="portfolio__card"> 
            <div className="portfolio__card-img portfolio__card-img4">
              <img src={img4} alt="img" />
            </div>
          </SwiperSlide>

          <div className="swiper-button-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.4408 23.445C17.6953 24.185 16.4865 24.185 15.741 23.445L5.55916 13.3398C4.81361 12.5998 4.81361 11.4002 5.55916 10.6602L15.741 0.554957C16.4865 -0.184984 17.6953 -0.184984 18.4408 0.554957C19.1864 1.2949 19.1864 2.49458 18.4408 3.23452L9.60895 12L18.4408 20.7655C19.1864 21.5054 19.1864 22.7051 18.4408 23.445Z" fill="white"/>
            </svg>
          </div> 
          
          <div className="swiper-button-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.55916 0.554956C6.30471 -0.184985 7.51348 -0.184985 8.25902 0.554956L18.4408 10.6602C19.1864 11.4002 19.1864 12.5998 18.4408 13.3398L8.25902 23.445C7.51348 24.185 6.30471 24.185 5.55916 23.445C4.81361 22.7051 4.81361 21.5054 5.55916 20.7655L14.391 12L5.55916 3.23452C4.81361 2.49458 4.81361 1.2949 5.55916 0.554956Z" fill="white"/>
            </svg>  
          </div> 
        </Swiper>
      </div>
    </div>
  );
}

export default Portfolio;
