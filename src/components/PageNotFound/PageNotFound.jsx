import React, { useEffect } from 'react';
import Parallax from 'parallax-js';
import "./style/page-not-found.css"
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


function ParallaxComponent() {
    const { t } = useTranslation();


  useEffect(() => {
    const scene = document.getElementById('scene');
    const parallax = new Parallax(scene);

    return () => {
      parallax.disable(); // Отключение параллакса при размонтировании компонента
    };
  }, []); // Пустой массив зависимостей, чтобы useEffect запускался только один раз при монтировании

  return (
    <section className="wrapper">
      <div className="container">
        <div id="scene" className="scene" data-hover-only="false">
          <div className="circle" data-depth="1.2"></div>
          <div className="one" data-depth="0.9">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>
          <div className="two" data-depth="0.60">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>
          <div className="three" data-depth="0.40">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>
          <p className="p404" data-depth="0.50">404</p>
          <p className="p404" data-depth="0.10">404</p>
        </div>
        <div className="text">
          <article>
            <p>{t(`pageNotFound.main`)}</p>
            <Link to="/">
                <button>{t(`pageNotFound.btn`)}</button>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ParallaxComponent;
