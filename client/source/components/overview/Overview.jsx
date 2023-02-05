
// LIBRARY IMPORTS
import React, { useContext, useEffect, useState } from 'react';

// LOCAL IMPORTS
import PhotoBlock from './PhotoBlock.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductText from './ProductText.jsx';

import ProdContext from '../../ProdContext.js';

import * as requests from '../../utilities/axiosRequests.js';


// MAIN
const Overview = function CreateOverviewComponent() {
  const { product, styles } = useContext(ProdContext);
  const [currentStyle, setCurrentStyle] = useState(0);

  const findDefaultStyle = (style, index) => {
    if (style['default?'] === true) { setCurrentStyle(index); }
  };

  useEffect(() => {
    styles.forEach(findDefaultStyle);
  }, []);

  return (
    <div id="overview-component" className="overview FlexColumn">
      <div className="FlexRow">

        <PhotoBlock photos={styles[currentStyle]?.photos} />

        <ProductInfo
          product={product}
          styles={styles}
          style={styles[currentStyle]}
          setCurrentStyle={setCurrentStyle}
        />

      </div>

      <ProductText product={product} />

    </div>
  );
};


export default Overview;
