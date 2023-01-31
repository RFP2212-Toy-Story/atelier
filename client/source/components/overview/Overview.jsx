
// LIBRARY IMPORTS
import React, { useContext, useEffect, useState } from 'react';

// LOCAL IMPORTS
import PhotoBlock from './PhotoBlock.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductText from './ProductText.jsx';

import ProdContext from '../../ProdContext.js';

import * as requests from '../../utilities/axiosRequests.js';

// EXAMPLE GET PRODUCT BY ID
// {
//   "id": 40344,
//   "campus": "hr-rfp",
//   "name": "Camo Onesie",
//   "slogan": "Blend in to your crowd",
//   "description": "The So Fatigues will wake you up and fit you in. This \\ ... \\ surroundings.",
//   "category": "Jackets",
//   "default_price": "140.00",
//   "created_at": "2021-08-13T14:38:44.509Z",
//   "updated_at": "2021-08-13T14:38:44.509Z",
//   "features": [
//       {
//           "feature": "Fabric",
//           "value": "Canvas"
//       },
//       {
//           "feature": "Buttons",
//           "value": "Brass"
//       }
//   ]
// }

// MAIN
const Overview = function CreateOverviewComponent() {
  const { prodID, product } = useContext(ProdContext);
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
    <div id="overview-component" style={{ border: '1px solid black' }} className="overview FlexColumn">
      <div className="FlexRow">
        <PhotoBlock photos={styles[currentStyle]?.photos} />
        <div className="flex-row-filler" />
        <ProductInfo product={product} styles={styles} setCurrentStyle={setCurrentStyle} />
      </div>
      <ProductText product={product} />

    </div>
  );
};


export default Overview;
