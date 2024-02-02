import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./style/portfolio.css"
import SubTitle from "../UI/SubTitle/SubTitle.jsx"
import Title from '../UI/Title/Title.jsx'
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"

const Portfolio = () => {
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
    <div className='portfolio'>
      <SubTitle text={"your project can be here"}/>
      <Title 
        text={"Projects that speak for themselves"}
        description={"portfolio"}
      />

      <div className="portfolio__box">
        <Swiper
          loop={true}
          slidesPerView='auto'
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="portfolio__slider mySwiper"
          ref={swiperRef}
		  effect="slide" // Set the slide effect
		  speed={500}
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
        </Swiper>
      </div>
    </div>
  );
}

export default Portfolio;
