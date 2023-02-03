// LIBRARY IMPORTS
import React, { useState, useEffect, useContext } from 'react';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';

// LOCAL IMPORTS
import RelatedListCard from './RelatedListCard.jsx';
import * as requests from '../../utilities/axiosRequests';
import ProdContext from '../../ProdContext.js';
import StyledMediaScroll from './styles/MediaScroll.styled.jsx';
import StyledRelatedList from './styles/RelatedList.styled.jsx';

// MAIN
const RelatedList = function CreateRelatedList() {
  // STATES
  const { prodID } = useContext(ProdContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // HOOKS
  useEffect(() => {
    requests.get(`/products/${prodID}/related`)
      .then((response) => {
        setRelatedProducts(response.data);
      })
      .catch((error) => { console.error(error); });
  }, [prodID]);

  return (
    <StyledRelatedList>
      <h3>Related Products:</h3>
      <div className="container">
        <StyledMediaScroll>
          {/* eslint-disable-next-line max-len */}
          {relatedProducts.map((relatedProdId) => <RelatedListCard key={relatedProdId} relatedProdId={relatedProdId} />)}
        </StyledMediaScroll>
        <BiChevronLeftCircle className="left" />
        <BiChevronRightCircle className="right" />
      </div>
    </StyledRelatedList>
  );
};

export default RelatedList;
