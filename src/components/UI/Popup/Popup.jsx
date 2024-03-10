import React, { useEffect, useState } from 'react'
import "./style/popup.css"
import { useTranslation } from 'react-i18next'

const Popup = ({ popupClass, setPopupClass }) => {
	const classPopup = popupClass ? "popup-form popup-form--open": "popup-form"

	const { t } = useTranslation();

	useEffect(() => {
		if (popupClass) {
		  const timer = setTimeout(() => {
			setPopupClass(false);
		  }, 4000);
		  return () => clearTimeout(timer);
		}
	  }, [popupClass, setPopupClass]);
	  
  return (
	<div className={classPopup}>
	  <div className="popup-form__icon">
		<div className="popup-form__icon-background">
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.0007 25.6663C17.2223 25.6663 20.139 24.3605 22.2502 22.2492C24.3615 20.138 25.6673 17.2213 25.6673 13.9997C25.6673 10.778 24.3615 7.86137 22.2502 5.75009C20.139 3.63885 17.2223 2.33301 14.0007 2.33301C10.779 2.33301 7.86235 3.63885 5.75107 5.75009C3.63982 7.86137 2.33398 10.778 2.33398 13.9997C2.33398 17.2213 3.63982 20.138 5.75107 22.2492C7.86235 24.3605 10.779 25.6663 14.0007 25.6663Z" fill="#F5F5F5" stroke="url(#paint0_linear_972_245)" strokeWidth="2" strokeLinejoin="round"/>
				<path d="M9.33398 14L12.834 17.5L19.834 10.5" stroke="url(#paint1_linear_972_245)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				<defs>
					<linearGradient id="paint0_linear_972_245" x1="3.38884" y1="5.70516" x2="28.1736" y2="9.56253" gradientUnits="userSpaceOnUse">
						<stop stopColor="#2BBFFE"/>
						<stop offset="0.521875" stopColor="#8629FD"/>
						<stop offset="1" stopColor="#FC4AF5"/>
					</linearGradient>
					<linearGradient id="paint1_linear_972_245" x1="9.80867" y1="11.5116" x2="20.6416" y2="14.0406" gradientUnits="userSpaceOnUse">
						<stop stopColor="#2BBFFE"/>
						<stop offset="0.521875" stopColor="#8629FD"/>
						<stop offset="1" stopColor="#FC4AF5"/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	  </div>

	  <div className="popup-form__container">
		<p className='popup-form__container-title'>{t('homePage.main.contactPopup.title')}</p>

		<p className='popup-form__container-description'>{t('homePage.main.contactPopup.text')}</p>
	  </div>
	</div>
  )
}

export default Popup;
