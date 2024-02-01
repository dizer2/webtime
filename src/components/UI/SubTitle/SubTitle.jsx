import React from 'react'
import "./style/subTitle.css"

const subTitle = ({text}) => {
  return (
	<div className="subTitle__container">
		<div className="subTitle__container-line"></div>
		<p className="subTitle__container-description">{text}</p>
	</div>
  )
}

export default subTitle;
