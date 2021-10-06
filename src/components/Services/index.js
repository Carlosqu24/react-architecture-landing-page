import React from 'react'

import './Services.css';

import db from '../../db/Services.json'

export const Services = () => {
      return (
            <div id="services" className="services" >
                  <h2 className="title">Services</h2>
                  
                  <div className="services-container">
                        {
                              db.map(service => (
                                    <div className="service-card" key={service.id}>
                                          {/* <i className={`${service.icon} icon`}></i> */}
                                          <img src={service.icon} alt="" />
                                          <h2 className="service-card__title">{service.title}</h2>
                                          <p className="service-card__description">{service.description}</p>
                                          <a href="" className="service-card__link">
                                                <p>See more</p>
                                                <i class="fas fa-arrow-right"></i>
                                          </a>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      )
}
