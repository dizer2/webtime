import React, { useEffect, useState } from 'react'
import "./style/loader.css"
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { useTranslation } from 'react-i18next';

const Loader = ({ hideLoader, setHideLoader, currentPage }) => {
    const { t } = useTranslation();
    const [currentLang, setCurrentLang] = useState(localStorage.getItem('i18nextLng'));
	const [gradient, setGradient] = useState('');


	useEffect(() => {
        setGradient(`${t(`servicesPage.${currentPage}.mainColor`)}`);
		console.log(gradient);
    }, [currentPage]);

	useEffect(() => {
		const timer = setTimeout(() => {
		setHideLoader(true);
		}, 5000);

		return () => clearTimeout(timer);
	}, [hideLoader]);

	useEffect(() => {
		const timer = setTimeout(() => {
		document.body.classList.remove("_body-hidden"); 
		console.log("REMOVE BODY HIDDEN")
		}, 4000);	

		return () => clearTimeout(timer);
	}, [hideLoader]);

	const icon = {
		hidden: {
		  opacity: 0,
		  pathLength: 0,
		  fill: "rgba(255, 255, 255, 0)"
		},
		visible: {
		  opacity: 1,
		  pathLength: 1,
		  fill: "rgba(255, 255, 255, 1)"
		}
	  };

  return (
	<motion.div
      className={`${hideLoader ? "hidden": "loader"}`}
	  animate={{ height: [100 + "vh", 0 + "vh"]}}
			transition={{
				type: "spring",
				stiffness: 260,
				duration: 1,
				damping: 80,
				delay: 3.5,
	}}
    >

		<motion.div
			className="loader__bg1"
			style={{ background: gradient  }}
			animate={{
				rotate: [0, 270], 
				x: [0, -1000], 
			}}
			transition={{
				type: "spring",
				duration: 2,
				delay: 3,
			}}
			>
		</motion.div>

		<motion.div
			className="loader__bg2"
			style={{ background: gradient }}
			animate={{
				rotate: [0, 270], 
				x: [0, 1000], 
			}}
			transition={{
				type: "spring",
				duration: 2,
				delay: 3,
			}}
			>
			{/* Вміст, який ви бажаєте анімувати */}
		</motion.div>

		 <motion.svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 179 39"
			initial={{ opacity: 1 }}
			animate={{ opacity: 0 }}
			transition={{ duration: 1, delay: 2.5 }}
		>

		<motion.path
			d="M171.764 31.2084C170.057 31.2084 168.555 30.8525 167.256 30.1407C165.976 29.4288 164.983 28.4599 164.278 27.234C163.573 25.9883 163.221 24.5745 163.221 22.9926C163.221 21.391 163.564 19.9772 164.25 18.7513C164.955 17.5056 165.911 16.5367 167.117 15.8446C168.323 15.1328 169.686 14.7769 171.208 14.7769C172.673 14.7769 173.991 15.113 175.159 15.7853C176.347 16.4378 177.284 17.3869 177.97 18.6326C178.657 19.8586 179 21.3317 179 23.0519C179 23.2299 178.991 23.4375 178.972 23.6748C178.942 24.028 178.645 24.2977 178.291 24.2977H167.755C167.203 24.2977 166.755 23.8499 166.755 23.2977V22.5986C166.755 22.0463 167.203 21.5986 167.755 21.5986H175.274C175.603 21.5986 175.705 22.0445 175.408 22.1869C175.202 22.2854 174.964 22.1354 174.945 21.9084C174.894 21.2812 174.743 20.7231 174.491 20.2343C174.176 19.6213 173.74 19.1467 173.184 18.8106C172.627 18.4547 171.978 18.2767 171.235 18.2767C170.493 18.2767 169.835 18.4547 169.26 18.8106C168.703 19.1467 168.267 19.6312 167.952 20.2639C167.636 20.8769 167.479 21.6085 167.479 22.4588V23.1706C167.479 24.0406 167.655 24.8118 168.007 25.4841C168.378 26.1366 168.889 26.6408 169.538 26.9967C170.206 27.3329 170.985 27.5009 171.876 27.5009C172.673 27.5009 173.369 27.3724 173.963 27.1153C174.255 26.9926 174.535 26.8407 174.801 26.6594C175.286 26.3302 175.962 26.3391 176.345 26.7821L177.389 27.9884C177.708 28.3576 177.72 28.9102 177.364 29.2444C176.79 29.7836 176.12 30.2207 175.354 30.5559C174.315 30.9909 173.119 31.2084 171.764 31.2084Z"
			variants={icon}
			initial="hidden"
			animate="visible"
			className="item"
			transition={{
			default: { duration: 2, ease: "easeInOut" },
			fill: { duration: 2, ease: [1, 0, 0.8, 1] }
			}}
		/>
		<motion.path
			d="M154.213 14.7769C155.401 14.7769 156.449 15.0339 157.358 15.548C158.286 16.0423 159.009 16.8135 159.529 17.8615C160.067 18.8897 160.336 20.2145 160.336 21.8359V29.9711C160.336 30.5234 159.888 30.9711 159.336 30.9711H156.994C156.442 30.9711 155.994 30.5234 155.994 29.9711V22.5477C155.994 21.2625 155.744 20.3134 155.243 19.7004C154.742 19.0874 154.037 18.7809 153.128 18.7809C152.497 18.7809 151.931 18.9391 151.43 19.2555C150.929 19.5521 150.54 20.0069 150.262 20.6198C149.983 21.2328 149.844 22.0139 149.844 22.963V29.9711C149.844 30.5234 149.396 30.9711 148.844 30.9711H146.503C145.951 30.9711 145.503 30.5234 145.503 29.9711V22.5477C145.503 21.2625 145.252 20.3134 144.751 19.7004C144.269 19.0874 143.573 18.7809 142.664 18.7809C142.033 18.7809 141.468 18.9391 140.967 19.2555C140.466 19.5521 140.076 20.0069 139.798 20.6198C139.52 21.2328 139.38 22.0139 139.38 22.963V29.9711C139.38 30.5234 138.933 30.9711 138.38 30.9711H136.039C135.487 30.9711 135.039 30.5234 135.039 29.9711V16.0141C135.039 15.4618 135.487 15.0141 136.039 15.0141H138.228C138.757 15.0141 139.186 15.4427 139.186 15.9714V18.0774C139.186 18.4459 138.702 18.582 138.51 18.2676C138.445 18.1623 138.438 18.0312 138.494 17.9214C139.007 16.9216 139.711 16.1601 140.605 15.637C141.57 15.0636 142.664 14.7769 143.889 14.7769C145.262 14.7769 146.458 15.1525 147.479 15.9039C148.295 16.4786 148.893 17.2974 149.275 18.3601C149.421 18.7684 149.03 19.1376 148.614 19.0165C148.289 18.9221 148.115 18.5666 148.269 18.2656C148.77 17.2867 149.48 16.4896 150.401 15.8743C151.514 15.1427 152.785 14.7769 154.213 14.7769Z"			
			variants={icon}
			initial="hidden"
			animate="visible"
			className="item"
			transition={{
			default: { duration: 2, ease: "easeInOut" },
			fill: { duration: 2, ease: [1, 0, 0.8, 1] }
			}}
		/>

		<motion.path
			d="M127.667 30.9717C127.115 30.9717 126.667 30.524 126.667 29.9717V16.0147C126.667 15.4624 127.115 15.0147 127.667 15.0147H130.009C130.561 15.0147 131.009 15.4624 131.009 16.0147V29.9717C131.009 30.524 130.561 30.9717 130.009 30.9717H127.667ZM128.838 12.7902C128.04 12.7902 127.391 12.543 126.89 12.0487C126.389 11.5544 126.139 10.9414 126.139 10.2098C126.139 9.47819 126.389 8.86522 126.89 8.37089C127.391 7.87656 128.04 7.62939 128.838 7.62939C129.636 7.62939 130.285 7.86667 130.786 8.34123C131.287 8.79602 131.538 9.38921 131.538 10.1208C131.538 10.892 131.287 11.5346 130.786 12.0487C130.304 12.543 129.654 12.7902 128.838 12.7902Z"			
			initial="hidden"
			variants={icon}
			className="item"
			animate="visible"
			transition={{
			default: { duration: 2, ease: "easeInOut" },
			fill: { duration: 2, ease: [1, 0, 0.8, 1] }
			}}
		/>

		<motion.path
			d="M114.808 30.9714C114.256 30.9714 113.808 30.5236 113.808 29.9714V15.1246C113.808 14.5723 113.36 14.1246 112.808 14.1246H108.574C108.022 14.1246 107.574 13.6769 107.574 13.1246V11.2095C107.574 10.6572 108.022 10.2095 108.574 10.2095H123.55C124.102 10.2095 124.55 10.6572 124.55 11.2095V13.1246C124.55 13.6769 124.102 14.1246 123.55 14.1246H119.316C118.764 14.1246 118.316 14.5723 118.316 15.1246V29.9714C118.316 30.5236 117.869 30.9714 117.316 30.9714H114.808Z"			
			initial="hidden"
			variants={icon}
			className="item"
			animate="visible"
			transition={{
			default: { duration: 2, ease: "easeInOut" },
			fill: { duration: 2, ease: [1, 0, 0.8, 1] }
			}}
		/>

		<motion.path
			d="M100.924 31.2092C99.6066 31.2092 98.4749 30.9126 97.5287 30.3194C96.5825 29.7262 95.859 28.8266 95.3581 27.6204C94.8571 26.3945 94.6067 24.8521 94.6067 22.9935C94.6067 21.115 94.8664 19.5727 95.3859 18.3665C95.9239 17.1604 96.666 16.2607 97.6122 15.6675C98.5584 15.0743 99.6623 14.7777 100.924 14.7777C102.334 14.7777 103.595 15.1138 104.709 15.7861C105.84 16.4584 106.731 17.4075 107.38 18.6335C108.048 19.8594 108.382 21.3127 108.382 22.9935C108.382 24.6544 108.048 26.0979 107.38 27.3238C106.731 28.5497 105.84 29.5087 104.709 30.2008C103.595 30.8731 102.334 31.2092 100.924 31.2092ZM93.0742 30.972C92.5219 30.972 92.0742 30.5242 92.0742 29.972V9.96435C92.0742 9.41207 92.5219 8.96436 93.0742 8.96436H95.4156C95.9678 8.96436 96.4156 9.41207 96.4156 9.96436V18.2479L96.1373 22.9638L96.2208 27.7094V29.972C96.2208 30.5242 95.773 30.972 95.2208 30.972H93.0742ZM100.172 27.4128C100.896 27.4128 101.536 27.2348 102.093 26.8789C102.668 26.523 103.122 26.0188 103.456 25.3662C103.809 24.694 103.985 23.903 103.985 22.9935C103.985 22.0641 103.809 21.2732 103.456 20.6207C103.122 19.9682 102.668 19.4639 102.093 19.108C101.536 18.7521 100.896 18.5741 100.172 18.5741C99.4489 18.5741 98.7996 18.7521 98.2244 19.108C97.6493 19.4639 97.1948 19.9682 96.8608 20.6207C96.5269 21.2732 96.3599 22.0641 96.3599 22.9935C96.3599 23.903 96.5269 24.694 96.8608 25.3662C97.1948 26.0188 97.6493 26.523 98.2244 26.8789C98.7996 27.2348 99.4489 27.4128 100.172 27.4128Z"
			initial="hidden"
			variants={icon}
			className="item"
			animate="visible"
			transition={{
			default: { duration: 2, ease: "easeInOut" },
			fill: { duration: 2, ease: [1, 0, 0.8, 1] }
			}}
		/>

		<motion.path
			d="M81.9459 31.2084C80.239 31.2084 78.7363 30.8525 77.4376 30.1407C76.1574 29.4288 75.1649 28.4599 74.4598 27.234C73.7548 25.9883 73.4023 24.5745 73.4023 22.9926C73.4023 21.391 73.7456 19.9772 74.432 18.7513C75.137 17.5056 76.0925 16.5367 77.2984 15.8446C78.5043 15.1328 79.868 14.7769 81.3893 14.7769C82.855 14.7769 84.1722 15.113 85.341 15.7853C86.5284 16.4378 87.4653 17.3869 88.1518 18.6326C88.8382 19.8586 89.1814 21.3317 89.1814 23.0519C89.1814 23.2299 89.1722 23.4375 89.1536 23.6748C89.1235 24.028 88.827 24.2977 88.4726 24.2977H77.9366C77.3844 24.2977 76.9366 23.8499 76.9366 23.2977V22.5986C76.9366 22.0463 77.3844 21.5986 77.9366 21.5986H85.4556C85.7848 21.5986 85.8862 22.0445 85.5894 22.1869C85.384 22.2854 85.1453 22.1354 85.1268 21.9084C85.0759 21.2812 84.9247 20.7231 84.6731 20.2343C84.3577 19.6213 83.9217 19.1467 83.3652 18.8106C82.8086 18.4547 82.1592 18.2767 81.4171 18.2767C80.675 18.2767 80.0164 18.4547 79.4413 18.8106C78.8847 19.1467 78.4487 19.6312 78.1333 20.2639C77.8179 20.8769 77.6602 21.6085 77.6602 22.4588V23.1706C77.6602 24.0406 77.8364 24.8118 78.1889 25.4841C78.56 26.1366 79.0702 26.6408 79.7195 26.9967C80.3874 27.3329 81.1667 27.5009 82.0572 27.5009C82.855 27.5009 83.5507 27.3724 84.1444 27.1153C84.4366 26.9926 84.7162 26.8407 84.9831 26.6594C85.4677 26.3302 86.1433 26.3391 86.5266 26.782L87.5705 27.9884C87.89 28.3576 87.9015 28.9102 87.5456 29.2444C86.9714 29.7836 86.3015 30.2207 85.5358 30.5559C84.4969 30.9909 83.3002 31.2084 81.9459 31.2084Z"			
			initial="hidden"
			variants={icon}
			className="item"
			animate="visible"
			transition={{
			default: { duration: 2, ease: "easeInOut" },
			fill: { duration: 2, ease: [1, 0, 0.8, 1] }
			}}
		/>

		<motion.path
			d="M49.3913 30.9709C48.952 30.9709 48.5642 30.6842 48.4353 30.2643L42.6763 11.5024C42.479 10.8595 42.9598 10.209 43.6323 10.209H46.2114C46.6526 10.209 47.0417 10.4981 47.1689 10.9206L52.1577 27.4862C52.3245 28.0401 51.9098 28.5981 51.3314 28.5981C50.7484 28.5981 50.3331 28.032 50.5082 27.4759L55.7231 10.9087C55.8542 10.4923 56.2404 10.209 56.677 10.209H59.3756C59.8163 10.209 60.2051 10.4975 60.3327 10.9193L65.358 27.5225C65.5201 28.058 65.1193 28.5981 64.5597 28.5981C63.9983 28.5981 63.5972 28.0545 63.7628 27.518L68.8889 10.914C69.0183 10.4949 69.4057 10.209 69.8444 10.209H72.0671C72.7396 10.209 73.2204 10.8595 73.023 11.5024L67.2641 30.2643C67.1352 30.6842 66.7473 30.9709 66.3081 30.9709H62.9452C62.5054 30.9709 62.1172 30.6835 61.9888 30.2629L57.4653 15.4456C57.3727 15.1423 57.5996 14.8359 57.9166 14.8359C58.2352 14.8359 58.4622 15.1451 58.3668 15.4491L53.7143 30.2704C53.5835 30.6872 53.1971 30.9709 52.7602 30.9709H49.3913Z"			
			initial="hidden"
			variants={icon}
			className="item"
			animate="visible"
			transition={{
			default: { duration: 2, ease: "easeInOut" },
			fill: { duration: 2, ease: [1, 0, 0.8, 1] }
			
			}}

		/>

		<motion.path
			d="M18.8867 38.1436C18.8057 38.1441 18.7244 38.1444 18.6427 38.1444H0V7.59588H8.29136V15.7702H11.8477V22.1629H8.29136V31.5351H12.3585V27.0376H12.3633V14.0356H12.3585V7.59588H12.36V7.0542H0V0.22211V0H31.2212V7.05322H20.7012V7.59583H31.2212V9.88326C31.2221 9.94095 31.2225 9.99887 31.2225 10.057C31.2225 12.0434 30.7965 13.8019 29.8695 15.2827C29.0306 16.5901 27.9105 17.6313 26.5092 18.4062C26.8483 18.5254 27.1788 18.658 27.5005 18.804C29.2515 19.5625 30.6077 20.7001 31.569 22.217C32.5646 23.7339 33.0624 25.5939 33.0624 27.797C33.0624 31.0475 31.8436 33.5937 29.406 35.4356C27.3348 36.97 24.4333 37.8525 20.7013 38.0832V38.1436H18.8867ZM20.7013 31.2999C21.5917 31.1201 22.3303 30.8374 22.9171 30.4516C24.0501 29.6931 24.6166 28.5013 24.6166 26.876C24.6166 25.2869 24.0501 24.1131 22.9171 23.3547C22.4481 23.0155 21.882 22.7486 21.2189 22.5542V14.6859C22.3167 13.9274 22.8656 12.79 22.8656 11.2737C22.8656 9.79297 22.3163 8.69142 21.2176 7.96909C21.0566 7.85429 20.8845 7.74819 20.7013 7.65077V14.9899L20.7033 14.9889V22.422L20.7013 22.4216V31.2999Z"
			fill="url(#paint0_linear_886_264)"
			animate={{ opacity: [0, 1], scale: [0, 1] }}
			transition={{
				type: "spring",
				stiffness: 260,
				damping: 50,
				delay: 1,
			}}
		/>
		<defs>
		<linearGradient id="paint0_linear_886_264" x1="1.49469" y1="5.51267" x2="36.8216" y2="10.2782" gradientUnits="userSpaceOnUse">
		<stop stopColor={t(`servicesPage.${currentPage}.gradientParts.color1`)}/>
		<stop offset="0.521875" stopColor={t(`servicesPage.${currentPage}.gradientParts.color2`)}/>
		<stop offset="1" stopColor={t(`servicesPage.${currentPage}.gradientParts.color3`)}/>
		</linearGradient>
		</defs>

		
		</motion.svg>
	</motion.div>
  )
}

export default Loader;
