
// LIBRARY IMPORTS
import React, { useContext, useEffect, useState } from 'react';

// LOCAL IMPORTS
import PhotoBlock from './PhotoBlock.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductText from './ProductText.jsx';

import ProdContext from '../../ProdContext.js';

import average from '../../utilities/helpers.js';

// MAIN
const Overview = function CreateOverviewComponent() {
  const { prodID, product, styles, meta } = useContext(ProdContext);
  const [currentStyle, setCurrentStyle] = useState({});

  const findDefaultStyle = (style) => {
    if (style['default?'] === true) {
      setCurrentStyle(style);
    }
  };

  const changeStyle = (style) => {
    setCurrentStyle(style);
  };

  useEffect(() => {
    styles?.forEach(findDefaultStyle);
  }, [prodID, product, styles]);

  return (
    <div id="overview-component" data-module-name="overview">

      <div className="FlexRow">
        <PhotoBlock photos={currentStyle.photos} />
        <ProductInfo
          product={product}
          rating={average(meta?.ratings)}
          styles={styles}
          style={currentStyle}
          changeStyle={changeStyle}
        />
      </div>

      <ProductText product={product} />

    </div>
  );
};


export default Overview;
