import React from 'react'
import "./style/localisation-field.css"

function LocalisationField({gradient}) {
  const styles = {
    text: {
      background: gradient,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    line: { background: gradient }
  }
  
  return (
    <div className='localisation-field'>
        <p className='localisation-field__language' style={styles.text}>UA</p>

        <div className="localisation-field__line" style={styles.line}></div>
        
        <p className='localisation-field__language' style={styles.text}>CZ</p>
    </div>
  )
}

export default LocalisationField