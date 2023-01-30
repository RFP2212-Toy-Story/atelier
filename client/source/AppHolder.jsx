// LIBRARY IMPORTS
import React, { useState } from 'react';

// LOCAL IMPORTS
import App from './App';
import ProdContext from './ProdContext';


// MAIN
const AppHolder = function CreateAppHolder() {
  const [prodID, setProdID] = useState(40344); // TODO: default view for 'no item searched yet'

  return (
    <div>
      <ProdContext.Provider value={{ prodID, setProdID }}> {/* eslint-disable-line */}
        <App />
      </ProdContext.Provider>
    </div>
  );
};

export default AppHolder;
