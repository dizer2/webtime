import React from 'react'
import "./style/localisation-field.css"

function LocalisationField() {
  return (
    <div className='localisation-field'>
        <p className='localisation-field__language'>UA</p>

        <div className="localisation-field__line"></div>
        
        <p className='localisation-field__language'>CZ</p>
    </div>
  )
}

export default LocalisationField