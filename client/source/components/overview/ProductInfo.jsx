
// LIBRARY IMPORTS
import React from 'react';

import * as Styles from './overviewStyles.js';
import Checkout from './sub-components/Checkout.jsx';
import ProductStyles from './sub-components/ProductStyles';


// MAIN
const ProductInfo = function CreateProductInfoComponent({
  product, styles, style, changeStyle
}) {
  return (
    <Styles.ProductInfo>
      <div>
        ✦✦✦✧✧ <a href="#ratings and reviews">GOTO REVIEWS</a>
      </div>
      <div>{product?.category}</div>
      <h1>{product?.name}</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {style?.sale_price
          ? <><div style={{ textDecoration: 'line-through' }}>${style?.original_price}</div>&nbsp;<div style={{ color: 'red' }}>${style?.sale_price}</div></>
          : <div>${style?.original_price}</div>}
      </div>
      <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>STYLE &gt; {style?.name}</div>
      <ProductStyles currentStyleID={style?.style_id} styles={styles} changeStyle={changeStyle} />

      <Checkout style={style} />

    </Styles.ProductInfo>
  );
};


export default ProductInfo;
