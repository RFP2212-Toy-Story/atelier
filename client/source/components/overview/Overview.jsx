
// LIBRARY IMPORTS
import React, { useContext, useEffect, useState } from 'react';

// LOCAL IMPORTS
import PhotoBlock from './PhotoBlock';
import ProductStyles from './ProductStyles';
import ProductText from './ProductText';

import ProdContext from '../../ProdContext';

import * as requests from '../../utilities/axiosRequests';


// MAIN
const Overview = function CreateOverviewComponent() {
  const { prodID } = useContext(ProdContext);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(0);

  useEffect(() => {
    requests.get(`/products/${prodID}/styles`)
      .then((response) => {
        console.info(response.status, response.data.results);
        setStyles(response.data.results);
        setCurrentStyle(0);
        return (response.data.results);
      })
      .catch((error) => { console.error(error); });
  }, [prodID]);

  return (
    <div className="overview">
      <div className="flex-row">
        <PhotoBlock photos={styles[currentStyle]?.photos} />
        <div className="flex-row-filler" />
        <ProductStyles />
      </div>
      <ProductText />

    </div>
  );
};


export default Overview;
