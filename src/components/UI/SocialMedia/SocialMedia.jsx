import React from 'react'
import "./style/social-media.css"

function SocialMedia({linkPath, icon, size, nameOfMedia}) {
  return (
    <a href={linkPath} target='_blank' aria-label='Click to contact us' className={`social-media social-media--${size} social-media--${nameOfMedia}`}>
      {icon}
    </a>
  )
}

export default SocialMedia