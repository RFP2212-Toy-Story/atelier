
// LIBRARY IMPORTS
import React from 'react';

import { FaFacebook, FaTwitter, FaPinterest, FaReddit, FaMastodon } from 'react-icons/fa';
import { GiDinosaurRex } from 'react-icons/gi';

import * as Styles from './overviewStyles.js';
import Checkout from './sub-components/Checkout.jsx';
import ProductStyles from './sub-components/ProductStyles';

import AvgStarArray from '../shared/AvgStarArray.jsx';

// MAIN
const ProductInfo = function CreateProductInfoComponent({
  product, rating, styles, style, changeStyle
}) {
  return (
    <Styles.ProductInfo>
      <div className="FlexRow" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <AvgStarArray avgRating={rating} /><a style={{ fontSize: '0.75rem' }} href="#ratings and reviews">GOTO REVIEWS</a>
      </div>
      <span>{product?.category}</span>
      <h1>{product?.name}</h1>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '0.5rem 0' }}>
        {style?.sale_price
          ? <><div style={{ textDecoration: 'line-through' }}>${style?.original_price}</div>&nbsp;<div style={{ color: 'red' }}>${style?.sale_price}</div></>
          : <div>${style?.original_price}</div>}
      </div>
      <span style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>STYLE &gt; {style?.name}</span>
      <ProductStyles currentStyleID={style?.style_id} styles={styles} changeStyle={changeStyle} />

      <Checkout style={style} />

      <div style={{ margin: '0.5rem 0' }}>
        <span style={{ marginRight: 'auto', fontSize: '0.75rem', fontWeight: 'bold' }}>BE A GOOD CONSUMER AND SHARE</span>
        <div className="FlexRow" style={{ justifyContent: 'space-between' }}>
          <FaFacebook className="color-hover" />
          <FaTwitter className="color-hover" />
          <FaPinterest className="color-hover" />
          <GiDinosaurRex className="color-hover" />
          <FaReddit className="color-hover" />
          <FaMastodon className="color-hover" />
        </div>
      </div>

    </Styles.ProductInfo>
  );
};


export default ProductInfo;
