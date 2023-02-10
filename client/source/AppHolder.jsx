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
  const [prodID, setProdID] = useState(40444); // TODO: default view for 'no item searched yet'
  const [product, setProduct] = useState({});
  const [meta, setMeta] = useState({});
  const [styles, setStyles] = useState([]);

  // HOOKS
  function getProduct() {
    return requests.get(`/products/${prodID}`)
      .then((response) => response.data)
      .catch((error) => { console.error(error); });
  }

  function getMeta() {
    return requests.get(`/reviews/meta?product_id=${prodID}`)
      .then((response) => response.data)
      .catch((err) => console.error('Error with reviews meta request: ', err));
  }

  function getStyles() {
    return requests.get(`/products/${prodID}/styles`)
      .then((response) => response.data.results)
      .catch((error) => { console.error(error); });
  }

  const updateAllData = async () => {
    const dataProduct = await getProduct();
    const dataMeta = await getMeta();
    const dataStyles = await getStyles();
    setProduct(dataProduct);
    setMeta(dataMeta);
    setStyles(dataStyles);
  };

  useEffect(() => {
    updateAllData()
      .catch((error) => console.error(error));
  }, [prodID]);

  useEffect(() => {
    const Tracker = new ClickTracker();
    return (() => Tracker.removeClickTracker());
  }, []);

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
