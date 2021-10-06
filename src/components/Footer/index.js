import React from 'react'

import './Footer.css'

export const Footer = () => {
      return (
            <footer className="footer">
                   <div className="footer__left">
                              <h2 className="footer__logo">Architect</h2>
                        </div>

                        <div className="footer__right">
                              <h3 className="footer__title">Get in touch</h3>
                              <p>+50684848484</p>
                              <p>example@gmail.com</p>
                              <p>Pérez Zeledón, San José, Costa Rica</p>
                              <ul className="social-links">
                                    <li className="social-item">
                                          <a href="" className="social-link">
                                                <i className="fab fa-facebook-f"></i>
                                          </a>
                                    </li>
                                    <li className="social-item">
                                          <a href="" className="social-link">
                                                <i className="fab fa-twitter"></i>
                                          </a>
                                    </li>
                                    <li className="social-item">
                                          <a href="" className="social-link">
                                                <i className="fab fa-instagram"></i>
                                          </a>
                                    </li>
                              </ul>
                        </div>
                  
            </footer>
      )
}
