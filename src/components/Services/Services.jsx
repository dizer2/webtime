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


const Services = () => {
    const arrowBtnColor = "linear-gradient(99deg, #2BBFFE 5.86%, #8629FD 54.99%, #FC4AF5 100%)"

  return (
    <section id='services' className='services'>
		<Reveal>
            <SubTitle text={"our services"}/>
		</Reveal>

        <RevealSecodary>
            <Title 
                text={"Bringing your ideas and wishes to life!"}
                description={"services"}
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

                        <h3 className="services__card-title">Web Development</h3>    
                        <p className="services__card-description">It's not just development, design and promotion. This is the solution of marketing and business tasks: financial and non-financial.</p>      
                    </div>

                    <Link to={"/web-development"}>
                        <ArrowBtn
                            text = "View more"
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

                        <h3 className="services__card-title">Design / Redesign / Logo</h3>    
                        <p className="services__card-description">We turn ideas into visual perfection. Your brand, our creativity. Create a unique design and expressive style with us.</p>      
                    </div>

                    <Link to={"/design"}>
                        <ArrowBtn
                            text = "View more"
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

                        <h3 className="services__card-title">Posters / Billboards </h3>    
                        <p className="services__card-description">We create bright posters and billboards for your unique idea. Every detail is a step towards impressive sensations that will leave a mark and attract attention.</p>      
                    </div>

                    <Link to={"/poster-billboards"}>
                        <ArrowBtn
                            text = "View more"
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

                        <h3 className="services__card-title">Mobile design</h3>    
                        <p className="services__card-description">We translate your ideas into mobile design, creating a harmonious interaction of form and function. Your brand has its own story, and we make it visible.</p>      
                    </div>

                    <Link to={"/mobile-design"}>
                        <ArrowBtn
                            text = "View more"
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

                        <h3 className="services__card-title">Business card / Leaflets</h3>    
                        <p className="services__card-description">Our mission is to attract attention and spread your brand. We don't just create ideas, we ignite them and help them blossom into unique brand experiences.</p>      
                    </div>

                    <Link to={"/business-card-leaflets"}>
                        <ArrowBtn
                            text = "View more"
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

                        <h3 className="services__card-title">Contact</h3>    
                        <p className="services__card-description">We create more than websites and design. We create the "face" of the brand, a sales tool, and an image weapon. Our special approach and experience help us in this.</p>      
                    </div>

                    <ArrowBtn
                        text = "Contact"
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