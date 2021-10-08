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
                                          <div className="service-card__header">
                                                <h2 className="service-card__title">{service.title}</h2>
                                                <img src={service.icon} alt="" />
                                          </div>
                                          <p className="service-card__description">{service.description}</p>
                                          <a href="" className="service-card__link">
                                                <p>See more</p>
                                                <i className="fas fa-arrow-right"></i>
                                          </a>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      )
}
