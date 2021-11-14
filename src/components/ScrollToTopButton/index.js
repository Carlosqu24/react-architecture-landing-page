import React, { useEffect, useRef } from 'react'

import './ScrollToTopButton.css'

export const ScrollToTopButton = () => {

      const btnRef = useRef();

      const handleClick = () => window.scrollTo(0, 0);

      const handleScroll = () => {
            document.addEventListener("scroll", e => {
                  if (window.scrollY >= 300) {
                        btnRef.current.classList.add("active");
                  }

                  if (window.scrollY < 300) {
                        btnRef.current.classList.remove("active");
                  }
            });
      };

      
      useEffect(handleScroll, []);


      return (
            <button 
                  onClick={handleClick} 
                  ref={btnRef}
                  className="btn btn--scroll-to-top"
            >
                  TOP
            </button>
      )
}
