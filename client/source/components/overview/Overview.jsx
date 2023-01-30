
// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import PhotoBlock from './PhotoBlock';
import ProductStyles from './ProductStyles';
import ProductText from './ProductText';


// MAIN
const Overview = function createOverviewComponent() {
  return (
    <div className="overview">
      <div className="flex-row">
        <PhotoBlock />
        <div className="flex-row-filler" />
        <ProductStyles />
      </div>
      <ProductText />
    </div>
  );
};


export default Overview;
