import React from 'react'
import "./style/contacts.css"

import SubTitle from "../UI/SubTitle/SubTitle.jsx"
import Title from '../UI/Title/Title.jsx'

const Contacts = () => {
  return (
    <section className='contacts'>
      <SubTitle text={"LET'S GO TO ACTION"}/>
      
      <Title 
        text={"Let us create the best design for your niche"}
        description={""}
      />

      <div className="contacts__wrapper">
        <div className="contacts__info">
            <a href='mailto:help.webtime@gmail.com' className="contacts__info-email">help.webtime@gmail.com</a>
            <a href='tel:+420 773 203 868' className="contacts__info-phone">+420 773 203 868</a>
        </div>

        <div className="contacts__form">
            <div className="contacts__form-row">
              <div className="contacts__form-box">
                <p className="contacts__form-box__heading">Name</p>
                <input className='contacts__form-box__input' type="text" placeholder='Your name' />
              </div>

              <div className="contacts__form-box">
                <p className="contacts__form-box__heading">
                  Company

                  <div className="contacts__form-box__heading-clue">

                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.2847 1.9991C6.97598 1.41229 6.49263 0.923361 5.89387 0.568704C5.29537 0.215618 4.57291 1.68782e-05 3.78881 1.68782e-05C2.82229 -0.00237375 2.01928 0.249439 1.41321 0.598165C0.804721 0.94565 0.542362 1.35023 0.542362 1.35023C0.440104 1.43896 0.382424 1.56806 0.384838 1.7031C0.387604 1.83834 0.449877 1.96527 0.555299 2.0496L1.39748 2.72413C1.56914 2.86157 1.81481 2.85642 1.98049 2.71199C1.98049 2.71199 2.08394 2.52501 2.40815 2.33981C2.73417 2.15582 3.15686 2.00763 3.78881 2.00563C4.33999 2.00444 4.82057 2.21013 5.14856 2.49119C5.3115 2.63043 5.43321 2.78636 5.50781 2.929C5.583 3.07281 5.61044 3.19853 5.61007 3.29402C5.60847 3.61666 5.5458 3.82769 5.45531 4.0075C5.38628 4.14178 5.29619 4.26093 5.1802 4.3765C5.00714 4.54956 4.77243 4.70948 4.50909 4.85648C4.24553 5.00526 3.96147 5.13613 3.67443 5.29429C3.34682 5.4757 3.00014 5.73628 2.74394 6.12735C2.61623 6.32069 2.51636 6.54187 2.45294 6.77519C2.38867 7.00872 2.35966 7.2536 2.35966 7.50342C2.35966 7.76995 2.35966 7.98876 2.35966 7.98876C2.35966 8.23999 2.56333 8.44368 2.81458 8.44368H3.91057C4.16179 8.44368 4.36549 8.23999 4.36549 7.98876C4.36549 7.98876 4.36549 7.76995 4.36549 7.50342C4.36549 7.40716 4.37643 7.3451 4.38698 7.3057C4.4051 7.24682 4.41524 7.2321 4.44487 7.19629C4.4751 7.16226 4.53616 7.11018 4.64873 7.04791C4.81324 6.95542 5.07759 6.8305 5.37693 6.66878C5.82508 6.42372 6.36991 6.09114 6.8294 5.54233C7.05796 5.26844 7.26004 4.93863 7.39947 4.5587C7.54012 4.17878 7.61608 3.75173 7.61571 3.29402C7.61528 2.83033 7.48957 2.38994 7.2847 1.9991Z" fill="black"/>
                      <path d="M3.36222 9.52734C2.67897 9.52734 2.125 10.0815 2.125 10.7646C2.125 11.4474 2.67899 12.0014 3.36222 12.0014C4.04509 12.0014 4.59885 11.4474 4.59885 10.7646C4.59885 10.0815 4.04509 9.52734 3.36222 9.52734Z" fill="black"/>
                    </svg>
                  </div>
                </p>
                <input className='contacts__form-box__input' type="text" placeholder='Name of your company' />
              </div>
            </div>

            <div className="contacts__form-row">
              <div className="contacts__form-box">
                <p className="contacts__form-box__heading">Email</p>
                <input className='contacts__form-box__input' type="text" placeholder='Your email' />
              </div>

              <div className="contacts__form-box">
                <p className="contacts__form-box__heading">Phone number</p>
                <input className='contacts__form-box__input' type="text" placeholder='Your phone number' />
              </div>
            </div>

            <div className="contacts__form-box">
              <p className="contacts__form-box__heading">Message</p>

              <div className="contacts__form-box__message">
                <textarea className='contacts__form-box__input contacts__form-box__textarea' placeholder='Write about the service that you would like to receive'></textarea>
                <div className="contacts__form-box__btn">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_506_608)">
                    <path d="M30.3624 6.88688L21.8624 28.8452C21.4976 29.7874 20.2921 30.0559 19.5621 29.3576L14.7708 24.7745L11.8338 27.7114C11.3876 28.1577 10.6246 27.8416 10.6246 27.2106V20.8087L3.27036 13.7742C2.46751 13.0063 2.82078 11.6551 3.89678 11.3785L28.6885 5.00345C29.8048 4.71635 30.7785 5.81185 30.3624 6.88688ZM26.9164 8.50051L11.3778 18.6344L13.8364 20.9861L26.9164 8.50051Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_506_608">
                    <rect width="34" height="34" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts