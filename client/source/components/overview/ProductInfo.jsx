
// LIBRARY IMPORTS
import React from 'react';

import ProductStyles from './ProductStyles';

// MAIN
const ProductInfo = function CreateProductInfoComponent({ product, styles, setCurrentStyle }) {
  return (
    <div className="product-info">
      <h1>{product?.name}</h1>
      <ProductStyles styles={styles} setStyle={setCurrentStyle} />
    </div>
  );
};


export default ProductInfo;
