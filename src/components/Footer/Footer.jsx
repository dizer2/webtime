import React from 'react'
import "./style/footer.css"
import Logo from '../main/img/Logo';
import SocialMedia from '../UI/SocialMedia/SocialMedia';

const Footer = () => {
	const currentYear = new Date().getFullYear();


	  // Scroll To Section 
	  const handleScrollToSection = (sectionId) => {
		document.body.classList.remove("body-hidden", false); 
	
		if (!sectionId || sectionId === 'top') {
		  window.scrollTo({ top: 0, behavior: 'smooth' });
		  return;
		}
	  
		const sectionRef = document.getElementById(sectionId);
		if (sectionRef) {
		  sectionRef.scrollIntoView({ behavior: 'smooth' });
		}
	  };
	  
  return (
	<div className='footer'>

		<div className="footer__top">
				<div className="footer__top-left">
					<div className="footer__top-logo">
						<Logo scrollToHome={() => handleScrollToSection('home')} />
					</div>

					<p className='footer__top-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada vulputate magna, ac scelerisque ex pretium ac. </p>

					<div className="social__media-wrapper">
						<SocialMedia
							linkPath="#!"
							icon={
								<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 38.8888L12.1524 30.8856C10.4165 27.7679 9.86504 24.1299 10.5991 20.6391C11.3332 17.1482 13.3036 14.0387 16.1488 11.8812C18.9939 9.72366 22.523 8.66281 26.0884 8.8933C29.6538 9.12379 33.0164 10.6302 35.5591 13.136C38.1018 15.6418 39.6541 18.979 39.9311 22.5352C40.2081 26.0914 39.1912 29.6281 37.0671 32.4962C34.9429 35.3643 31.854 37.3715 28.3672 38.1495C24.8803 38.9275 21.2294 38.424 18.0843 36.7315L10 38.8888ZM18.4741 33.7366L18.9741 34.0327C21.2521 35.3807 23.9128 35.9385 26.5416 35.6193C29.1703 35.3 31.6194 34.1215 33.5073 32.2676C35.3951 30.4136 36.6156 27.9883 36.9786 25.3695C37.3415 22.7508 36.8266 20.0857 35.514 17.7896C34.2014 15.4935 32.1648 13.6954 29.7217 12.6755C27.2786 11.6555 24.5661 11.4711 22.007 12.1509C19.448 12.8307 17.186 14.3365 15.5736 16.4336C13.9613 18.5308 13.0891 21.1016 13.0931 23.7453C13.0909 25.9374 13.6982 28.087 14.8472 29.955L15.1608 30.471L13.9574 34.9379L18.4741 33.7366Z" fill="white"/>
								<path fillRule="evenodd" clipRule="evenodd" d="M30.6086 25.8007C30.3155 25.5647 29.9723 25.3986 29.6052 25.3151C29.2381 25.2315 28.8567 25.2327 28.4901 25.3185C27.9392 25.5469 27.5833 26.4099 27.2274 26.8413C27.1524 26.9448 27.0421 27.0173 26.9173 27.0453C26.7925 27.0734 26.6617 27.055 26.5495 26.9936C24.5329 26.2051 22.8426 24.7591 21.7531 22.8905C21.6602 22.7739 21.6162 22.6258 21.6304 22.4775C21.6447 22.3292 21.716 22.1921 21.8294 22.0952C22.2263 21.7029 22.5178 21.217 22.6768 20.6824C22.7121 20.0928 22.5768 19.5054 22.287 18.9904C22.063 18.2684 21.6366 17.6255 21.0582 17.1377C20.76 17.0037 20.4292 16.9588 20.1059 17.0084C19.7826 17.0579 19.4806 17.1998 19.2363 17.4168C18.8121 17.7822 18.4755 18.2379 18.2511 18.7503C18.0267 19.2628 17.9203 19.8189 17.9398 20.3779C17.9411 20.6917 17.9809 21.0043 18.0584 21.3085C18.2552 22.0393 18.5578 22.7376 18.9567 23.3812C19.2444 23.8742 19.5584 24.3514 19.8973 24.8109C20.9985 26.3202 22.3828 27.6016 23.9733 28.5841C24.7715 29.0834 25.6245 29.4893 26.5156 29.7939C27.4412 30.2128 28.4632 30.3736 29.4731 30.2592C30.0484 30.1722 30.5936 29.9455 31.0605 29.5988C31.5275 29.2521 31.9019 28.7962 32.1509 28.2711C32.2972 27.9539 32.3416 27.5993 32.278 27.2559C32.1255 26.5537 31.1848 26.1391 30.6086 25.8007Z" fill="white"/>
								</svg>
							}
							size='mini'
						/>

						<SocialMedia
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
							size='mini'
						/>

						<SocialMedia
							linkPath="#!"
							icon={
								<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.6921 23.9371C11.6921 23.9371 23.8989 18.7958 28.1324 16.9854C29.7554 16.2613 35.259 13.944 35.259 13.944C35.259 13.944 37.7992 12.9303 37.5875 15.3923C37.5169 16.4061 36.9524 19.9543 36.388 23.7922C35.5412 29.2232 34.6239 35.1611 34.6239 35.1611C34.6239 35.1611 34.4828 36.8266 33.2833 37.1162C32.0838 37.4059 30.1081 36.1025 29.7554 35.8128C29.4731 35.5956 24.4634 32.337 22.6288 30.7439C22.1349 30.3094 21.5705 29.4405 22.6993 28.4267C25.2395 26.0371 28.2736 23.0682 30.1081 21.1854C30.9549 20.3164 31.8015 18.2889 28.2736 20.7509C23.2639 24.2991 18.3247 27.6302 18.3247 27.6302C18.3247 27.6302 17.1957 28.3542 15.079 27.7025C12.9621 27.0509 10.4925 26.1819 10.4925 26.1819C10.4925 26.1819 8.79919 25.0957 11.6921 23.9371Z" fill="white"/>
								</svg>
							}
							size='mini'
						/>
					</div>
				</div>

				<div className="footer__top-nav">
					<p className="footer__top-subTitle">Navigation</p>


					<nav className='footer__nav'>
						<ul className='footer__list'>
							<li onClick={() => handleScrollToSection('home')} className='footer__item'>Home</li>
							<li onClick={() => handleScrollToSection('about')} className='footer__item'>About</li>
							<li onClick={() => handleScrollToSection('services')} className='footer__item'>Services</li>
							<li onClick={() => handleScrollToSection('portfolio')} className='footer__item'>Portfolio</li>
							<li onClick={() => handleScrollToSection('contacts')} className='footer__item'>Contacts</li>
						</ul>
					</nav>
					
				</div>

				<div className="footer__top-form">
					<p className="footer__top-subTitle">Would you like to leave a review?</p>

					<div className='footer__top-input'>
						<input type="text" name="text" placeholder='We appreciate your feedback' />
						<div>
							<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.99597 28.2801L28.0089 18.4634C29.7739 17.6763 29.7739 15.3237 28.0089 14.5366L5.99597 4.71995C4.00152 3.83053 1.93277 5.80552 2.92067 7.65585L7.12338 15.5275C7.45025 16.1397 7.45025 16.8603 7.12338 17.4725L2.92067 25.3441C1.93277 27.1945 4.00152 29.1695 5.99597 28.2801Z" fill="white"/>
							</svg>
						</div>
					</div>
								
				</div>
		</div>

		<div className="footer__bottom">
			<div className="footer__bottom-line"></div>
			<p>  © <span id='year'>{currentYear}</span> WebTime. All rights reserved.</p>
		</div>
	</div>
  )
}

export default Footer;
