import React from 'react'
import "./style/burger-menu.css"

const BurgerMenu = ({ burgerOnClick }) => {
  return (
    <div className="header__menu" onClick={burgerOnClick} >
        <div className="rolling__block rolling__block--menu">
        <p className="menu__text rolling__block--before">MENU</p>
        <p className="menu__text rolling__block--after">MENU</p>
        </div>

        <div className="menu__icon">
        <div className="menu__icon-line">
            <div className="menu__icon-line__inner menu__icon--bar"></div>
            <div className="menu__icon-line__inner menu__icon--bar"></div>
        </div>


        <div className="menu__icon-line">
            <div className="menu__icon-line__inner menu__icon--bar"></div>
            <div className="menu__icon-line__inner menu__icon--bar"></div>
        </div>


        <div className="menu__icon-line">
            <div className="menu__icon-line__inner menu__icon--bar"></div>
            <div className="menu__icon-line__inner menu__icon--bar"></div>
        </div>
        </div>
    </div>
  )
}

export default BurgerMenu