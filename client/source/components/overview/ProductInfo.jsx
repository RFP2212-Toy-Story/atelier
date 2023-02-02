
// LIBRARY IMPORTS
import React from 'react';

import ProductStyles from './ProductStyles';

// MAIN
const ProductInfo = function CreateProductInfoComponent({
  product, styles, style, setCurrentStyle
}) {
  function getSizes(passedStyle) {
    if (passedStyle) {
      const { skus } = passedStyle;
      const sizes = Array.from(new Set(Object.values(skus).map((sku) => sku.size)));
      return sizes;
    }
    return undefined;
  }

  return (
    <div className="product-info">
      ✦✦✦✧✧ <a href="#reviews">GOTO REVIEWS</a>
      <div>{product?.category}</div>
      <h1>{product?.name}</h1>
      <div>${product?.default_price}</div>
      <div style={{ color: 'red' }}>${style?.sale_price}</div>
      SELECT STYLE
      <ProductStyles currentStyleID={style?.style_id} styles={styles} setStyle={setCurrentStyle} />

      <div>
        <select>
          {getSizes(style)?.map((size) => (<option key={size}>{size}</option>))}
        </select>

        <select>
          <option>QUANTITY SELECT</option>
        </select>
      </div>

      <hr />

      <div>
        <button type="button">ADD TO CART</button>
        <button type="button">💔</button>
      </div>

    </div>
  );
};


export default ProductInfo;
