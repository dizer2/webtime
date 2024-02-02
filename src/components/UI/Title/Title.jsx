import React from 'react'
import "./style/title.css"

const Title = ({text, description}) => {
  return (
	<div className="title__container">
		<p data-after-content={description}  className='title__container-title'>{text}</p>
	</div>
  )
}

export default Title;