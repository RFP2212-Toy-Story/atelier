import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import RelatedListCard from './RelatedListCard.jsx';
import CompareWindow from './CompareWindow.jsx';
import * as requests from '../../utilities/axiosRequests';

const RelatedList = function CreateRelatedList() {
  const [index, setIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const productID = 40444;

  useEffect(() => {
    requests.get(`/products/${productID}/related`)
      .then((response) => {
        setRelatedProducts(response.data);
      })
      .catch((error) => { console.error(error); });
  }, []);

  // SAMPLE DATA
  // setRelatedProducts([
  //   40621,
  //   40956,
  //   41259,
  //   40731,
  //   40452,
  //   40476,
  //   40692
  // ]);

  const { length } = relatedProducts;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="related carousel">
      <h3>Related Products:</h3>
      <button type="button">
        <BsChevronLeft />
      </button>
      <div>
        {relatedProducts.map((product) => <RelatedListCard key={product} id={product} />)}
      </div>
      <button type="button">
        <BsChevronRight />
      </button>
      <CompareWindow />
    </div>
  );
};

export default RelatedList;
