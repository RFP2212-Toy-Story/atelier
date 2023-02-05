// LIBRARY IMPORTS
import React, { useEffect, useState, useMemo } from 'react';
import GlobalStyles from './GlobalStyles.js';

// LOCAL IMPORTS
import App from './App.jsx';
import ProdContext from './ProdContext.js';
import * as requests from './utilities/axiosRequests.js';
import ClickTracker from './utilities/clickTracker.js';

// MAIN
const AppHolder = function CreateAppHolder() {
  // STATES
  const [prodID, setProdID] = useState(40356); // TODO: default view for 'no item searched yet'
  const [product, setProduct] = useState(undefined);
  const [styles, setStyles] = useState([]);
  const [meta, setMeta] = useState({});

  // HOOKS
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
    const Tracker = new ClickTracker();
    return (() => Tracker.removeClickTracker());
  }, []);

  useEffect(() => {
    updateProdID();
    updateMeta();
  }, [prodID]);

  useEffect(() => {
    requests.get(`/products/${prodID}/styles`)
      .then((response) => {
        console.info(response.status, response.data.results);
        setStyles(response.data.results);
        return (response.data.results);
      })
      .catch((error) => { console.error(error); });
  }, [prodID]);

  const providerValues = useMemo(() => ({
    prodID, setProdID, product, setProduct, styles, setStyles, meta, setMeta
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
