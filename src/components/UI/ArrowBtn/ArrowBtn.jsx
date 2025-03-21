import React from 'react';
import "./style/arrow-btn.css";

const ArrowBtn = ({ handleClick, text, isGradient = true, customGradient, isWhite = false, gradientID = "paint0_linear_866_370", color1 = "#2BBFFE", color2 = "#8629FD", color3 = "#FC4AF5", offset = "0.521875" }) => {
  const styles = {
    background: isGradient && customGradient
      ? `linear-gradient(${customGradient.direction}, ${customGradient.colors.join(', ')})`
      : "none",
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: isWhite ? "white" : 'transparent',
  };
  

  return (
    <div onClick={handleClick} className={`arrow-btn arrow-btn--${isWhite ? "white" : "gradient"}`}>
      <span style={styles}>{text}</span>

      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.4501 4.21689C21.9619 3.72874 21.9619 2.93728 22.4501 2.44912C22.9383 1.96097 23.7297 1.96097 24.2179 2.44912L30.8845 9.11579C31.3727 9.60394 31.3727 10.3954 30.8845 10.8836L24.2179 17.5502C23.7297 18.0384 22.9383 18.0384 22.4501 17.5502C21.9619 17.0621 21.9619 16.2706 22.4501 15.7825L26.9829 11.2497H10.834C10.1436 11.2497 9.58398 10.69 9.58398 9.99967C9.58398 9.30932 10.1436 8.74967 10.834 8.74967H26.9829L22.4501 4.21689Z"
          fill={isGradient && customGradient ? `url(#${gradientID}` : "white"}
        />
        <defs>
          <linearGradient id={gradientID} x1="10.5635" y1="4.37125" x2="33.1126" y2="9.17363"
            gradientUnits="userSpaceOnUse">
            <stop stopColor={color1}/>
            <stop offset={offset} stopColor={color2} />
            <stop offset="1" stopColor={color3} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ArrowBtn;