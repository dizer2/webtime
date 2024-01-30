import React from 'react'
import "./style/gradient-btn.css"

function GradientBtn({width, height, text}) {
    const styles = {
        width: `${width}`,
        height: `${height}px`
    }

  return (
    <button className='gradient-btn' style={styles}>
        {text}
    </button>
  )
}

export default GradientBtn