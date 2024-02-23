import React from 'react'
import "./style/services-page.css"
import Logo from '../main/img/Logo'
import LocalisationField from '../UI/LocalisationField/LocalisationField'
import ArrowBtn from "./../UI/ArrowBtn/ArrowBtn"
import { Link } from 'react-router-dom'


const ServicesPage = ({ currentPage }) => {
    // const currentPage = 3;

    const pagesData = {
        "web-development": {
            backgroundImg: require('./img/0-background.jpg'),
            mainColor: "linear-gradient(99deg, #2BBFFE 5.86%, #8629FD 54.99%, #FC4AF5 100%)",
            gradientParts: {
                gradientID: "paint0_linear_866_370",
                color1: "#2BBFFE",
                color2: "#8629FD",
                color3: "#FC4AF5",
                offset: "0.521875",
            },
            menu: {
                nav1: "Corporate sites",   
                nav2: "Landing page",   
                nav3: "Online stores",   
                nav4: "Highly loaded services & portals",   
                nav5: "WOW sites",   
                nav6: "Portfolio",   
            },
            title: "Web Development",
            subtitle: "It's not just development, design and promotion. This is the solution of marketing and business tasks: financial and non-financial. You're not just buying man-hours, you're buying our experience, expertise and skills to create the best sites in your niche.",
            examples: {
                example1: {
                    title: "Corporate Sites",
                    imgPath: require('./img/corporate-sites.jpg'),
                },
                example2: {
                    title: "Landing Page",
                    imgPath: require('./img/landing-page.jpg'),
                },
                example3: {
                    title: "Online Stores",
                    imgPath: require('./img/online-stores.jpg'),
                },
                example4: {
                    title: "Services / Portals",
                    imgPath: require('./img/services-portals.jpg'),
                },
                example5: {
                    title: "WOW Sites",
                    imgPath: require('./img/wow-sites.jpg'),
                },
                example6: {
                    title: "Personal / Portfolio",
                    imgPath: require('./img/personal-portfolio.jpg'),
                },
            },
            services: {
                block1: {
                    title: "Corporate sites",   

                    tag1: "Corporate Web",
                    tag2: "Branding",
                    tag3: "Business Online",
                    tag4: "Corporate Identity",

                    description: "For businesses looking to establish a strong online presence, our corporate site development services are tailored to reflect your brand identity, values, and objectives. We ensure a professional and cohesive representation of your business that resonates with your target audience.",
                },
                block2: {
                    title: "Landing page", 

                    tag1: "Impactful Design",
                    tag2: "Web Landing",
                    tag3: "High Conversions",
                    tag4: "Conversion Optimized", 

                    description: "Crafting impactful landing pages is crucial for conversions. We specialize in creating visually appealing and high-converting landing pages that captivate visitors, driving them to take the desired actions and boosting your business goals.",
                },
                block3: {
                    title: "Online stores",   

                    tag1: "Ecommerce Hub",
                    tag2: "Secure Shopping",
                    tag3: "Digital Store",
                    tag4: "Shop Online",

                    description: "E-commerce is at the heart of modern business. Our online store development services are designed to provide seamless and secure shopping experiences for your customers. From user-friendly interfaces to robust payment systems, we ensure a complete e-commerce solution.",
                },
                block4: {
                    title: "Services / Portals",   

                    tag1: "Scalable Web",
                    tag2: "Heavy Traffic",
                    tag3: "Advanced Services",
                    tag4: "High LoadDev",

                    description: "For projects that demand scalability and high performance, our development team is adept at creating highly loaded services and portals. We leverage versatile frameworks to handle complex functionalities, ensuring a smooth user experience even under heavy traffic.",
                },
                block5: {
                    title: "WOW sites",   

                    tag1: "Innovative Design",
                    tag2: "3D Effects",
                    tag3: "Animation",
                    tag4: "Visual Impact",

                    description: "Sometimes, you crave a website that transcends the ordinary. Our WOW sites are crafted to make a lasting impact, boasting cutting-edge animations, immersive 3D effects, and innovative design. We strive to ensure your website not only stands out but captivates your audience with dynamic visual experiences.",
                },
                block6: {
                    title: "Personal / Portfolio",   

                    tag1: "Showcase Work",
                    tag2: "Project Gallery",
                    tag3: "Professional Portfolios",
                    tag4: "Visual Resume",

                    description: "Showcasing your work effectively is essential. Our portfolio development services help you display your achievements, projects, and capabilities in a visually compelling manner, establishing credibility and attracting potential clients. At Webtime, we guide you step by step through the web development process, ensuring careful consideration of your unique needs and objectives. We understand that trusting a company with your business is a significant decision, and we're committed to exceeding your expectations. Let's embark on the journey of creating a website that not only meets but surpasses your vision.",
                },
            },
        },
        "design": {
            backgroundImg: require('./img/1-background.jpg'),
            mainColor: "linear-gradient(99deg, #FE842B 5.86%, #FD2929 51.61%, #FF006B 100%)",
            gradientParts: {
                gradientID: "paint0_linear_866_375",
                color1: "#FE842B",
                color2: "#FD2929",
                color3: "#FF006B",
                offset: "0.486",
            },
            menu: {
                nav1: "Design",   
                nav2: "Redesign",   
                nav3: "Logo",   
                nav4: "Mobile design",   
            },
            title: "Design / Redesign\nLogo",
            subtitle: "Make a distinctive mark in the business world with our design services. Whether you need a completely new logo, a stylish redesign, or an inspiring brand, our team of experienced designers is ready to bring your ideas to life. Elevate your brand to new heights with our creative solutions designed to highlight your uniqueness and capture the attention of your target audience.",
            examples: {
                example1: {
                    title: "Web Design",
                    imgPath: require('./img/web-design.jpg'),
                },
                example2: {
                    title: "Web Redesign",
                    imgPath: require('./img/web-redesign.jpg'),
                },
                example3: {
                    title: "Logo",
                    imgPath: require('./img/logo.jpg'),
                },
            },
            services: {
                block1: {
                    title: "Web Design",   

                    tag1: "Any scale",
                    tag2: "Multy page",
                    tag3: "Convenience",
                    tag4: "Art",

                    description: "Unlock the full potential of your online presence with our cutting-edge Web Design services. Our expert team crafts visually stunning and user-friendly websites tailored to elevate your brand. From intuitive navigation to captivating aesthetics, we ensure a seamless user experience that leaves a lasting impression. Transform your digital identity and stand out in the crowded online landscape. Elevate your business with our Web Design expertise – where innovation meets impact.",
                },
                block2: {
                    title: "Web Redesign", 

                    tag1: "Modern",
                    tag2: "New technologies",
                    tag3: "Improvement",
                    tag4: "Update",  

                    description: "Experience a digital makeover with our Redesign services. Whether refreshing your current website or undergoing a complete transformation, our skilled team enhances visual appeal, functionality, and user engagement. Elevate your brand's online presence, captivate your audience, and stay ahead in the ever-evolving digital landscape. Unleash the power of redesign to redefine success in the virtual realm – where your brand's evolution meets excellence.",
                },
                block3: {
                    title: "Logo",   

                    tag1: "Branding",
                    tag2: "Graphic design",
                    tag3: "Unique",
                    tag4: "Emblem",

                    description: "Forge a memorable brand identity with our Logo Design services. Our creative team specializes in designing logos that resonate with your brand's essence. From timeless simplicity to bold innovation, we tailor logos that leave a lasting imprint. Elevate your brand recognition and make a statement in any market. Discover the art of visual storytelling with our Logo Design expertise – where every logo is a unique symbol of your brand's journey and aspirations.",
                },
            },
        },
        "poster-billboards": {
            backgroundImg: require('./img/2-background.jpg'),
            mainColor: "linear-gradient(285deg, #68E0CF 0%, #3DCDFF 53.88%, #209CFF 104.43%)",
            gradientParts: {
                gradientID: "paint0_linear_866_376",
                color1: "#68E0CF",
                color2: "#3DCDFF",
                color3: "#209CFF",
                offset: "0.516",
            },
            menu: {
                nav1: "Billboards",   
                nav2: "Posters",   
                nav3: "Business card ",   
                nav4: "Leaflets",   
            },
            title: "Posters / Billboards",
            subtitle: "Elevate your brand presence with our Poster and Billboard Design services. Our expert designers craft visually striking posters that captivate on a smaller scale, and bold billboards that dominate the urban skyline. From impactful imagery to compelling messaging, we ensure your brand stands out in both intimate and grand spaces. Make a powerful statement, spark interest, and leave a lasting impression with our Poster and Billboard Design expertise. Where creativity meets visibility, we turn your ideas into visual spectacles that demand attention.",
            examples: {
                example1: {
                    title: "Posters",
                    imgPath: require('./img/poster.jpg'),
                },
                example2: {
                    title: "Billboards",
                    imgPath: require('./img/billboard.jpg'),
                },
            },
            services: {
                block1: {
                    title: "Posters",   

                    tag1: "Poster Design",
                    tag2: "Multicolored",
                    tag3: "Event",
                    tag4: "Different Size",

                    description: "Transform your message into a visual masterpiece with our Poster Design services. Our skilled designers craft eye-catching posters that captivate audiences and leave a lasting impression. From impactful imagery to compelling copy, we ensure your poster stands out in any space. Elevate your promotional efforts, spark curiosity, and make a statement with our Poster Design expertise. Unleash the power of visual communication and turn heads with posters that speak louder than words.",
                },
                block2: {
                    title: "Billboards", 
                    
                    tag1: "Billboards Design",
                    tag2: "Attracting people",
                    tag3: "Advertising Boards",
                    tag4: "Large",  

                    description: "Maximize your brand visibility with our Billboard Design services. Our expert team creates captivating designs that dominate the skyline and command attention. From bold visuals to concise messaging, we ensure your billboard leaves a lasting impact on passersby. Elevate your outdoor advertising game, amplify brand recognition, and make a statement on the grand stage. Trust our Billboard Design expertise to transform your message into an unmissable spectacle in the urban landscape.",
                },
            },
        },
        "mobile-design": {
            backgroundImg: require('./img/3-background.jpg'),
            mainColor: "linear-gradient(99deg, #84FAB0 5.86%, #8FD3F4 100%)",
            gradientParts: {
                gradientID: "paint0_linear_866_377",
                color1: "#84FAB0",
                color2: "#8FD3F4",
                color3: "#8FD3F4",
                offset: "0.892222",
            },
            menu: {
                nav1: "Mobile design",   
                nav2: "Web design",   
                nav3: "Web redesign",   
                nav4: "Logo",   
            },
            title: "Mobile Design",
            subtitle: "Unique design for your mobile app is the key to a successful launch! Our mobile design specialists will create intuitive and stylish interfaces that not only attract attention but also ensure ease of use. Give your brand a standout look and make a lasting impression.",
            examples: {
                example1: {
                    title: "Mobile Design",
                    imgPath: require('./img/mobile-design.jpg'),
                },
            },
            services: {
                block1: {
                    title: "Mobile Design",   
                    
                    tag1: "App design",
                    tag2: "Mobility",
                    tag3: "Visual Touch",
                    tag4: "Multi-page",

                    description: "Immerse your audience in a mobile-friendly experience with our Mobile Design services. Our expert team specializes in creating intuitive and visually appealing mobile interfaces. From responsive layouts to user-centric navigation, we ensure your brand shines on every device. Elevate your digital reach, engage users effortlessly, and stay ahead in the mobile-centric landscape. Explore the art of mobile design with us – where innovation meets user satisfaction, creating a lasting impact on the go.",
                },
            },
        },
        "business-card-leaflets": {
            backgroundImg: require('./img/4-background.jpg'),
            mainColor: "linear-gradient(281deg, #000428 -7.61%, #1A55AC 35%, #004E92 100%)",
            gradientParts: {
                gradientID: "paint0_linear_866_341",
                color3: "#040D61",
                color2: "#1562D2",
                color1: "#004E92",
                offset: "0.396",
            },
            menu: {
                nav1: "Business card",   
                nav2: "Leaflets",   
                nav3: "Posters",   
                nav4: "Billboards",   
            },
            title: "Business card / Leaflets",
            subtitle: "Forge a lasting connection with our Business Card and Leaflet Design services. Our expert designers create business cards that embody professionalism and leaflets that tell your brand story succinctly. From impactful first impressions to comprehensive brand communication, our designs ensure you stand out. Elevate your networking and promotional strategies with our expertise, turning ordinary pieces into powerful brand assets. Make every exchange memorable – where business cards and leaflets become ambassadors of your brand identity.",
            examples: {
                example1: {
                    title: "Business Card",
                    imgPath: require('./img/business-card.jpg'),
                },
                example2: {
                    title: "Leaflets",
                    imgPath: require('./img/leaflets.jpg'),
                },
            },
            services: {
                block1: {
                    title: "Business card ",   
                    
                    tag1: "Compact Design",
                    tag2: "Stylish Card",
                    tag3: "Laconic Card",
                    tag4: "Spectacular Card",

                    description: "Make your mark with our Business Card Design services. Our team specializes in creating business cards that leave a lasting impression. From sleek professionalism to creative uniqueness, we tailor designs that reflect your brand identity. Elevate your networking game, stand out in the crowd, and ensure your contact details are delivered in style. Trust our Business Card Design expertise to turn a simple card into a powerful tool for making connections. Where first impressions matter, let your business card speak volumes about your brand.",
                },
                block2: {
                    title: "Leaflets", 
                    
                    tag1: "Paper Advertising",
                    tag2: "Flyer",
                    tag3: "Original Leaflets",
                    tag4: "Various Leaflets",  

                    description: "Transform your message into a visual narrative with our Leaflet Design services. Our expert team crafts compelling leaflets that capture attention and convey information effectively. From captivating graphics to concise content, we ensure your leaflet stands out in the hands of your audience. Elevate your promotional efforts, spark interest, and make a meaningful impact with our Leaflet Design expertise. Where creativity meets communication, let your message unfold beautifully in the hands of your audience with our professionally designed leaflets.",
                },
            },
        },
    }

    
  return (
    <section className='services-page' style={{backgroundImage: `url(${pagesData[currentPage].backgroundImg})`}}>
        <div className="services-page__menu">
            <Link to={'/'}>
                <div className="services-page__menu-logo">
                    <Logo
                        gradientID = {pagesData[currentPage].gradientParts.gradientID}
                        color1 = {pagesData[currentPage].gradientParts.color1}
                        color2 = {pagesData[currentPage].gradientParts.color2}
                        color3 = {pagesData[currentPage].gradientParts.color3}
                        offset = {pagesData[currentPage].gradientParts.offset}
                    />
                </div>
            </Link>

            <nav className="services-page__menu-nav">
                <ul className="services-page__menu-list">
                    <Link to={"/"}>
                        <li className="services-page__menu-item">
                            Home
                        </li>
                    </Link>

                    {Object.values(pagesData[currentPage].menu).map((menuItem, index) => (
                        <li key={index} className="services-page__menu-item">
                            {menuItem}
                        </li>
                    ))}
                </ul>   
            </nav>

            <LocalisationField
                gradient = {pagesData[currentPage].mainColor}
            />
        </div>
        <div className="services-page__menu-phantom"></div>

        <div className="services-page__main" >
            <h2 className={`services-page__title services-page__title--${currentPage}`}>{pagesData[currentPage].title}</h2>
            <p className="services-page__subtitle">It's not just development, design and promotion. This is the solution of marketing and business tasks: financial and non-financial. You're not just buying man-hours, you're buying our experience, expertise and skills to create the best sites in your niche.</p>

            <div className="services-page__services-container">
                {Object.values(pagesData[currentPage].examples).map((example, exampleIndex) => (
                    <div key={exampleIndex} className="services-page__service">
                        <img src={example.imgPath} className='services-page__service-img' alt={`The best ${example.title} from the webtime company`} />
                        <p className="services-page__service-title">{example.title}</p>
                    </div>
                ))}
            </div>

            {Object.values(pagesData[currentPage].services).map((block, blockIndex) => (
                <div key={blockIndex} className="services-page__description-box">
                    <div className="services-page__description-title">
                        <span style={{background: pagesData[currentPage].mainColor}}></span>
                        <p>{block.title}</p>
                        <span style={{background: pagesData[currentPage].mainColor}}></span>
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
                        text="Let's discuss"
                        customGradient={{
                            direction: `${pagesData[currentPage].gradientParts.offset * 10}deg`,
                            colors: [pagesData[currentPage].gradientParts.color1, pagesData[currentPage].gradientParts.color2, pagesData[currentPage].gradientParts.color3],
                        }}
                        gradientID = {pagesData[currentPage].gradientParts.gradientID}
                        color1 = {pagesData[currentPage].gradientParts.color1}
                        color2 = {pagesData[currentPage].gradientParts.color2}
                        color3 = {pagesData[currentPage].gradientParts.color3}
                        offset = {pagesData[currentPage].gradientParts.offset}
                    />

                </div>
            ))}
        </div>
    </section>
  )
}

export default ServicesPage