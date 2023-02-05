
// LIBRARY IMPORTS
import React from 'react';

import Checkout from './sub-components/Checkout.jsx';
import ProductStyles from './sub-components/ProductStyles';


// MAIN
const ProductInfo = function CreateProductInfoComponent({
  product, styles, style, changeStyle
}) {
  return (
    <div className="product-info">
      ✦✦✦✧✧ <a href="#reviews">GOTO REVIEWS</a>
      <div>{product?.category}</div>
      <h1>{product?.name}</h1>
      <div>
        {style?.sale_price
          ? <div><div style={{ textDecoration: 'line-through' }}>${style?.original_price}</div><div style={{ color: 'red' }}>${style?.sale_price}</div></div>
          : <div>${style?.original_price}</div>}
      </div>

      <ProductStyles currentStyleID={style?.style_id} styles={styles} changeStyle={changeStyle} />

      <Checkout style={style} />

    </div>
  );
};


export default ProductInfo;
