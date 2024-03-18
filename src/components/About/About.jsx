import React, { useEffect, useRef, useState } from 'react';
import "./style/about.css"
import SubTitle from "../UI/SubTitle/SubTitle.jsx"
import Title from '../UI/Title/Title.jsx'
import IconBox from '../UI/IconBox/IconBox.jsx';
import img1 from "./img/img1.svg";
import img2 from "./img/img2.svg";
import img3 from "./img/img3.svg";
import img4 from "./img/img4.svg";
import { Reveal } from '../utils/Reveal/Reveal.tsx';
import { RevealSecodary } from '../utils/RevealSecodary/RevealSecodary.tsx';
import { useTranslation } from 'react-i18next';

const About = ({ setCalculatorMenu }) => {
	const {t} = useTranslation();

    const [showText, setShowText] = useState(true);
    const [textHeight, setTextHeight] = useState(0);
    const [defulTextHeight, setDefulTextHeight] = useState(0);

    const aboutDescriptionRef = useRef(null);
    const aboutDescriptionRef2 = useRef(null);

    const aboutDescription = showText ? "about-us__box3-description" : "about-us__box3-description about-us__box3-description--active";
    const aboutLine = showText ? "about-us__button-line" : "about-us__button-line about-us__button-line--active";

	
    useEffect(() => {
        function handleResize() {
            if (aboutDescriptionRef2.current) {
                setDefulTextHeight(aboutDescriptionRef2.current.scrollHeight);
                setTextHeight(aboutDescriptionRef2.current.scrollHeight);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const showTextHandle = () => {
		const button = document.querySelector('.about-us__button');

		if (button) {
			button.classList.toggle('about-us__button--open');
		}	
        setShowText(!showText);
        if (showText === false) {
            setTextHeight(defulTextHeight);
        } else {
            if (aboutDescriptionRef.current) {
                setTextHeight(aboutDescriptionRef.current.scrollHeight);
            }
        }
    }

	// useEffect(() => {
    //     const handleScroll = (entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting && entry.target.id === 'about') {
    //                 setCalculatorMenu(true);
    //             }
    //         });
    //     };

    //     const observer = new IntersectionObserver(handleScroll, {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.5
    //     });

    //     const aboutSection = document.getElementById('about');
    //     if (aboutSection) {
    //         observer.observe(aboutSection);
    //     }

    //     return () => {
    //         if (aboutSection) {
    //             observer.unobserve(aboutSection);
    //         }
    //     };
    // }, []);

	  
  return (
	<div id='about' className='about-us'>

		<Reveal>
			<SubTitle text={t('homePage.about.banner1')}/>
		</Reveal>

		<RevealSecodary>
			<Title 
				text={t('homePage.about.mainTitle.title')}
				description={t('homePage.about.mainTitle.secondTitle')}
			/>
		</RevealSecodary>
	
		<div className="about-us__box">

			<Reveal>
				<div className="about-us__box-column">
					<div className="about-us__position">
						<p className='about-us__box-subTitle'>01</p>
						<p className='about-us__box-line'></p>
					</div>
					<p className='about-us__box-description'>{t('homePage.about.columnText1')}</p>
				</div>
			</Reveal>

			<Reveal>
				<div className="about-us__box-column">
					<div className="about-us__position">
						<p className='about-us__box-subTitle'>02</p>
						<p className='about-us__box-line'></p>
					</div>
					<p className='about-us__box-description'>{t('homePage.about.columnText1')}</p>
				</div>
			</Reveal>

			<Reveal>
				<div className="about-us__box-column">
					<div className="about-us__position">
						<p className='about-us__box-subTitle'>03</p>
						<p className='about-us__box-line'></p>
					</div>
					<p className='about-us__box-description'>{t('homePage.about.columnText1')}</p>
				</div>
			</Reveal>

		</div>

	
		<div className="about-us__box2">
			<Reveal>
				<SubTitle text={t('homePage.about.banner2')}/>
			</Reveal>

			<div className="about-us__box2-container">
				<div className="about-us__box2-cart about-us__box2-cart1">
					<RevealSecodary>
						<div className="about-us__iconBox">
							<IconBox
								boxSize={200}
								imgPath={img1}

								iconWidth={120} 
								iconHeight={120}

								circleSize = {60}
								top = {50}
							/>
						</div>
					</RevealSecodary>


					<Reveal>
						<div className="about-us__cart-description">{t('homePage.about.cardDescription1')}</div>
					</Reveal>
				</div>

				<div className="about-us__box2-cart about-us__box2-cart2">

					<RevealSecodary>
						<div className="about-us__iconBox">
							<IconBox
								boxSize={200}
								imgPath={img2}

								iconWidth={120} 
								iconHeight={120}

								circleSize = {60}
								top = {50}
							/>
						</div>
					</RevealSecodary>
					<Reveal>
						<div className="about-us__cart-description">{t('homePage.about.cardDescription2')}</div>
					</Reveal>
				</div>

				<div className="about-us__box2-cart about-us__box2-cart3">

					<RevealSecodary>
						<div className="about-us__iconBox">
							<IconBox
								boxSize={200}
								imgPath={img3}

								iconWidth={120} 
								iconHeight={120}

								circleSize = {60}
								top = {50}
							/>
						</div>
					</RevealSecodary>

					
					<Reveal>
						<div className="about-us__cart-description">{t('homePage.about.cardDescription3')}</div>
					</Reveal>
				</div>

				<div className="about-us__box2-cart about-us__box2-cart4">
					<RevealSecodary>
						<div className="about-us__iconBox">
							<IconBox
								boxSize={200}
								imgPath={img4}

								iconWidth={120} 
								iconHeight={120}

								circleSize = {60}
								top = {50}
							/>
						</div>
					</RevealSecodary>


					<Reveal>
						<div className="about-us__cart-description">{t('homePage.about.cardDescription4')}</div>
					</Reveal>
				</div>
			</div>

		</div>

		<div className="about-us__box3">
				<div className="about-us__box3-top">
					<Reveal>
						<SubTitle text={t('homePage.about.banner3')}/>
					</Reveal>

					<RevealSecodary>
						<div onClick={showTextHandle} className="about-us__button">
							<div className={aboutLine}></div>
							<div className="about-us__button-line"></div>
						</div>
					</RevealSecodary>

				</div>

			<RevealSecodary>
				<div style={{maxHeight: textHeight}} className={aboutDescription} ref={aboutDescriptionRef}>
					<p ref={aboutDescriptionRef2}>{t('homePage.about.websiteCreation.paragraph1')}</p>

					<p className='about-us__margin'>{t('homePage.about.websiteCreation.paragraph2')}</p>
					
					<p className='about-us__margin2 about-us__bold'>{t('homePage.about.websiteCreation.title1')}</p>

					<p className='about-us__margin'>{t('homePage.about.websiteCreation.paragraph3')}</p>

					<p className='about-us__margin2 about-us__bold'>{t('homePage.about.websiteCreation.textBold1')} <span>{t('homePage.about.websiteCreation.paragraph4')}</span></p>

					<p className='about-us__margin2 about-us__bold'>{t('homePage.about.websiteCreation.textBold2')} <span>{t('homePage.about.websiteCreation.paragraph5')}</span></p>

					<p className='about-us__margin2 about-us__bold'>{t('homePage.about.websiteCreation.title2')}</p>

					<p className='about-us__margin'>{t('homePage.about.websiteCreation.paragraph6')}</p>

					<p className='about-us__margin'>{t('homePage.about.websiteCreation.paragraph7')}</p>

					<p className='about-us__margin'>{t('homePage.about.websiteCreation.paragraph8')}</p>

					<p className='about-us__margin'>{t('homePage.about.websiteCreation.paragraph9')}</p>

					<p className='about-us__margin2 about-us__bold'>{t('homePage.about.websiteCreation.title3')}</p>

					<p className='about-us__margin'>{t('homePage.about.websiteCreation.paragraph10')}</p>

					<p className='about-us__margin'>{t('homePage.about.websiteCreation.paragraph11')}</p>

					<p className='about-us__margin'>{t('homePage.about.websiteCreation.paragraph12')}</p>

					<p className='about-us__margin'>{t('homePage.about.websiteCreation.paragraph13')}</p>
				</div>
			</RevealSecodary>
		</div>
	</div>
  )
}

export default About;
