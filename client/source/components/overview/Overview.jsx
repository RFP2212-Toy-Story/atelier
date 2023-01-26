
// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import PhotoBlock from './PhotoBlock.jsx'
import ProductStyles from './ProductStyles.jsx'
import ProductText from './ProductText.jsx'


// MAIN
const Overview = () => {
  return (
    <div className='overview'>
      <div className='flex-row'>
        <PhotoBlock />
        <div className='flex-row-filler'></div>
        <ProductStyles />
      </div>
      <ProductText />
    </div>
  );
}


export default Overview;
