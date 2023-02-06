
// LIBRARY IMPORTS
import React, { useContext, useEffect, useState } from 'react';

// LOCAL IMPORTS
import PhotoBlock from './PhotoBlock.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductText from './ProductText.jsx';

import ProdContext from '../../ProdContext.js';


// MAIN
const Overview = function CreateOverviewComponent() {
  const { prodID, product, styles } = useContext(ProdContext);
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
    <div id="overview-component" className="overview FlexColumn" data-module-name="overview">
      <div className="FlexRow">

        <PhotoBlock photos={currentStyle.photos} />
        <ProductInfo
          product={product}
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
