
// LIBRARY IMPORTS
import React from 'react';
import * as Styles from './overviewStyles.js';

// MAIN
const ProductText = function CreateProductTextComponent({ product }) {
  return (
    <Styles.ProductText>
      <div style={{ margin: '0px 10px 0px 10px' }}>
        <p style={{ fontWeight: 'bold' }}>{product?.slogan}</p>
        <p>{product?.description}</p>
      </div>
      <div>
        <hr style={{ width: '2px', height: '80%' }} />
      </div>
      <div style={{ margin: '0px 10px 0px 10px', width: '33%' }}>
        {product.features?.map((feature) => (
          <p key={feature.feature}>⧁ {feature.feature} : {feature.value}</p>))}
      </div>
    </Styles.ProductText>
  );
};


export default ProductText;
