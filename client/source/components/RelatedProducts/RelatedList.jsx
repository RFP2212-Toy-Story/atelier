// LIBRARY IMPORTS
import React, { useState, useEffect, useContext, useRef } from 'react';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import { flushSync } from 'react-dom';

// LOCAL IMPORTS
import RelatedListCard from './RelatedListCard.jsx';
import * as requests from '../../utilities/axiosRequests';
import OutfitList from './OutfitList';
import ProdContext from '../../ProdContext.js';
import StyledMediaScroll from './styles/MediaScroll.styled.jsx';
import StyledRelatedList from './styles/RelatedList.styled.jsx';


// MAIN
const RelatedList = function CreateRelatedList() {
  // STATES
  const { prodID } = useContext(ProdContext);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const selectedRef = useRef(null);
  const [index, setIndex] = useState(0);

  // HOOKS
  useEffect(() => {
    requests.get(`/products/${prodID}/related`)
      .then((response) => {
        setRelatedProducts(response.data);
      })
      .catch((error) => { console.error(error); });
  }, [prodID]);

  // HANDLERS
  const handleRightClick = () => {
    flushSync(() => {
      if (index < relatedProducts.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });
    selectedRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  const handleLeftClick = () => {
    flushSync(() => {
      if (index > 0) {
        setIndex(index - 1);
      } else {
        setIndex(relatedProducts.length - 1);
      }
    });
    selectedRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  return (
    <StyledRelatedList data-module-name="related products">
      <h3 className="section-header" data-testid="heading">Related Products</h3>
      <div className="container">
        <StyledMediaScroll>
          {/* eslint-disable-next-line max-len, react/jsx-wrap-multilines */}
          {relatedProducts.map((relatedProdId, i) => <RelatedListCard
            key={relatedProdId}
            relatedProdId={relatedProdId}
            ref={index === i ? selectedRef : null}
          />)}
        </StyledMediaScroll>
        {index > 1 && <BiChevronLeftCircle data-testid="reactIcon" className="left" onClick={handleLeftClick} />}
        {index < relatedProducts.length - 2 && <BiChevronRightCircle data-testid="right-icon" className="right" onClick={handleRightClick} />}
      </div>
      <OutfitList />
    </StyledRelatedList>
  );
};

export default RelatedList;
