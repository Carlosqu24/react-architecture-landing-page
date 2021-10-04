import React from 'react'

import './Footer.css'

export const Footer = () => {
      return (
            <footer className="footer">
                   <div className="footer__left">
                              <div className="footer__logo">Architect</div>
                        </div>

                        <div className="footer__right">
                              <h3 className="footer__title">Get in touch</h3>
                              <p>84848484</p>
                              <p>example@gmail.com</p>
                              <p>Pérez Zeledón, San José, Costa Rica</p>
                              <ul className="social-links">
                                    <li className="social-item">
                                          <a href="" className="social-link">Facebook</a>
                                    </li>
                                    <li className="social-item">
                                          <a href="" className="social-link">Twitter</a>
                                    </li>
                                    <li className="social-item">
                                          <a href="" className="social-link">Instagram</a>
                                    </li>
                              </ul>
                        </div>
                  
            </footer>
      )
}
