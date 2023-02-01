import React, { useState, useEffect, useContext } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import styled from 'styled-components';

import RelatedListCard from './RelatedListCard.jsx';
import CompareWindow from './CompareWindow.jsx';
import * as requests from '../../utilities/axiosRequests';
import ProdContext from '../../ProdContext.js';


const RelatedList = function CreateRelatedList() {
  const { prodID } = useContext(ProdContext);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const { length } = relatedProducts;

  useEffect(() => {
    requests.get(`/products/${prodID}/related`)
      .then((response) => {
        setRelatedProducts(response.data);
      })
      .catch((error) => { console.error(error); });
  }, [prodID]);

  // const handlePrevious = () => {
  //   const newIndex = index - 1;
  //   setIndex(newIndex < 0 ? length - 1 : newIndex);
  // };

  // const handleNext = () => {
  //   const newIndex = index + 1;
  //   setIndex(newIndex >= length ? 0 : newIndex);
  // };

  return (
    <div className="related carousel">
      <h3>Related Products:</h3>
      <button type="button">
        <BsChevronLeft />
      </button>
      <div>
        {relatedProducts.map((relatedProdId) => <RelatedListCard key={relatedProdId} id={relatedProdId} />)}
      </div>
      <button type="button">
        <BsChevronRight />
      </button>
      <CompareWindow />
    </div>
  );
};

export default RelatedList;
