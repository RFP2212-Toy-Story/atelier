// LIBRARY IMPORTS
import React, { useEffect, useState, useMemo } from 'react';
import GlobalStyles from './GlobalStyles.js';

// LOCAL IMPORTS
import App from './App.jsx';
import ProdContext from './ProdContext.js';
import * as requests from './utilities/axiosRequests.js';


// MAIN
const AppHolder = function CreateAppHolder() {
  const [prodID, setProdID] = useState(40444); // TODO: default view for 'no item searched yet'
  const [product, setProduct] = useState(undefined);
  const [meta, setMeta] = useState({});

  const updateProdID = () => {
    requests.get(`/products/${prodID}`)
      .then((response) => { setProduct(response.data); })
      .catch((error) => { console.error(error); });
  };

  const updateMeta = () => {
    requests
      .get(`/reviews/meta?product_id=${prodID}`)
      .then((results) => setMeta(results.data))
      .catch((err) => console.error('Error with reviews meta request: ', err));
  };

  useEffect(() => {
    updateProdID();
    updateMeta();
  }, [prodID]);

  const providerValues = useMemo(() => ({
    prodID, setProdID, product, setProduct, meta, setMeta
  }), [prodID, product]);


  return (
    <div>
      <ProdContext.Provider value={providerValues}>
        <GlobalStyles />
        <App />
      </ProdContext.Provider>
    </div>
  );
};

export default AppHolder;
