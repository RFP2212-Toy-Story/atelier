// LIBRARY IMPORTS
import React, { useState, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';

// LOCAL IMPORTS
import RelatedListCard from './RelatedListCard.jsx';
import CompareWindow from './CompareWindow.jsx';
import * as requests from '../../utilities/axiosRequests';
import ProdContext from '../../ProdContext.js';
import StyledMediaScroll from './styles/MediaScroll.styled.jsx';
import StyledRelatedList from './styles/RelatedList.styled.jsx';
import Modal from '../shared/Modal';
import useModal from '../../useModal';

// MAIN
const RelatedList = function CreateRelatedList() {
  // STATES
  const { prodID } = useContext(ProdContext);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { isOpen, onOpen, onClose } = useModal();
  const [index, setIndex] = useState(0);
  const { length } = relatedProducts;

  // HOOKS
  useEffect(() => {
    requests.get(`/products/${prodID}/related`)
      .then((response) => {
        setRelatedProducts(response.data);
      })
      .catch((error) => { console.error(error); });
  }, [prodID]);

  // HANDLERS
  // const handlePrevious = () => {
  //   const newIndex = index - 1;
  //   setIndex(newIndex < 0 ? length - 1 : newIndex);
  // };

  // const handleNext = () => {
  //   const newIndex = index + 1;
  //   setIndex(newIndex >= length ? 0 : newIndex);
  // };

  return (
    <StyledRelatedList>
      <h3>Related Products:</h3>
      <div className="container">
        <StyledMediaScroll>
          {relatedProducts.map((relatedProdId) => <RelatedListCard key={relatedProdId} id={relatedProdId} onOpen={onOpen} />)}
        </StyledMediaScroll>
        <BiChevronLeftCircle className="left" />
        <BiChevronRightCircle className="right" />
        <Modal isOpen={isOpen} onClose={onClose}>
          <CompareWindow />
        </Modal>
      </div>
    </StyledRelatedList>
  );
};

export default RelatedList;
