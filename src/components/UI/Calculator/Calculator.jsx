import React, { useState } from 'react'
import "./style/calculator.css"
import GradientBtn from '../..//UI/GradientBtn/GradientBtn.jsx';

const Calculator = () => {
	const [step, setStep] = useState(0);
	const [websiteTitle, setWebsiteTitle] = useState("What kind of site do you want to create?");
	const [webstieType, setWebsiteType] = useState('');

	const [arrayWebsite] = useState([
		"Landing page",
		"Corporate sites",
		"Online stores",
		"Services",
		"Portals",
		"WOW sites",
		"Portfolio",	
		"Portfolio",
		"Other"
	]);

	const [arrayWebsite2] = useState([
		"I want buy",
		"Yes",
		"No"
	]);
	
	const [arrayWebsite3] = useState([
		"Yes",
		"No"
	]);

	const [arrayWebsite4] = useState([
		"Write your full name",
		"Write your phone number"
	]);
	

	const [svgClass, setSvgClass] = useState('svg-color2');
	const [pathClass, setPathClass] = useState('path-opacity');

	const [selectedItem, setSelectedItem] = useState(0);

	const handleItemClick = (index) => {
	  setSelectedItem(index);
	  setWebsiteType(arrayWebsite[index]);
	  console.log(webstieType);

	};

	const handleStep = () => {

		if (step !=3) {
			setStep(step + 1);
		}

		if (step == 0) {
			setWebsiteTitle("Do you have a logo?");
		}

		if (step == 1) {
			setWebsiteTitle("Do you need services for filling, maintaining and promoting the site?");
		}

		if (step == 2) {
			setWebsiteTitle("The calculation is ready! Please enter your phone number, we will send the information to it.");
		}

		if (step == 3) {
			console.log(webstieType);
		}
	}



  return (
	<div className='calculator-popup'>
		<div className="calculator-popup__element1"></div>
	  	<div className="calculator-popup__element2"></div>
	  	<div className="calculator-popup__element3"></div>

		<div className="calculator-popup__close">
			<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M13.7352 11.5L24 21.3371L22.2636 23L12 13.1629L1.73521 23L0 21.3371L10.2636 11.5L0 1.6629L1.73521 0L12 9.8371L22.2636 0L24 1.6629L13.7352 11.5Z" fill="url(#paint0_linear_1076_406)"/>
				<defs>
					<linearGradient id="paint0_linear_1076_406" x1="1.08499" y1="3.32398" x2="26.5245" y2="7.45539" gradientUnits="userSpaceOnUse">
						<stop className={svgClass}  stopColor="#2BBFFE"/>
						<stop className={svgClass} offset="0.521875" stopColor="#8629FD"/>
						<stop  className={svgClass} offset="1" stopColor="#FC4AF5"/>
					</linearGradient>
				</defs>
			</svg>
		</div>

		<div className="calculator-popup__container">
			<p className="calculator-popup__title">Calculate the cost</p>
			<p className="calculator-popup__description">{websiteTitle}</p>
			
			<div className={`calculator-popup__container-box ${step >= 1 && step <= 3 ? 'calculator-popup__container-box2' : ''}`}>
			{step === 0 && (
				[...Array(arrayWebsite.length)].map((_, index) => (
				<div
					key={index}
					onClick={() => handleItemClick(index)}
					className={`calculator-popup__item ${selectedItem === index ? 'selected' : ''}`}
				>
					<div className="calculator-popup__item-icon">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path style={{ transition: 'opacity 0.5s' }} opacity={selectedItem === index ? 1 : 0.2} d="M40 20C40 23.9556 38.827 27.8224 36.6294 31.1114C34.4318 34.4004 31.3082 36.9638 27.6537 38.4776C23.9991 39.9913 19.9778 40.3874 16.0982 39.6157C12.2186 38.844 8.65491 36.9392 5.85786 34.1421C3.06081 31.3451 1.156 27.7814 0.384294 23.9018C-0.38741 20.0222 0.00865672 16.0009 1.52241 12.3463C3.03616 8.69181 5.59961 5.56824 8.8886 3.37061C12.1776 1.17298 16.0444 -4.71704e-08 20 0V7.00607C17.43 7.00607 14.9178 7.76815 12.781 9.19594C10.6441 10.6237 8.97866 12.6531 7.99518 15.0274C7.0117 17.4018 6.75437 20.0144 7.25575 22.535C7.75712 25.0556 8.99467 27.3709 10.8119 29.1881C12.6291 31.0053 14.9444 32.2429 17.465 32.7443C19.9856 33.2456 22.5982 32.9883 24.9726 32.0048C27.3469 31.0213 29.3763 29.3559 30.8041 27.219C32.2318 25.0822 32.9939 22.57 32.9939 20H40Z" fill="url(#paint0_linear_1105_249)"/>
						<defs>
						<linearGradient id="paint0_linear_1105_249" x1="1.80832" y1="5.78083" x2="44.2965" y2="12.3935" gradientUnits="userSpaceOnUse">
							<stop stopColor="#2BBFFE"/>
							<stop offset="0.521875" stopColor="#8629FD"/>
							<stop offset="1" stopColor="#FC4AF5"/>
						</linearGradient>
						</defs>
					</svg>
					</div>

					<div className="calculator-popup__item-input">
					<p>{arrayWebsite[index]}</p>
					</div>
				</div>
				))
			)}

			{step === 1 && (
				[...Array(arrayWebsite2.length)].map((_, index) => (
				<div
					key={index}
					onClick={() => handleItemClick(index)}
					className={`calculator-popup__item ${selectedItem === index ? 'selected' : ''}`}
				>
					<div className="calculator-popup__item-icon">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path style={{ transition: 'opacity 0.5s' }} opacity={selectedItem === index ? 1 : 0.2} d="M40 20C40 23.9556 38.827 27.8224 36.6294 31.1114C34.4318 34.4004 31.3082 36.9638 27.6537 38.4776C23.9991 39.9913 19.9778 40.3874 16.0982 39.6157C12.2186 38.844 8.65491 36.9392 5.85786 34.1421C3.06081 31.3451 1.156 27.7814 0.384294 23.9018C-0.38741 20.0222 0.00865672 16.0009 1.52241 12.3463C3.03616 8.69181 5.59961 5.56824 8.8886 3.37061C12.1776 1.17298 16.0444 -4.71704e-08 20 0V7.00607C17.43 7.00607 14.9178 7.76815 12.781 9.19594C10.6441 10.6237 8.97866 12.6531 7.99518 15.0274C7.0117 17.4018 6.75437 20.0144 7.25575 22.535C7.75712 25.0556 8.99467 27.3709 10.8119 29.1881C12.6291 31.0053 14.9444 32.2429 17.465 32.7443C19.9856 33.2456 22.5982 32.9883 24.9726 32.0048C27.3469 31.0213 29.3763 29.3559 30.8041 27.219C32.2318 25.0822 32.9939 22.57 32.9939 20H40Z" fill="url(#paint0_linear_1105_249)"/>
						<defs>
						<linearGradient id="paint0_linear_1105_249" x1="1.80832" y1="5.78083" x2="44.2965" y2="12.3935" gradientUnits="userSpaceOnUse">
							<stop stopColor="#2BBFFE"/>
							<stop offset="0.521875" stopColor="#8629FD"/>
							<stop offset="1" stopColor="#FC4AF5"/>
						</linearGradient>
						</defs>
					</svg>
					</div>

					<div className="calculator-popup__item-input">
					<p>{arrayWebsite2[index]}</p>
					</div>
				</div>
				))
			)}

			{step === 2 && (
				[...Array(arrayWebsite3.length)].map((_, index) => (
				<div
					key={index}
					onClick={() => handleItemClick(index)}
					className={`calculator-popup__item ${selectedItem === index ? 'selected' : ''}`}
				>
					<div className="calculator-popup__item-icon">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path style={{ transition: 'opacity 0.5s' }} opacity={selectedItem === index ? 1 : 0.2} d="M40 20C40 23.9556 38.827 27.8224 36.6294 31.1114C34.4318 34.4004 31.3082 36.9638 27.6537 38.4776C23.9991 39.9913 19.9778 40.3874 16.0982 39.6157C12.2186 38.844 8.65491 36.9392 5.85786 34.1421C3.06081 31.3451 1.156 27.7814 0.384294 23.9018C-0.38741 20.0222 0.00865672 16.0009 1.52241 12.3463C3.03616 8.69181 5.59961 5.56824 8.8886 3.37061C12.1776 1.17298 16.0444 -4.71704e-08 20 0V7.00607C17.43 7.00607 14.9178 7.76815 12.781 9.19594C10.6441 10.6237 8.97866 12.6531 7.99518 15.0274C7.0117 17.4018 6.75437 20.0144 7.25575 22.535C7.75712 25.0556 8.99467 27.3709 10.8119 29.1881C12.6291 31.0053 14.9444 32.2429 17.465 32.7443C19.9856 33.2456 22.5982 32.9883 24.9726 32.0048C27.3469 31.0213 29.3763 29.3559 30.8041 27.219C32.2318 25.0822 32.9939 22.57 32.9939 20H40Z" fill="url(#paint0_linear_1105_249)"/>
						<defs>
						<linearGradient id="paint0_linear_1105_249" x1="1.80832" y1="5.78083" x2="44.2965" y2="12.3935" gradientUnits="userSpaceOnUse">
							<stop stopColor="#2BBFFE"/>
							<stop offset="0.521875" stopColor="#8629FD"/>
							<stop offset="1" stopColor="#FC4AF5"/>
						</linearGradient>
						</defs>
					</svg>
					</div>

					<div className="calculator-popup__item-input">
					<p>{arrayWebsite3[index]}</p>
					</div>
				</div>
				))
			)}

			{step === 3 && (
				[...Array(arrayWebsite3.length)].map((_, index) => (
				<div
					key={index}
					onClick={() => handleItemClick(index)}
					className={`calculator-popup__item ${selectedItem === index ? 'selected' : ''}`}
				>
					<div className="calculator-popup__item-icon">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path style={{ transition: 'opacity 0.5s' }} opacity={selectedItem === index ? 1 : 0.2} d="M40 20C40 23.9556 38.827 27.8224 36.6294 31.1114C34.4318 34.4004 31.3082 36.9638 27.6537 38.4776C23.9991 39.9913 19.9778 40.3874 16.0982 39.6157C12.2186 38.844 8.65491 36.9392 5.85786 34.1421C3.06081 31.3451 1.156 27.7814 0.384294 23.9018C-0.38741 20.0222 0.00865672 16.0009 1.52241 12.3463C3.03616 8.69181 5.59961 5.56824 8.8886 3.37061C12.1776 1.17298 16.0444 -4.71704e-08 20 0V7.00607C17.43 7.00607 14.9178 7.76815 12.781 9.19594C10.6441 10.6237 8.97866 12.6531 7.99518 15.0274C7.0117 17.4018 6.75437 20.0144 7.25575 22.535C7.75712 25.0556 8.99467 27.3709 10.8119 29.1881C12.6291 31.0053 14.9444 32.2429 17.465 32.7443C19.9856 33.2456 22.5982 32.9883 24.9726 32.0048C27.3469 31.0213 29.3763 29.3559 30.8041 27.219C32.2318 25.0822 32.9939 22.57 32.9939 20H40Z" fill="url(#paint0_linear_1105_249)"/>
						<defs>
						<linearGradient id="paint0_linear_1105_249" x1="1.80832" y1="5.78083" x2="44.2965" y2="12.3935" gradientUnits="userSpaceOnUse">
							<stop stopColor="#2BBFFE"/>
							<stop offset="0.521875" stopColor="#8629FD"/>
							<stop offset="1" stopColor="#FC4AF5"/>
						</linearGradient>
						</defs>
					</svg>
					</div>

					<div style={{width: "300px"}} className="calculator-popup__item-input">
						<input type="text" placeholder={arrayWebsite4[index]} />
					</div>
				</div>
				))
			)}
			</div>


			<div className="calculator-popup__container-buttons" onClick={handleStep}>
				<GradientBtn
					text="Next step"
					width="100%"
					height="50"
              	/>
			</div>
		</div>


	</div>
  )
}

export default Calculator;