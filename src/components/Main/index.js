import React from 'react'

// STYLES
import './Main.css';

// COMPONENTS
import { About } from '../About';
import { Hero } from '../Hero';
import { Services } from '../Services';
import { Projects } from '../Projects'; 

export const Main = () => {


      return (
            <main className="main">
                  <Hero />
                  <About />
                  <Services />
                  <Projects />
            </main>
      )
}
