import React from 'react'
import "./style/icon-box.css"

function IconBox({boxSize, imgPath, iconWidth, iconHeight, circleSize, top, theme = "black", size }) {
    const boxStyles = {
        width: `${boxSize}px`,
        height: `${boxSize}px`,
        minWidth:`${boxSize}px`,
        minHeight:`${boxSize}px`,
    }

    const iconStyles = {
        width: `${iconWidth}px`,
        height: `${iconHeight}px`,
        backgroundImage: `url(${imgPath})`,
    }

    const circleStyles = {
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        top: `${top}%`
    }


  return (
    <div className={`icon-box icon-box--${theme} icon-box--${size}`} style={boxStyles}>
        <div className='icon-box__icon' style={iconStyles}></div>
        <div className="icon-box__circle" style={circleStyles}></div>
    </div>
  )
}

export default IconBox