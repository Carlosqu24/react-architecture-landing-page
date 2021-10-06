import React, { useState, useEffect, useRef } from 'react';

import './Header.css'

export const Header = () => {
      const [isOn, setIsOn] = useState(false);

      const headerRef = useRef();

      const handleBurgerMenu = () => setIsOn(!isOn);

      const handleClickLink = () => setIsOn(false);


      const handleScroll = () => {
            document.addEventListener("scroll", e => {
                  if (window.scrollY >= 300) {
                        headerRef.current.classList.add("header--active");
                  }

                  if (window.scrollY < 300) {
                        headerRef.current.classList.remove("header--active");
                  }
            });
      };

      useEffect(() => {
            handleScroll();
      }, []);

      return (
            <div ref={headerRef} className="header">
                  <h2 className="header__logo">Architech</h2>

                  <ul className="navbar">
                        <li className="navbar__item">
                              <a  href="#" className="navbar__link">Home</a>
                        </li>

                        <li className="navbar__item">
                              <a href="#about" className="navbar__link">About</a>
                        </li>

                        <li className="navbar__item">
                              <a href="#services" className="navbar__link">Services</a>
                        </li>

                        <li className="navbar__item">
                              <a href="#projects" className="navbar__link">Projects</a>
                        </li>
                  </ul>

                  {
                        isOn && 
                        <ul className="responsive-menu">
                              <li className="responsive-menu__item">
                                    <a onClick={handleClickLink} href="#" className="responsive-menu__link">Home</a>
                              </li>

                              <li className="responsive-menu__item">
                                    <a onClick={handleClickLink} href="#about" className="responsive-menu__link">About</a>
                              </li>

                              <li className="responsive-menu__item">
                                    <a onClick={handleClickLink} href="#services" className="responsive-menu__link">Services</a>
                              </li>

                              <li className="responsive-menu__item">
                                    <a onClick={handleClickLink} href="#projects" className="responsive-menu__link">Projects</a>
                              </li>
                        </ul>
                  }

                  <svg className="burger-menu" onClick={handleBurgerMenu} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z" fill="currentColor" /><path d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z" fill="currentColor" /><path d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z" fill="currentColor" /></svg>
            </div>
      )
}
