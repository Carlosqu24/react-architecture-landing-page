import React from 'react';

import './Header.css'

export const Header = () => {
      return (
            <div className="header">
                  <h2 className="sidebar__logo">Architech</h2>

                  <ul className="navbar">
                        <li className="navbar__item">
                              <a href="#" className="navbar__link">Home</a>
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

                        <li className="navbar__item">
                              <a href="#contact" className="navbar__link">Contact</a>
                        </li>
                  </ul>
            </div>
      )
}
