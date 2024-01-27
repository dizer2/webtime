import React from 'react'
import "./style/social-media.css"

function SocialMedia({linkPath, icon, size}) {
  return (
    <a href={linkPath} target='_blank' aria-label='Click to contact us' className={`social-meadia social-meadia--${size}`}>
      {icon}
    </a>
  )
}

export default SocialMedia