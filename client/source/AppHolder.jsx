// LIBRARY IMPORTS
import React, { useEffect, useState } from 'react';
import GlobalStyles from './GlobalStyles.js';

// LOCAL IMPORTS
import App from './App.jsx';
import ProdContext from './ProdContext.js';
import * as requests from './utilities/axiosRequests.js';


// MAIN
const AppHolder = function CreateAppHolder() {
  const [prodID, setProdID] = useState(40344); // TODO: default view for 'no item searched yet'
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    requests.get(`/products/${prodID}`)
      .then((response) => { setProduct(response.data); })
      .catch((error) => { console.error(error); });
  }, [prodID]);

  return (
    <div>
      <GlobalStyles />
      <ProdContext.Provider value={{ prodID, setProdID, product, setProduct }}> {/* eslint-disable-line */}
        <App />
      </ProdContext.Provider>
    </div>
  );
};

export default AppHolder;
