import React from 'react'
import "./style/gradient-btn.css"

function GradientBtn({text, isSubmitBtn = false}) {
  return (
    <button className='gradient-btn'>
        {text}

        {isSubmitBtn ? 
          <svg width='30' height='30' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_506_608)'>
              <path
                d='M30.3624 6.88688L21.8624 28.8452C21.4976 29.7874 20.2921 30.0559 19.5621 29.3576L14.7708 24.7745L11.8338 27.7114C11.3876 28.1577 10.6246 27.8416 10.6246 27.2106V20.8087L3.27036 13.7742C2.46751 13.0063 2.82078 11.6551 3.89678 11.3785L28.6885 5.00345C29.8048 4.71635 30.7785 5.81185 30.3624 6.88688ZM26.9164 8.50051L11.3778 18.6344L13.8364 20.9861L26.9164 8.50051Z'
                fill='white'
              />
            </g>
            <defs>
              <clipPath id='clip0_506_608'>
                <rect width='34' height='34' fill='white' />
              </clipPath>
            </defs>
          </svg>  
          :
          ""
        }
    </button>
  )
}

export default GradientBtn