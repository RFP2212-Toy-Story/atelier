
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
    <Styles.HeaderWrapperDiv data-module-name="header">
      <Styles.HeaderDiv data-testid="header-proper" scrolled={scrolled}>

        <div style={{ position: 'relative' }}>
          <Styles.FontDiv>
            <h1>DINOMITE DESIGNS🦖</h1>
          </Styles.FontDiv>

          <Styles.FadingDiv scrolled={scrolled}>
            <Styles.FontDiv>
              <div style={{ position: 'relative', top: '-4rem', left: '-2rem' }}>
                VINTAGE CLOTHES THAT OUTLAST EONS
              </div>
            </Styles.FontDiv>
          </Styles.FadingDiv>
        </div>

        <div style={{ position: 'relative' }}>
          <form>
            <input style={{ backgroundColor: '#74AA90' }} type="text" placeholder="search..." />
            <button type="submit">🔎</button>
          </form>
        </div>

      </Styles.HeaderDiv>
    </Styles.HeaderWrapperDiv>
  );
};


export default Header;
