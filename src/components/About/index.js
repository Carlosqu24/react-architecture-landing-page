import React from 'react';

import './About.css'

export const About = () => {
      return (
            <section id="about" className="about">

                  <div className="container">
                  <article className="about__left">
                        <div className="text-wrapper">
                              <h2 className="title">About</h2>
                              <h3 className="subtitle">We are the leader in arch</h3>
                              <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur fugit dolore quia minus cum, eum neque perferendis velit placeat.
                              </p>
                        </div>

                        <p className="experience-text">
                              26 years of experience
                        </p>
                  </article>

                  <article className="about__right">
                        <img className="about__img" src="https://images.unsplash.com/photo-1600607687126-8a3414349a51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" />
                  </article>
                  </div>

            </section>
      )
}
