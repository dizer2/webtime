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


const Services = () => {
    const arrowBtnColor = "linear-gradient(99deg, #2BBFFE 5.86%, #8629FD 54.99%, #FC4AF5 100%)"


  return (
    <section className='services'>
        <SubTitle text={"our services"}/>
      
        <Title 
            text={"Bringing your ideas and wishes to life!"}
            description={"services"}
        />

        <div className="services__wrapper">
            <div className="services__card">
                <div className="services__card-main">
                    <IconBox 
                        boxSize={84}
                        imgPath={LaptopIcon}

                        iconWidth={54} 
                        iconHeight={54}

                        circleSize = {26}
                        top = {50}
                    />

                    <h3 className="services__card-title">Web Development</h3>    
                    <p className="services__card-description">It's not just development, design and promotion. This is the solution of marketing and business tasks: financial and non-financial. You're not just buying man-hours, you're buying our experience.</p>      
                </div>

                <ArrowBtn
                    text = "View more"
                    customGradient={{
                        direction: '99deg',
                        colors: ['#2BBFFE', '#8629FD', '#FC4AF5'],
                    }}
                />        
            </div>
            <div className="services__card">
                <div className="services__card-main">
                    <IconBox 
                        boxSize={84}
                        imgPath={PalleteIcon}

                        iconWidth={54} 
                        iconHeight={54}

                        circleSize = {26}
                        top = {50}
                    />

                    <h3 className="services__card-title">Design / Redesign / Logo</h3>    
                    <p className="services__card-description">It's not just development, design and promotion. This is the solution of marketing and business tasks: financial and non-financial. You're not just buying man-hours, you're buying our experience.</p>      
                </div>

                <ArrowBtn
                    text = "View more"
                    customGradient={{
                        direction: '99deg',
                        colors: ['#2BBFFE', '#8629FD', '#FC4AF5'],
                    }}
                    textColor={arrowBtnColor}
                />      
            </div>
            <div className="services__card">
                <div className="services__card-main">
                    <IconBox 
                        boxSize={84}
                        imgPath={PosterIcon}

                        iconWidth={54} 
                        iconHeight={54}

                        circleSize = {26}
                        top = {50}
                    />

                    <h3 className="services__card-title">Posters / Billboards </h3>    
                    <p className="services__card-description">It's not just development, design and promotion. This is the solution of marketing and business tasks: financial and non-financial. You're not just buying man-hours, you're buying our experience.</p>      
                </div>

                <ArrowBtn
                    text = "View more"
                    customGradient={{
                        direction: '99deg',
                        colors: ['#2BBFFE', '#8629FD', '#FC4AF5'],
                    }}
                    textColor={arrowBtnColor}
                />      
            </div>
            <div className="services__card">
                <div className="services__card-main">
                    <IconBox 
                        boxSize={84}
                        imgPath={MobileIcon}

                        iconWidth={54} 
                        iconHeight={54}

                        circleSize = {26}
                        top = {50}
                    />

                    <h3 className="services__card-title">Mobile design</h3>    
                    <p className="services__card-description">It's not just development, design and promotion. This is the solution of marketing and business tasks: financial and non-financial. You're not just buying man-hours, you're buying our experience.</p>      
                </div>

                <ArrowBtn
                    text = "View more"
                    customGradient={{
                        direction: '99deg',
                        colors: ['#2BBFFE', '#8629FD', '#FC4AF5'],
                    }}
                    textColor={arrowBtnColor}
                />      
            </div>
            <div className="services__card">
                <div className="services__card-main">
                    <IconBox 
                        boxSize={84}
                        imgPath={CardIcon}

                        iconWidth={54} 
                        iconHeight={54}

                        circleSize = {26}
                        top = {50}
                    />

                    <h3 className="services__card-title">Business card / Leaflets</h3>    
                    <p className="services__card-description">It's not just development, design and promotion. This is the solution of marketing and business tasks: financial and non-financial. You're not just buying man-hours, you're buying our experience.</p>      
                </div>

                <ArrowBtn
                    text = "View more"
                    customGradient={{
                        direction: '99deg',
                        colors: ['#2BBFFE', '#8629FD', '#FC4AF5'],
                    }}
                    textColor={arrowBtnColor}
                />      
            </div>
            <div className="services__card services__card--contact">
                <div className="services__card-main">
                    <IconBox 
                        boxSize={84}
                        imgPath={PhoneIcon}
                        theme = "white"

                        iconWidth={54} 
                        iconHeight={54}

                        circleSize = {26}
                        top = {50}
                    />

                    <h3 className="services__card-title">Design / Redesign / Logo</h3>    
                    <p className="services__card-description">It's not just development, design and promotion. This is the solution of marketing and business tasks: financial and non-financial. You're not just buying man-hours, you're buying our experience.</p>      
                </div>

                <ArrowBtn
                    text = "Contact"
                    isGradient={false}
                    isWhite={true}
                />      
            </div>
            
        </div>
    </section>
  )
}

export default Services