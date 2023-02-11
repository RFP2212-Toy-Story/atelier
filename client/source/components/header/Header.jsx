
// LIBRARY IMPORTS
import React, { useContext, useEffect, useState } from 'react';

import * as Styles from './headerStyles.js';
import ProdContext from '../../ProdContext.js';


// HEADER COMPONENT
const Header = function CreateHeaderComponent() {
  const { setAdminActive } = useContext(ProdContext);
  const [scrolled, setScrolled] = useState(false);
  const [searchBarText, setSearchBarText] = useState('');

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchString = event.target[0].value;
    if (searchString === "You've got a friend in me") { setAdminActive(true); }
    setSearchBarText('');
  };

  const handleChange = (event) => {
    setSearchBarText(event.target.value);
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
            <h1>DINOMITE DESIGNS</h1>
            <Styles.FadingDiv scrolled={scrolled}>
              <img style={{ top: '3rem', right: '-5rem', width: '90px', position: 'absolute' }} alt="a cutie dinosaur" src="/images/t_rex_icon.png" />
            </Styles.FadingDiv>
          </Styles.FontDiv>

          <Styles.FadingDiv scrolled={scrolled}>
            <Styles.FontDiv>
              <div style={{ position: 'relative', top: '-4rem', left: '0.66rem' }}>
                VINTAGE CLOTHES THAT OUTLAST EONS
              </div>
            </Styles.FontDiv>
          </Styles.FadingDiv>
        </div>

        <div onSubmit={handleSubmit} style={{ position: 'relative' }}>
          <form>
            <input value={searchBarText} onChange={handleChange} style={{ backgroundColor: '#F6DEB6' }} type="text" placeholder="search..." />
            <Styles.SearchButton type="submit">🔎</Styles.SearchButton>
          </form>
        </div>

      </Styles.HeaderDiv>
    </Styles.HeaderWrapperDiv>
  );
};


export default Header;
