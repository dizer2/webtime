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

const ServicesPage = ({ currentPage, hideLoader, setHideLoader}) => {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    // const pagesData = {
        // "web-development": {
        //     backgroundImg: require('./img/0-background.svg').default,
        //     mainColor: "linear-gradient(99deg, #2BBFFE 5.86%, #8629FD 54.99%, #FC4AF5 100%)",
        //     gradientParts: {
        //         gradientID: "paint0_linear_866_370",
        //         color1: "#2BBFFE",
        //         color2: "#8629FD",
        //         color3: "#FC4AF5",
        //         offset: "0.521875",
        //     },
        //     menu: {
        //         nav1: {
        //             nav: "Corporate sites",   
        //             goTo: "corporate-sites",
        //         },
        //         nav2: {
        //             nav: "Landing page", 
        //             goTo: "landing-page",
        //         },
        //         nav3: {
        //             nav: "Online stores",   
        //             goTo: "online-stores",
        //         },
        //         nav4: {
        //             nav: "Highly loaded services & portals",   
        //             goTo: "services-portals",
        //         },
        //         nav5: {
        //             nav: "WOW sites",   
        //             goTo: "wow-sites",
        //         },
        //         nav6: {
        //             nav: "Portfolio",   
        //             goTo: "personal-portfolio",
        //         }
        //     },
        //     title: "Web Development",
        //     subtitle: "It's not just development, design and promotion. This is the solution of marketing and business tasks: financial and non-financial. You're not just buying man-hours, you're buying our experience, expertise and skills to create the best sites in your niche.",
        //     examples: {
        //         example1: {
        //             title: "Corporate Sites",
        //             imgPath: require('./img/corporate-sites.jpg'),
        //             goTo: "corporate-sites",
        //         },
        //         example2: {
        //             title: "Landing Page",
        //             imgPath: require('./img/landing-page.jpg'),
        //             goTo: "landing-page",
        //         },
        //         example3: {
        //             title: "Online Stores",
        //             imgPath: require('./img/online-stores.jpg'),
        //             goTo: "online-stores",
        //         },
        //         example4: {
        //             title: "Services / Portals",
        //             imgPath: require('./img/services-portals.jpg'),
        //             goTo: "services-portals",
        //         },
        //         example5: {
        //             title: "WOW Sites",
        //             imgPath: require('./img/wow-sites.jpg'),
        //             goTo: "wow-sites",
        //         },
        //         example6: {
        //             title: "Personal / Portfolio",
        //             imgPath: require('./img/personal-portfolio.jpg'),
        //             goTo: "personal-portfolio",
        //         },
        //     },
        //     services: {
        //         block1: {
        //             title: "Corporate sites",   
        //             blockID: "corporate-sites",

        //             tag1: "Corporate Web",
        //             tag2: "Branding",
        //             tag3: "Business Online",
        //             tag4: "Corporate Identity",

        //             description: "For businesses looking to establish a strong online presence, our corporate site development services are tailored to reflect your brand identity, values, and objectives. We ensure a professional and cohesive representation of your business that resonates with your target audience.",
        //         },
        //         block2: {
        //             title: "Landing page", 
        //             blockID: "landing-page",

        //             tag1: "Impactful Design",
        //             tag2: "Web Landing",
        //             tag3: "High Conversions",
        //             tag4: "Conversion Optimized", 

        //             description: "Crafting impactful landing pages is crucial for conversions. We specialize in creating visually appealing and high-converting landing pages that captivate visitors, driving them to take the desired actions and boosting your business goals.",
        //         },
        //         block3: {
        //             title: "Online stores",   
        //             blockID: "online-stores",

        //             tag1: "Ecommerce Hub",
        //             tag2: "Secure Shopping",
        //             tag3: "Digital Store",
        //             tag4: "Shop Online",

        //             description: "E-commerce is at the heart of modern business. Our online store development services are designed to provide seamless and secure shopping experiences for your customers. From user-friendly interfaces to robust payment systems, we ensure a complete e-commerce solution.",
        //         },
        //         block4: {
        //             title: "Services / Portals",   
        //             blockID: "services-portals",

        //             tag1: "Scalable Web",
        //             tag2: "Heavy Traffic",
        //             tag3: "Advanced Services",
        //             tag4: "High LoadDev",

        //             description: "For projects that demand scalability and high performance, our development team is adept at creating highly loaded services and portals. We leverage versatile frameworks to handle complex functionalities, ensuring a smooth user experience even under heavy traffic.",
        //         },
        //         block5: {
        //             title: "WOW sites",   
        //             blockID: "wow-sites",

        //             tag1: "Innovative Design",
        //             tag2: "3D Effects",
        //             tag3: "Animation",
        //             tag4: "Visual Impact",

        //             description: "Sometimes, you crave a website that transcends the ordinary. Our WOW sites are crafted to make a lasting impact, boasting cutting-edge animations, immersive 3D effects, and innovative design. We strive to ensure your website not only stands out but captivates your audience with dynamic visual experiences.",
        //         },
        //         block6: {
        //             title: "Personal / Portfolio",   
        //             blockID: "personal-portfolio",

        //             tag1: "Showcase Work",
        //             tag2: "Project Gallery",
        //             tag3: "Professional Portfolios",
        //             tag4: "Visual Resume",

        //             description: "Showcasing your work effectively is essential. Our portfolio development services help you display your achievements, projects, and capabilities in a visually compelling manner, establishing credibility and attracting potential clients. At Webtime, we guide you step by step through the web development process, ensuring careful consideration of your unique needs and objectives. We understand that trusting a company with your business is a significant decision, and we're committed to exceeding your expectations. Let's embark on the journey of creating a website that not only meets but surpasses your vision.",
        //         },
        //     },
        // }
        // "design": {
        //     backgroundImg: require('./img/1-background.svg').default,
        //     mainColor: "linear-gradient(99deg, #FE842B 5.86%, #FD2929 51.61%, #FF006B 100%)",
        //     gradientParts: {
        //         gradientID: "paint0_linear_866_375",
        //         color1: "#FE842B",
        //         color2: "#FD2929",
        //         color3: "#FF006B",
        //         offset: "0.486",
        //     },
        //     menu: {
        //         nav1: {
        //             nav: "Design",
        //             goTo: "design",
        //         },
        //         nav2: {
        //             nav: "Redesign",
        //             goTo: "redesign",
        //         },
        //         nav3: {
        //             nav: "Logo",
        //             goTo: "logo",
        //         },
        //         nav4: {
        //             nav: "Mobile design",
        //             goTo: "mobile-design",
        //             otherPage: true,
        //         },
        //     },
        //     title: "Design / Redesign\nLogo",
        //     subtitle: "Make a distinctive mark in the business world with our design services. Whether you need a completely new logo, a stylish redesign, or an inspiring brand, our team of experienced designers is ready to bring your ideas to life. Elevate your brand to new heights with our creative solutions designed to highlight your uniqueness and capture the attention of your target audience.",
        //     examples: {
        //         example1: {
        //             title: "Web Design",
        //             imgPath: require('./img/web-design.jpg'),
        //             goTo: "design",
        //         },
        //         example2: {
        //             title: "Web Redesign",
        //             imgPath: require('./img/web-redesign.jpg'),
        //             goTo: "redesign",
        //         },
        //         example3: {
        //             title: "Logo",
        //             imgPath: require('./img/logo.jpg'),
        //             goTo: "logo",
        //         },
        //     },
        //     services: {
        //         block1: {
        //             title: "Web Design",   
        //             blockID: "design",

        //             tag1: "Any scale",
        //             tag2: "Multy page",
        //             tag3: "Convenience",
        //             tag4: "Art",

        //             description: "Unlock the full potential of your online presence with our cutting-edge Web Design services. Our expert team crafts visually stunning and user-friendly websites tailored to elevate your brand. From intuitive navigation to captivating aesthetics, we ensure a seamless user experience that leaves a lasting impression. Transform your digital identity and stand out in the crowded online landscape. Elevate your business with our Web Design expertise – where innovation meets impact.",
        //         },
        //         block2: {
        //             title: "Web Redesign", 
        //             blockID: "redesign",

        //             tag1: "Modern",
        //             tag2: "New technologies",
        //             tag3: "Improvement",
        //             tag4: "Update",  

        //             description: "Experience a digital makeover with our Redesign services. Whether refreshing your current website or undergoing a complete transformation, our skilled team enhances visual appeal, functionality, and user engagement. Elevate your brand's online presence, captivate your audience, and stay ahead in the ever-evolving digital landscape. Unleash the power of redesign to redefine success in the virtual realm – where your brand's evolution meets excellence.",
        //         },
        //         block3: {
        //             title: "Logo", 
        //             blockID: "logo",

        //             tag1: "Branding",
        //             tag2: "Graphic design",
        //             tag3: "Unique",
        //             tag4: "Emblem",

        //             description: "Forge a memorable brand identity with our Logo Design services. Our creative team specializes in designing logos that resonate with your brand's essence. From timeless simplicity to bold innovation, we tailor logos that leave a lasting imprint. Elevate your brand recognition and make a statement in any market. Discover the art of visual storytelling with our Logo Design expertise – where every logo is a unique symbol of your brand's journey and aspirations.",
        //         },
        //     },
        // },
    //     "poster-billboards": {
    //         backgroundImg: require('./img/2-background.svg').default,
    //         mainColor: "linear-gradient(285deg, #68E0CF 0%, #3DCDFF 53.88%, #209CFF 104.43%)",
    //         gradientParts: {
    //             gradientID: "paint0_linear_866_376",
    //             color1: "#68E0CF",
    //             color2: "#3DCDFF",
    //             color3: "#209CFF",
    //             offset: "0.516",
    //         },
    //         menu: {
    //             nav1: {
    //                 nav: "Posters",
    //                 goTo: "posters",
    //             },
    //             nav2: {
    //                 nav: "Billboards",
    //                 goTo: "billboards",
    //             },
    //             nav3: {
    //                 nav: "Business card",
    //                 goTo: "business-card-leaflets",
    //                 otherPage: true,
    //             },
    //             nav4: {
    //                 nav: "Leaflets",
    //                 goTo: "business-card-leaflets",
    //                 otherPage: true,
    //             },
    //         },
    //         title: "Posters / Billboards",
    //         subtitle: "Elevate your brand presence with our Poster and Billboard Design services. Our expert designers craft visually striking posters that captivate on a smaller scale, and bold billboards that dominate the urban skyline. From impactful imagery to compelling messaging, we ensure your brand stands out in both intimate and grand spaces. Make a powerful statement, spark interest, and leave a lasting impression with our Poster and Billboard Design expertise. Where creativity meets visibility, we turn your ideas into visual spectacles that demand attention.",
    //         examples: {
    //             example1: {
    //                 title: "Posters",
    //                 imgPath: require('./img/poster.jpg'),
    //                 goTo: "posters",
    //             },
    //             example2: {
    //                 title: "Billboards",
    //                 imgPath: require('./img/billboard.jpg'),
    //                 goTo: "billboards",
    //             },
    //         },
    //         services: {
    //             block1: {
    //                 title: "Posters",   
    //                 blockID: "posters",

    //                 tag1: "Poster Design",
    //                 tag2: "Multicolored",
    //                 tag3: "Event",
    //                 tag4: "Different Size",

    //                 description: "Transform your message into a visual masterpiece with our Poster Design services. Our skilled designers craft eye-catching posters that captivate audiences and leave a lasting impression. From impactful imagery to compelling copy, we ensure your poster stands out in any space. Elevate your promotional efforts, spark curiosity, and make a statement with our Poster Design expertise. Unleash the power of visual communication and turn heads with posters that speak louder than words.",
    //             },
    //             block2: {
    //                 title: "Billboards", 
    //                 blockID: "billboards",
                    
    //                 tag1: "Billboards Design",
    //                 tag2: "Attracting people",
    //                 tag3: "Advertising Boards",
    //                 tag4: "Large",  

    //                 description: "Maximize your brand visibility with our Billboard Design services. Our expert team creates captivating designs that dominate the skyline and command attention. From bold visuals to concise messaging, we ensure your billboard leaves a lasting impact on passersby. Elevate your outdoor advertising game, amplify brand recognition, and make a statement on the grand stage. Trust our Billboard Design expertise to transform your message into an unmissable spectacle in the urban landscape.",
    //             },
    //         },
    //     },
    //     "mobile-design": {
    //         backgroundImg: require('./img/3-background.svg').default,
    //         mainColor: "linear-gradient(99deg, #84FAB0 5.86%, #8FD3F4 100%)",
    //         gradientParts: {
    //             gradientID: "paint0_linear_866_377",
    //             color1: "#84FAB0",
    //             color2: "#8FD3F4",
    //             color3: "#8FD3F4",
    //             offset: "0.892222",
    //         },
    //         menu: {
    //             nav1: {
    //                 nav: "Mobile design",
    //                 goTo: "mobile-design",
    //             },
    //             nav2: {
    //                 nav: "Web design",
    //                 goTo: "design",
    //                 otherPage: true,
    //             },
    //             nav3: {
    //                 nav: "Web redesign",
    //                 goTo: "design",
    //                 otherPage: true,
    //             },
    //             nav4: {
    //                 nav: "Logo",
    //                 goTo: "design",
    //                 otherPage: true,
    //             },
    //         },
    //         title: "Mobile Design",
    //         subtitle: "Unique design for your mobile app is the key to a successful launch! Our mobile design specialists will create intuitive and stylish interfaces that not only attract attention but also ensure ease of use. Give your brand a standout look and make a lasting impression.",
    //         examples: {
    //             example1: {
    //                 title: "Mobile Design",
    //                 imgPath: require('./img/mobile-design.jpg'),
    //                 goTo: "mobile-design",
    //             },
    //         },
    //         services: {
    //             block1: {
    //                 title: "Mobile Design",   
    //                 blockID: "mobile-design",
                    
    //                 tag1: "App design",
    //                 tag2: "Mobility",
    //                 tag3: "Visual Touch",
    //                 tag4: "Multi-page",

    //                 description: "Immerse your audience in a mobile-friendly experience with our Mobile Design services. Our expert team specializes in creating intuitive and visually appealing mobile interfaces. From responsive layouts to user-centric navigation, we ensure your brand shines on every device. Elevate your digital reach, engage users effortlessly, and stay ahead in the mobile-centric landscape. Explore the art of mobile design with us – where innovation meets user satisfaction, creating a lasting impact on the go.",
    //             },
    //         },
    //     },
    //     "business-card-leaflets": {
    //         backgroundImg: require('./img/4-background.svg').default,
    //         mainColor: "linear-gradient(281deg, #000428 -7.61%, #1A55AC 35%, #004E92 100%)",
    //         gradientParts: {
    //             gradientID: "paint0_linear_866_341",
    //             color3: "#040D61",
    //             color2: "#1562D2",
    //             color1: "#004E92",
    //             offset: "0.396",
    //         },
    //         menu: {
    //             nav1: {
    //                 nav: "Business card",
    //                 goTo: "business-card",
    //             },
    //             nav2: {
    //                 nav: "Leaflets",
    //                 goTo: "leaflets",
    //             },
    //             nav3: {
    //                 nav: "Posters",
    //                 goTo: "poster-billboards",
    //                 otherPage: true,
    //             },
    //             nav4: {
    //                 nav: "Logo",
    //                 goTo: "poster-billboards",
    //                 otherPage: true,
    //             },
    //         },
    //         title: "Business card / Leaflets",
    //         subtitle: "Forge a lasting connection with our Business Card and Leaflet Design services. Our expert designers create business cards that embody professionalism and leaflets that tell your brand story succinctly. From impactful first impressions to comprehensive brand communication, our designs ensure you stand out. Elevate your networking and promotional strategies with our expertise, turning ordinary pieces into powerful brand assets. Make every exchange memorable – where business cards and leaflets become ambassadors of your brand identity.",
    //         examples: {
    //             example1: {
    //                 title: "Business Card",
    //                 imgPath: require('./img/business-card.jpg'),
    //                 goTo: "business-card",
    //             },
    //             example2: {
    //                 title: "Leaflets",
    //                 imgPath: require('./img/leaflets.jpg'),
    //                 goTo: "leaflets",
    //             },
    //         },
    //         services: {
    //             block1: {
    //                 title: "Business card ",   
    //                 blockID: "business-card",
                    
    //                 tag1: "Compact Design",
    //                 tag2: "Stylish Card",
    //                 tag3: "Laconic Card",
    //                 tag4: "Spectacular Card",

    //                 description: "Make your mark with our Business Card Design services. Our team specializes in creating business cards that leave a lasting impression. From sleek professionalism to creative uniqueness, we tailor designs that reflect your brand identity. Elevate your networking game, stand out in the crowd, and ensure your contact details are delivered in style. Trust our Business Card Design expertise to turn a simple card into a powerful tool for making connections. Where first impressions matter, let your business card speak volumes about your brand.",
    //             },
    //             block2: {
    //                 title: "Leaflets", 
    //                 blockID: "leaflets",
                    
    //                 tag1: "Paper Advertising",
    //                 tag2: "Flyer",
    //                 tag3: "Original Leaflets",
    //                 tag4: "Various Leaflets",  

    //                 description: "Transform your message into a visual narrative with our Leaflet Design services. Our expert team crafts compelling leaflets that capture attention and convey information effectively. From captivating graphics to concise content, we ensure your leaflet stands out in the hands of your audience. Elevate your promotional efforts, spark interest, and make a meaningful impact with our Leaflet Design expertise. Where creativity meets communication, let your message unfold beautifully in the hands of your audience with our professionally designed leaflets.",
    //             },
    //         },
    //     },
    // }




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



  return (
    <section id='services-page' className='services-page' style={{backgroundImage: `url(${t(`servicesPage.${currentPage}.backgroundImg`)})`}}>
        <Loader hideLoader={hideLoader} setHideLoader={setHideLoader} />

      <div className="header__menu-overlay"></div>


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
                            <Link key={index} to={menuItem.otherPage ? `/${menuItem.goTo}` : ""} onClick={() => handleScrollToSection(menuItem.goTo)} className="services-page__menu-item">
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
                                    <Link key={index + 1} to={menuItem.otherPage ? `/${menuItem.goTo}` : ""} onClick={() => {handleScrollToSection(menuItem.goTo); clearBodyClasses();}} className="header__menu-item">
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