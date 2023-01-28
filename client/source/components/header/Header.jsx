
// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import SiteNews from './SiteNews';


// MAIN
function Header() {
  return (
    <div>
      <div className="header flex-row">
        <div>
          <h1>DINOMITE DESIGNS 🦖</h1>
        </div>
        <div className="flex-row-filler" />
        <div>
          <input type="text" placeholder="search..." />
        </div>
        <hr />
      </div>
      <SiteNews />
    </div>
  );
}


export default Header;
