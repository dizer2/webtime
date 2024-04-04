import React, { useEffect, useState } from 'react'
import "./style/calculator.css"
import GradientBtn from '../..//UI/GradientBtn/GradientBtn.jsx';
import { useForm } from '@formspree/react';
import { useTranslation } from 'react-i18next';

const Calculator = ({ setPopupClass, calculatorShow, setCalculatorShow }) => {
	const {t, i18n} = useTranslation();

	const [step, setStep] = useState(0);
	const [websiteTitle, setWebsiteTitle] = useState(t('homePage.footer.calculator.title'));
	const [webstieType, setWebsiteType] = useState(t('homePage.footer.calculator.answer1.service1'));
	const [logo, setLogo] = useState(t('homePage.footer.calculator.answer2.option1'));
	const [seo, setSEO] = useState(t('homePage.footer.calculator.answer2.option1'));
	const [state, handleSubmit] = useForm("mwkgqgdb");

	const [arrayWebsite, setArrayWebsite] = useState([
		t('homePage.footer.calculator.answer1.service1'),
		t('homePage.footer.calculator.answer1.service2'),
		t('homePage.footer.calculator.answer1.service3'),
		t('homePage.footer.calculator.answer1.service4'),
		t('homePage.footer.calculator.answer1.service5'),
		t('homePage.footer.calculator.answer1.service6'),
		t('homePage.footer.calculator.answer1.service7'),	
		t('homePage.footer.calculator.answer1.service8'),
		t('homePage.footer.calculator.answer1.service9'),
	]);

	const [arrayWebsite2, setArrayWebsite2] = useState([
		t('homePage.footer.calculator.answer2.option1'),
		t('homePage.footer.calculator.answer2.option2'),
		t('homePage.footer.calculator.answer2.option3')
	]);
	
	const [arrayWebsite3, setArrayWebsite3] = useState([
		t('homePage.footer.calculator.answer3.option1'),
		t('homePage.footer.calculator.answer3.option2')
	]);

	const [arrayWebsite4, setArrayWebsite4] = useState([
		t('homePage.footer.calculator.answer4.option1'),
		t('homePage.footer.calculator.answer4.option2')
	]);
	

	const [svgClass, setSvgClass] = useState('svg-color2');
	const [pathClass, setPathClass] = useState('path-opacity');

	const [selectedItem, setSelectedItem] = useState(0);

	const handleItemClick = (index) => {
	setSelectedItem(index);

	switch (step) {
		case 0:
			setWebsiteType(arrayWebsite[index]);
			break;
		case 1:
			setLogo(arrayWebsite2[index]);
			break;
		case 2:
			setSEO(arrayWebsite3[index]);
			break;
		default:
			break;
	}

	};

	const handleStep = () => {

		// console.log(step);

		if (step !=3) {
			setStep(step + 1);
		}

		if (step == 0) {
			setWebsiteTitle(t('homePage.footer.calculator.answer2.title'));
		}

		if (step == 1) {
			setWebsiteTitle(t('homePage.footer.calculator.answer3.title'));
		}

		if (step == 2) {
			setWebsiteTitle(t('homePage.footer.calculator.answer4.title'));
		}

		

		if (step === 3) {

			if (inputValues[0] == '' || inputValues[1] == '') {
				setWebsiteTitle(t('homePage.footer.calculator.answer4.error'));
			} else {
				setCalculatorShow(false);
				setStep(0);

				setTimeout(() => {
					setPopupClass(true);
				}, 1000);

				setTimeout(() => {
					handleSubmit({
						webstieType,
						logo,
						seo,
						name: inputValues[0],
						phone: inputValues[1]
					});	
				}, 200)
				

			}

		}


	}

	const handleCloseCalculator = () => {
		setCalculatorShow(false);
	}

	const [inputValues, setInputValues] = useState(Array(arrayWebsite3.length).fill('')); 

	const handleInputChange = (index, value) => {
		const newInputValues = [...inputValues]; 
		newInputValues[index] = value; 
		setInputValues(newInputValues); 
	};


	// Update useState
	useEffect(() => {
		setWebsiteTitle(t('homePage.footer.calculator.title'));
		setWebsiteType(t('homePage.footer.calculator.answer1.service1'));

		setArrayWebsite([
			t('homePage.footer.calculator.answer1.service1'),
			t('homePage.footer.calculator.answer1.service2'),
			t('homePage.footer.calculator.answer1.service3'),
			t('homePage.footer.calculator.answer1.service4'),
			t('homePage.footer.calculator.answer1.service5'),
			t('homePage.footer.calculator.answer1.service6'),
			t('homePage.footer.calculator.answer1.service7'),	
			t('homePage.footer.calculator.answer1.service8'),
			t('homePage.footer.calculator.answer1.service9'),
		]);

		setArrayWebsite2([
			t('homePage.footer.calculator.answer2.option1'),
			t('homePage.footer.calculator.answer2.option2'),
			t('homePage.footer.calculator.answer2.option3')
		])

		setArrayWebsite3([
			t('homePage.footer.calculator.answer3.option1'),
			t('homePage.footer.calculator.answer3.option2')
		])

		setArrayWebsite4([
			t('homePage.footer.calculator.answer4.option1'),
			t('homePage.footer.calculator.answer4.option2')
		])
	},  [i18n.language]);

	const handleBack = () => {
		console.log(step);
	
		if (step > 0) {
			setStep(step - 1);
		}

		console.log(t('homePage.footer.calculator.answer1.title'))
	
		switch (step) {
			case 1:
				setWebsiteTitle(t('homePage.footer.calculator.answer1.title'));
				break;
			case 2:
				setWebsiteTitle(t('homePage.footer.calculator.answer2.title'));
				break;
			case 3:
				setWebsiteTitle(t('homePage.footer.calculator.answer3.title'));
				break;
			default:
				break;
		}
	
		console.log(step);
	};
	

	return (
		<div className={calculatorShow ? 'calculator-popup calculator-popup--open' : 'calculator-popup'}>
			<div className="calculator-popup__element1"></div>
			<div className="calculator-popup__element2"></div>
			<div className="calculator-popup__element3"></div>

			<div className="calculator-popup__close" onClick={handleCloseCalculator}>
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
				<p className="calculator-popup__title">{t('homePage.footer.calculator.title')}</p>
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
							<input type="text" placeholder={arrayWebsite4[index]} value={inputValues[index]} onChange={(e) => handleInputChange(index, e.target.value)} />
						</div>
					</div>
					))
				)}
				</div>


				<div className="calculator-popup__container-buttons" >
					<div onClick={handleStep}>

					<GradientBtn
						text={t('homePage.footer.calculator.btn')}
						width="100%"
						height="50"
					/>
					</div>
				<p onClick={handleBack} className='calculator-popup__container-back'>{t('homePage.footer.calculator.backText')}</p>

				</div>
			</div>


		</div>
	)
}

export default Calculator;