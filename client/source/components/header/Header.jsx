
// LIBRARY IMPORTS
import React, { useEffect, useState } from 'react';

// LOCAL IMPORTS
import SiteNews from './SiteNews';


// HEADER COMPONENT
const Header = function CreateHeaderComponent() {
  const [stuck, setStuck] = useState(false);

  const headerClasses = `header ${(stuck) ? 'sticky-header' : ''}`;

  const handleScroll = () => {
    setStuck(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // returns at unmount, and prevents potential memory leaks
    return (() => { window.removeEventListener('scroll', handleScroll); });
  });

  return (
    <div>
      <div className={headerClasses}>
        <div>
          <h1>DINOMITE DESIGNS 🦖</h1>
        </div>
        <div />
        <div>
          <input type="text" placeholder="search..." />
        </div>
      </div>
      <SiteNews />
    </div>
  );
};


export default Header;
