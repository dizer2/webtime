import React, { useEffect, useState } from 'react'
import "./style/services-page.css"
import Logo from '../main/img/Logo'
import LocalisationField from '../UI/LocalisationField/LocalisationField'
import ArrowBtn from "./../UI/ArrowBtn/ArrowBtn"
import { Link, useLocation } from 'react-router-dom'
import BurgerMenu from '../UI/BurgerMenu/BurgerMenu'
import SocialMedia from '../UI/SocialMedia/SocialMedia'
import GradientBtn from '../UI/GradientBtn/GradientBtn'
import { useTranslation } from 'react-i18next'
import Loader from '../UI/Loader/Loader'

const ServicesPage = ({ currentPage, hideLoader, setHideLoader }) => {
    const { t } = useTranslation();
    const { pathname } = useLocation();
    const [currentLang, setCurrentLang] = useState(localStorage.getItem('i18nextLng'));


    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);


    // Scroll To Section 
    const handleScrollToSection = (sectionId) => {
        if(isMenuOpen) {
            menuHandleClick();
            document.querySelector(".header__menu-overlay").classList.add('_quickly-close-overlay');
        }
        
        document.body.classList.remove("_body-hidden", false); 

        if (!sectionId || sectionId === 'top') {
            window.scrollTo({ top: 100, behavior: 'smooth'});
            return;
        }
    
        const sectionRef = document.getElementById(sectionId);
        if (sectionRef) {
            sectionRef.scrollIntoView({  block: "center", behavior: 'smooth',  });
        }
    };




    // Burger Menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuHandleClick = () => {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    
        const bodyClassList = document.body.classList;
        const parentElement = document.getElementById('services-page');
        document.querySelector(".header__menu-overlay").classList.remove('_quickly-close-overlay');
        bodyClassList.add("_body-hidden");
    
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
   
   
    // Remove scroll-bar extension class
    const clearBodyClasses = () => {
        const pageKeys = Object.keys(t(`servicesPage`));

        // Iterate through the keys and remove corresponding classes
        pageKeys.forEach((pageKey) => {
            document.body.classList.remove(`_${pageKey}`);
        });
    };


    clearBodyClasses();
    document.body.classList.add(`_${currentPage}`);


    const goToHome = () => {
        document.body.classList.remove("_body-hidden");
        document.body.classList.remove(`_${currentPage}`);
    };
  

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


    // Let's discuss popup
    const [togglePopup, setTogglePopup] = useState(false);

    const handlePopupClick = () => {
        setTogglePopup(!togglePopup);

        if(!togglePopup) {
            document.body.classList.add("_body-hidden");
        } else {
            document.body.classList.remove("_body-hidden");
        }
    }


    // User Correct Path 
    const userPath = () => {
        t(`servicesPage.${currentPage}.title`)
        console.log((t(`servicesPage.${currentPage}.title`)).slice(`\\`));
    }

    const indexOf = (t(`servicesPage.${currentPage}.title`)).lastIndexOf("\\")
    const indexOfN = (t(`servicesPage.${currentPage}.title`)).lastIndexOf("n")
    console.log((t(`servicesPage.${currentPage}.title`)).slice(indexOfN - 1, indexOf));



    // Reset location href
    const resetHref = (page) => {
        let path = window.location.href;
        let lastSlashIndex  = path.lastIndexOf('/');

        window.location.href = `${path.substring(0, lastSlashIndex)}/${page}`;
    }


  return (
    <section id='services-page' className='services-page' style={{backgroundImage: `url(${t(`servicesPage.${currentPage}.backgroundImg`)})`}}>
      <div className="header__menu-overlay"></div>

      <Loader hideLoader={hideLoader} setHideLoader={setHideLoader}/>


      <div className={`services-page__popup-overlay ${togglePopup ? "_active" : ""}`}>  
        <div className={`services-page__popup`}>
            <div className="services-page__popup-header">
                <p className="services-page__popup-title">{t('servicesPage.main.contactBtn')}</p>
                
                <svg onClick={handlePopupClick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1016_357)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.446 10.0004L20 18.147L18.553 19.5242L10 11.3775L1.44601 19.5242L0 18.147L8.553 10.0004L0 1.8537L1.44601 0.476562L10 8.62323L18.553 0.476562L20 1.8537L11.446 10.0004Z" fill={`url(#${t(`servicesPage.${currentPage}.gradientParts.gradientID`)})`}/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear_1016_357" x1="0.904161" y1="3.22934" x2="22.0969" y2="6.69258" gradientUnits="userSpaceOnUse">
                    <stop stopColor={t(`servicesPage.${currentPage}.gradientParts.color1`)}/>
                    <stop offset={t(`servicesPage.${currentPage}.gradientParts.offset`)} stopColor={t(`servicesPage.${currentPage}.gradientParts.color2`)}/>
                    <stop offset="1" stopColor={t(`servicesPage.${currentPage}.gradientParts.color3`)}/>
                    </linearGradient>
                    <clipPath id="clip0_1016_357">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>

            <form action="" className='services-page__popup-form'>
                <div className="services-page__popup__input-box">
                    <span>{t('servicesPage.popup.name')}</span>
                    <input className='services-page__popup-input' type="text" placeholder={t('servicesPage.popup.namePlaceholder')} />
                </div>
                <div className="services-page__popup__input-box">
                    <span>{t('servicesPage.popup.phone')}</span>
                    <input className='services-page__popup-input' type="text" placeholder={t('servicesPage.popup.phonePlaceholder')} />
                </div>
                <div className="services-page__popup__input-box">
                    <span>{t('servicesPage.popup.email')}</span>
                    <input className='services-page__popup-input' type="text" placeholder={t('servicesPage.popup.emailPlaceholder')} />
                </div>
                <div className="services-page__popup__input-box" >
                    <span>{t('servicesPage.popup.message')}</span>
                    <div className="services-page__popup__textarea-wrapper">
                        <textarea className='services-page__popup-input services-page__popup-textarea' placeholder={t('servicesPage.popup.messagePlaceholder')}></textarea>
                    </div>
                </div>

                <GradientBtn 
                text={t('servicesPage.popup.sendBtn')}
                isSubmitBtn={true}/>
            </form>
        </div>
      </div>

        <div className={`services-page__menu ${scrollingDown ? "_menu-hide" : "_menu-show"} ${isUserOnTop || isMenuOpen ? "_hide-bg" : ""}`}>
            <div className="services-menu__wrapper">
                <Link to={'/'} onClick={goToHome} className="services-page__menu-logo--link">
                    <div className="services-page__menu-logo">
                        <Logo
                            gradientID = {t(`servicesPage.${currentPage}.gradientParts.gradientID`)}
                            color1 = {t(`servicesPage.${currentPage}.gradientParts.color1`)}
                            color2 = {t(`servicesPage.${currentPage}.gradientParts.color2`)}
                            color3 = {t(`servicesPage.${currentPage}.gradientParts.color3`)}
                            offset = {t(`servicesPage.${currentPage}.gradientParts.offset`)}
                        />
                    </div>
                </Link>

                <nav className="services-page__menu-nav">
                    <ul className="services-page__menu-list">
                        <Link to={"/"} onClick={goToHome}>
                            <li className="services-page__menu-item">
                                {t(`servicesPage.main.navHome`)}
                            </li>
                        </Link>
                        
                        {Object.values(t(`servicesPage.${currentPage}.menu`)).map((menuItem, index) => (
                            <Link key={index} onClick={() => {handleScrollToSection(menuItem.goTo); resetHref(menuItem.goTo);}} className="services-page__menu-item">
                                {menuItem.nav}
                            </Link>
                        ))}
                    </ul>   
                </nav>

                <LocalisationField
                    gradient = {t(`servicesPage.${currentPage}.mainColor`)}
                />


                <div className="header__menu-wrapper">
                    <div className="header__menu-header--phantom"></div>

                    <div className="header__menu-row">
                        <div className="header__menu-nav">
                            <div className="header__menu-list">
                                <Link to={"/"} onClick={goToHome}>
                                    <div className="header__menu-item">
                                        <div className='header__menu-item__order'>01</div>
                                        <div className='header__menu-item__rhombus'></div>
                                        <p>{t(`servicesPage.main.navHome`)}</p>
                                    </div>
                                </Link>

                                {Object.values(t(`servicesPage.${currentPage}.menu`)).map((menuItem, index) => (
                                    <Link key={index + 1} onClick={() => {handleScrollToSection(menuItem.goTo); clearBodyClasses(); resetHref(menuItem.goTo);}} to={menuItem.otherPage ? `${currentLang}/${menuItem.goTo}` : ""}  className="header__menu-item">
                                        <div className='header__menu-item__order'>{(index + 2).toString().padStart(2, '0')}</div>
                                        <div className='header__menu-item__rhombus'></div>
                                        <p>{menuItem.nav}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

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
                            gradient = {t(`servicesPage.${currentPage}.mainColor`)}
                        />
                    </footer>
                </div> 

                <BurgerMenu burgerOnClick={menuHandleClick}/>
            </div>
        </div>
        <div className="services-page__menu-phantom"></div>

        <div className="services-page__main" >
            <div className="services-page__user-location">
                <Link to={"/"} onClick={goToHome}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z" fill="white"/>
                    </svg>
                    
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.288944 10.7559C0.669493 11.0814 1.28654 11.0814 1.66708 10.7559L6.42981 6.67775C7.19031 6.02664 7.19001 4.9715 6.42923 4.32064L1.66357 0.244147C1.28303 -0.0813822 0.665985 -0.0813822 0.285426 0.244147C-0.0951421 0.569684 -0.0951421 1.09747 0.285426 1.42301L4.36428 4.91207C4.74492 5.23758 4.74492 5.7654 4.36428 6.09091L0.288944 9.57702C-0.0916245 9.90253 -0.0916245 10.4303 0.288944 10.7559Z" fill="white"/>
                    </svg>
                    
                    {t(`servicesPage.main.navHome`)} 
                    
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.288944 10.7559C0.669493 11.0814 1.28654 11.0814 1.66708 10.7559L6.42981 6.67775C7.19031 6.02664 7.19001 4.9715 6.42923 4.32064L1.66357 0.244147C1.28303 -0.0813822 0.665985 -0.0813822 0.285426 0.244147C-0.0951421 0.569684 -0.0951421 1.09747 0.285426 1.42301L4.36428 4.91207C4.74492 5.23758 4.74492 5.7654 4.36428 6.09091L0.288944 9.57702C-0.0916245 9.90253 -0.0916245 10.4303 0.288944 10.7559Z" fill="white"/>
                    </svg>
               </Link>
               
                {t(`servicesPage.${currentPage}.title`) === "Design / Redesign\nLogo" ? "Design / Redesign / Logo" : t(`servicesPage.${currentPage}.title`) }
            </div>
            
            <h2 className={`services-page__title`}>{t(`servicesPage.${currentPage}.title`)}</h2>
            <p className="services-page__subtitle">{t(`servicesPage.${currentPage}.subtitle`)}</p>

            <div className="services-page__services-container">
                {Object.values(t(`servicesPage.${currentPage}.examples`)).map((example, exampleIndex) => (
                    <div key={exampleIndex} onClick={() => handleScrollToSection(example.goTo)} className="services-page__service">
                        <img src={example.imgPath} className='services-page__service-img' alt={`The best ${example.title} from the webtime company || Website || Design || Agency`} />
                        <p className="services-page__service-title">{example.title}</p>
                    </div>
                ))}
            </div>

            {Object.values(t(`servicesPage.${currentPage}.services`)).map((block, blockIndex) => (
                <div key={blockIndex} id={block.blockID} className="services-page__description-box">
                    <div className="services-page__description-title">
                        <span style={{background: t(`servicesPage.${currentPage}.mainColor`)}}></span>
                        <p>{block.title}</p>
                        <span style={{background: t(`servicesPage.${currentPage}.mainColor`)}}></span>
                    </div>

                    <div className="services-page__description-tags__container">
                        <p className="services-page__description-tag">{block.tag1}</p>
                        <p className="services-page__description-tag">{block.tag2}</p>
                        <p className="services-page__description-tag">{block.tag3}</p>
                        <p className="services-page__description-tag">{block.tag4}</p>
                    </div>

                    <p className="services-page__description">
                        {block.description}
                    </p>

                    <ArrowBtn
                        handleClick = {handlePopupClick}
                        text={t(`servicesPage.main.contactBtn`)}
                        customGradient={{
                            direction: `${t(`servicesPage.${currentPage}.gradientParts.offset`) * 10}deg`,
                            colors: [t(`servicesPage.${currentPage}.gradientParts.color1`), t(`servicesPage.${currentPage}.gradientParts.color2`), t(`servicesPage.${currentPage}.gradientParts.color3`)],
                        }}
                        gradientID = {t(`servicesPage.${currentPage}.gradientParts.gradientID`)}
                        color1 = {t(`servicesPage.${currentPage}.gradientParts.color1`)}
                        color2 = {t(`servicesPage.${currentPage}.gradientParts.color2`)}
                        color3 = {t(`servicesPage.${currentPage}.gradientParts.color3`)}
                        offset = {t(`servicesPage.${currentPage}.gradientParts.offset`)}
                    />

                </div>
            ))}
        </div>
    </section>
  )
}

export default ServicesPage