
// LIBRARY IMPORTS
import React, { useEffect, useState } from 'react';


// HEADER COMPONENT
const Header = function CreateHeaderComponent() {
  const [stuck, setStuck] = useState(false);

  const headerClasses = `header ${(stuck) ? 'sticky-header' : ''}`;
  const subClasses = `header-title ${(stuck) ? 'hidden' : ''}`;

  const handleScroll = () => {
    setStuck(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // returns at unmount, and prevents potential memory leaks
    return (() => { window.removeEventListener('scroll', handleScroll); });
  }, []);

  return (
    <div className="header-wrapper">
      <div className={headerClasses}>

        <div className="flex-column">
          <div className="header-title flex-row">
            <h1>DINOMITE DESIGNS</h1>
            <h1 style={{ position: 'relative', bottom: '8px', marginLeft: '8px' }}>🦖</h1>
          </div>
          <div style={{ marginRight: '32px' }} className={subClasses}>VINTAGE CLOTHES THAT OUTLAST EONS</div>
        </div>

        <div className="flex-row">
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
            <input className="header-search-bar-field" type="text" placeholder="search..." />
            <button className="header-search-bar-field" type="submit">🔎</button>
          </form>
        </div>

      </div>
    </div>
  );
};


export default Header;
