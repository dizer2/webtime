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

const About = () => {
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
        // Встановлюємо початкову висоту тексту при завантаженні компонента
        handleResize();
        // Додаємо обробник події resize
        window.addEventListener('resize', handleResize);
        // Прибираємо обробник події при видаленні компонента
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const showTextHandle = () => {
        setShowText(!showText);
        if (showText === false) {
            setTextHeight(defulTextHeight);
        } else {
            if (aboutDescriptionRef.current) {
                setTextHeight(aboutDescriptionRef.current.scrollHeight);
            }
        }
    }

	  
  return (
	<div id='about' className='about-us'>

		<Reveal>
			<SubTitle text={"now about business"}/>
		</Reveal>


		<RevealSecodary>
			<Title 
				text={"Our projects solve a number of business-tasks"}
				description={"business"}
			/>
		</RevealSecodary>
	
		

		<div className="about-us__box">

			<Reveal>
				<div className="about-us__box-column">
					<div className="about-us__position">
						<p className='about-us__box-subTitle'>01</p>
						<p className='about-us__box-line'></p>
					</div>
					<p className='about-us__box-description'>Creation of original and creative web-sites</p>
				</div>
			</Reveal>

			<Reveal>
				<div className="about-us__box-column">
					<div className="about-us__position">
						<p className='about-us__box-subTitle'>02</p>
						<p className='about-us__box-line'></p>
					</div>
					<p className='about-us__box-description'>Creature of interactive design posters, business cards, billboards</p>
				</div>
			</Reveal>

			<Reveal>
				<div className="about-us__box-column">
					<div className="about-us__position">
						<p className='about-us__box-subTitle'>03</p>
						<p className='about-us__box-line'></p>
					</div>
					<p className='about-us__box-description'>Increased sales due to increased conversion</p>
				</div>
			</Reveal>

		</div>

	
		<div className="about-us__box2">
			<Reveal>
				<SubTitle text={"what makes us the best?"}/>
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
						<div className="about-us__cart-description">A wide range of project</div>
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
						<div className="about-us__cart-description">Quality service</div>
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
						<div className="about-us__cart-description">The best prices on the market</div>
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
						<div className="about-us__cart-description">Future technologies.</div>
					</Reveal>
				</div>
			</div>

		</div>

		<div className="about-us__box3">
				<div className="about-us__box3-top">
					<Reveal>
						<SubTitle text={"what makes us the best?"}/>
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
					<p ref={aboutDescriptionRef2}>At Webtime, we firmly believe that the art of crafting websites lies in recognizing the nuances within each project. Each client possesses the ability to segment the market in their own distinctive manner, enabling them to independently shape their product. This approach often leads to the creation of entirely unique products, for which a standard website is typically adequate. Regarding our practical experiences, we consistently emphasize the importance of selecting a versatile framework for each project. This ensures that we have the flexibility to employ diverse methods during the website development process.
					</p>

					<p className='about-us__margin'>This is exactly the kind of uniqueness we try to find every time we work with a new client. It's always about discovering new triggers, new opportunities that will motivate us to create another better website in the niche. It doesn't always work out the first time; sometimes we even spend more time than planned. But so far, we have never been disappointed with the expectations. And if you want to create your first website? You just got an idea, and you don't know where to go. There are hundreds of web studios and agencies now. Some offer speed in work, others attractive prices. In such a variety, how do you trust someone with your brainchild? Moreover, how do you trust another company with a part of your business? Let's figure this out together. Step by step and carefully.
					</p>
					
					<p className='about-us__margin2 about-us__bold'>The first stage is appointment.</p>

					<p className='about-us__margin'>We recommend that all clients decide exactly why they need a website. They need an online store or just a corporate website. It will sell goods or simply serve as a business card for the company. At the very beginning of the journey, this is the most important question. We can suggest, but certainly not decide for the client.
					</p>

					<p className='about-us__margin2 about-us__bold'>The second stage is the budget. <span>Here the question is simple. Will a new site or site redesign be beneficial for the client? Not always the benefit in such cases is a matter of money. The site can raise the visibility of the project, change the perception of the service or be a valuable source of information. But one thing must be remembered - spent resources should multiply, and not just be wasted.</span></p>

					<p className='about-us__margin2 about-us__bold'>The third stage is readiness to work with your site. <span>As you can see, it largely depends on you. If you have a clear vision of your goal and understand the expected outcomes of your efforts, you may not require the services of highly expensive studios.</span></p>

					<p className='about-us__margin2 about-us__bold'>Creating the most fantastic sites in the world</p>

					<p className='about-us__margin'>Now let's delve into the realm of giants - impressive websites, carefully designed down to the smallest detail. What's behind them? Most often, this site was born thanks to the extensive experience of the agency. And possibly significant budgets, which are always quite justified.
					</p>

					<p className='about-us__margin'>Today's top-tier websites are intricate systems with captivating interactions. Simply scrolling down the page won't suffice in unique projects. Opting for flawless images from premium stocks? Personalized photoshoots are now held in higher regard. Should the button be large and red? No, it shouldn't, and it won't.
					</p>

					<p className='about-us__margin'>Exceptional projects are constant experiments. They introduce new experiences for users, incorporate novel effects, animations, captivating narratives, and unconventional solutions. It's the continual evolution of websites that is truly enthralling. It's not merely about standing out; it's an opportunity to communicate your perspective to users. A chance to share your vision of the product, the situation, and perhaps, the entire world.
					</p>

					<p className='about-us__margin'>Undoubtedly, there are concerns that linger in the minds of all clients eager to embrace experimentation. Is it necessary? What if clients are apprehensive? Will our profound thoughts and futuristic design be comprehended? In this regard, one can assert - improvement is possible only when you conquer the fear of change.
					</p>

					<p className='about-us__margin2 about-us__bold'>Elevating Web Presence - Webtime  Studio</p>

					<p className='about-us__margin'>Now let's talk a little about Webtime Studio. We are based in the city of Pardubice in the Czech Republic and have been creating the best websites for 5 years. Pardubice is full of interesting projects and companies that need such sites, and we can offer it. But we are not limited only to Pardubice, in our portfolio you can also find sites for foreign companies.
					</p>

					<p className='about-us__margin'>We enhance the website development process with each new project—immersing ourselves in UX, UI, and cutting-edge development. Our commitment to utilizing the latest technologies empowers us to craft truly distinctive projects.
					</p>

					<p className='about-us__margin'>Yet another crucial facet of our work process is articulating the company's positioning to the client and reflecting it on the website. Photos, videos, and texts serve as our tools in achieving this goal. Collaborating with professional contractors enables us not only to create the finest website but also to enrich it with compelling content.
					</p>

					<p className='about-us__margin'>Do we make sites? Yes of course. Do we build better sites? Definitely.
					</p>
				</div>
			</RevealSecodary>

			
		</div>
	</div>
  )
}

export default About;
