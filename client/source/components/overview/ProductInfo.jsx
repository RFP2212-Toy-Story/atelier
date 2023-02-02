
// LIBRARY IMPORTS
import React from 'react';

import Checkout from './Checkout.jsx';
import ProductStyles from './ProductStyles';


// MAIN
const ProductInfo = function CreateProductInfoComponent({
  product, styles, style, setCurrentStyle
}) {
  return (
    <div className="product-info">
      ✦✦✦✧✧ <a href="#reviews">GOTO REVIEWS</a>
      <div>{product?.category}</div>
      <h1>{product?.name}</h1>
      <div>
        {style?.sale_price
          ? <div><div style={{ textDecoration: 'line-through' }}>${product?.default_price}</div><div style={{ color: 'red' }}>${style?.sale_price}</div></div>
          : <div>${product?.default_price}</div>}
      </div>

      <ProductStyles currentStyleID={style?.style_id} styles={styles} setStyle={setCurrentStyle} />

      <Checkout style={style} />

    </div>
  );
};


export default ProductInfo;
