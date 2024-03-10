import React from 'react'
import "./style/services.css"
import SubTitle from "../UI/SubTitle/SubTitle.jsx"
import Title from '../UI/Title/Title.jsx'
import IconBox from '../UI/IconBox/IconBox'
import ArrowBtn from '../UI/ArrowBtn/ArrowBtn.jsx'


import LaptopIcon from "./../main/img/laptop-icon.svg";
import PalleteIcon from "./../main/img/pallete-icon.svg";
import PosterIcon from "./../main/img/poster-icon.svg";
import MobileIcon from "./../main/img/phone-icon.svg";
import CardIcon from "./../main/img/card-icon.svg";
import PhoneIcon from "./../Services/img/phone-icon.svg";
import { Reveal } from '../utils/Reveal/Reveal.tsx'
import { RevealSecodary } from '../utils/RevealSecodary/RevealSecodary.tsx'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const Services = () => {
	const {t} = useTranslation();


    const arrowBtnColor = "linear-gradient(99deg, #2BBFFE 5.86%, #8629FD 54.99%, #FC4AF5 100%)"

  return (
    <section id='services' className='services'>
		<Reveal>
            <SubTitle text={t('homePage.services.banner')}/>
		</Reveal>

        <RevealSecodary>
            <Title 
                text={t('homePage.services.mainTitle.title')}
                description={t('homePage.services.mainTitle.secondTitle')}
            />
		</RevealSecodary>

        <div className="services__wrapper">
		    <RevealSecodary>
                <div className="services__card">
                    <div className="services__card-main">
                        <IconBox 
                            imgPath={LaptopIcon}
                            size = "medium"

                            circleSize = {26}
                            top = {50}
                        />

                        <h3 className="services__card-title">{t('homePage.main.services.service1')}</h3>    
                        <p className="services__card-description">{t('homePage.services.card1Description')}</p>      
                    </div>

                    <Link to={"/web-development"}>
                        <ArrowBtn
                            text = {t('homePage.main.viewMore')}
                            customGradient={{
                                direction: '99deg',
                                colors: ['#2BBFFE', '#8629FD', '#FC4AF5'],
                            }}
                        />     
                    </Link>
                </div>
            </RevealSecodary>

		    <RevealSecodary>
                <div className="services__card">
                    <div className="services__card-main">
                        <IconBox 
                            imgPath={PalleteIcon}
                            size = "medium"

                            circleSize = {26}
                            top = {50}
                        />

                        <h3 className="services__card-title">{t('homePage.main.services.service2')}</h3>    
                        <p className="services__card-description">{t('homePage.services.card2Description')}</p>      
                    </div>

                    <Link to={"/design"}>
                        <ArrowBtn
                            text = {t('homePage.main.viewMore')}
                            customGradient={{
                                direction: '99deg',
                                colors: ['#2BBFFE', '#8629FD', '#FC4AF5'],
                            }}
                            textColor={arrowBtnColor}
                        />      
                    </Link>

                </div>
            </RevealSecodary>


		    <RevealSecodary>
                <div className="services__card">
                    <div className="services__card-main">
                        <IconBox 
                            imgPath={PosterIcon}
                            size = "medium"

                            circleSize = {26}
                            top = {50}
                        />

                        <h3 className="services__card-title">{t('homePage.main.services.service3')}</h3>    
                        <p className="services__card-description">{t('homePage.services.card3Description')}</p>      
                    </div>

                    <Link to={"/poster-billboards"}>
                        <ArrowBtn
                            text = {t('homePage.main.viewMore')}
                            customGradient={{
                                direction: '99deg',
                                colors: ['#2BBFFE', '#8629FD', '#FC4AF5'],
                            }}
                            textColor={arrowBtnColor}
                        />    
                    </Link>
                </div>
            </RevealSecodary>



		    <RevealSecodary>
                <div className="services__card">
                    <div className="services__card-main">
                        <IconBox 
                            imgPath={MobileIcon}
                            size = "medium"

                            circleSize = {26}
                            top = {50}
                        />

                        <h3 className="services__card-title">{t('homePage.main.services.service4')}</h3>    
                        <p className="services__card-description">{t('homePage.services.card4Description')}</p>      
                    </div>

                    <Link to={"/mobile-design"}>
                        <ArrowBtn
                            text = {t('homePage.main.viewMore')}
                            customGradient={{
                                direction: '99deg',
                                colors: ['#2BBFFE', '#8629FD', '#FC4AF5'],
                            }}
                            textColor={arrowBtnColor}
                        />     
                    </Link>
                </div>
            </RevealSecodary>


            <RevealSecodary>
                <div className="services__card">
                    <div className="services__card-main">
                        <IconBox 
                            imgPath={CardIcon}
                            size = "medium"

                            circleSize = {26}
                            top = {50}
                        />

                        <h3 className="services__card-title">{t('homePage.main.services.service5')}</h3>    
                        <p className="services__card-description">{t('homePage.services.card5Description')}</p>      
                    </div>

                    <Link to={"/business-card-leaflets"}>
                        <ArrowBtn
                            text = {t('homePage.main.viewMore')}
                            customGradient={{
                                direction: '99deg',
                                colors: ['#2BBFFE', '#8629FD', '#FC4AF5'],
                            }}
                            textColor={arrowBtnColor}
                        />    
                    </Link>
                </div>
            </RevealSecodary>

		    <RevealSecodary>
                <div className="services__card services__card--contact">
                    <div className="services__card-main">
                        <IconBox 
                            imgPath={PhoneIcon}
                            theme = "white"
                            size = "medium"
                            circleSize = {26}
                            top = {50}
                        />

                        <h3 className="services__card-title">{t('homePage.main.services.service6')}</h3>    
                        <p className="services__card-description">{t('homePage.services.card6Description')}</p>      
                    </div>

                    <ArrowBtn
                        text = {t('homePage.main.services.service6')}
                        isGradient={false}
                        isWhite={true}
                    />      
                </div>
            </RevealSecodary>

        </div>
    </section>
  )
}

export default Services