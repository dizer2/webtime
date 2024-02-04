import React from 'react'
import "./style/gradient-btn.css"

function GradientBtn({text}) {
  return (
    <button className='gradient-btn'>
        {text}
    </button>
  )
}

export default GradientBtn