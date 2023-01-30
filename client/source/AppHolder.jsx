// LIBRARY IMPORTS
import React, { useState } from 'react';

// LOCAL IMPORTS
import App from './App.jsx';
import { ProdContext } from './ProdContext.js';

// MAIN
function AppHolder() {
  const [prodID, setProdID] = useState('product id');
  return (
    <div>
      <ProdContext.Provider value={{ prodID, setProdID }}>
        <App />
      </ProdContext.Provider>
    </div>
  );
}

export default AppHolder;
