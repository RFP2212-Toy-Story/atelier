
// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import PhotoBlock from './PhotoBlock';
import ProductStyles from './ProductStyles';
import ProductText from './ProductText';

import * as requests from '../../utilities/axiosRequests';


// MAIN
const Overview = function createOverviewComponent() {
  function handleClick() {
    const productID = 40344;

    requests.get(`/products/${productID}/styles`)
      .then((response) => { console.info(response.status, response.data); })
      .catch((error) => { console.error(error); });
  }

  return (
    <div className="overview">
      <div className="flex-row">
        <PhotoBlock />
        <div className="flex-row-filler" />
        <ProductStyles />
      </div>
      <ProductText />
      <button type="button" onClick={handleClick}>OVERVIEW TEST GET STYLES</button>
    </div>
  );
};


export default Overview;
