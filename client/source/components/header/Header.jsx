
// LIBRARY IMPORTS
import React, { useEffect, useState } from 'react';

import * as Styles from './headerStyles.js';


// HEADER COMPONENT
const Header = function CreateHeaderComponent() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // returns at unmount, and prevents potential memory leaks
    return (() => { window.removeEventListener('scroll', handleScroll); });
  }, []);

  return (
    <Styles.HeaderWrapperDiv>

      <Styles.HeaderDiv scrolled={scrolled}>

        <div className="FlexColumn">

          <div className="FlexRow">

            <Styles.PixelFontDiv>
              <h1>DINOMITE DESIGNS</h1>
            </Styles.PixelFontDiv>

            <h1 style={{ position: 'relative', bottom: '8px', marginLeft: '8px' }}>🦖</h1>

          </div>

          <Styles.PixelFontDiv>
            <Styles.FadingDiv scrolled={scrolled}>
              VINTAGE CLOTHES THAT OUTLAST EONS
            </Styles.FadingDiv>
          </Styles.PixelFontDiv>

        </div>

        <div className="FlexRow">
          <a href="#top">
            <button type="button">TOP OF PAGE</button>
          </a>

          <a href="#overview-component">
            <button type="button">OVERVIEW</button>
          </a>

          <a href="#test-api-component">
            <button type="button">TEST API COMPONENT</button>
          </a>

          <form>
            <input style={{ backgroundColor: '#E07A5F' }} type="text" placeholder="search..." />
            <button type="submit">🔎</button>
          </form>
        </div>

      </Styles.HeaderDiv>
    </Styles.HeaderWrapperDiv>
  );
};


export default Header;
