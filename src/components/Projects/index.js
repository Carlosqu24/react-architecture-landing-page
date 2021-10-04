import React from 'react'

import './Projects.css'

import db from '../../db/Projects.json'

export const Projects = () => {
      return (
            <div id="projects" className="projects">
                  <h2 className="title">Projects</h2>

                  <div className="projects-container">
                        {
                              db.map(project => (
                                    <div className="card">
                                          <img 
                                                className="card__image"
                                                src={project.imageUrl}
                                                alt="" />

                                          <div className="card__body">
                                                <h3 className="card__title">{project.title}</h3>
                                                <p className="card__type">{project.type}</p>
                                                <a className="card__link" href={project.url}>See project</a>
                                          </div>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      )
}
