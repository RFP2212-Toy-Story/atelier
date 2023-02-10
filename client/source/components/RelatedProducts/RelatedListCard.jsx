// LIBRARY IMPORTS
import React, { useState, useEffect, useContext, forwardRef } from 'react';
import { HiOutlineStar } from 'react-icons/hi';

// LOCAL IMPORTS
import ProdContext from '../../ProdContext.js';
import * as requests from '../../utilities/axiosRequests';
import StyledRelatedListCard from './styles/RelatedListCard.styled.jsx';
import CompareTable from './CompareTable.jsx';
import Modal from '../shared/Modal';
import useModal from '../../useModal';
import AvgStarArray from '../shared/AvgStarArray.jsx';
import average from '../../utilities/helpers';

// MAIN
// eslint-disable-next-line prefer-arrow-callback
const RelatedListCard = forwardRef(function CreateRelatedListCard({ relatedProdId }, ref) {
  // STATES
  const { setProdID } = useContext(ProdContext);
  const [productDetail, setProductDetail] = useState({});
  const [styleData, setStyleData] = useState([]);
  const [imageURL, setImageURL] = useState('');
  const [avgRating, setAvgRating] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useModal();

  // HOOKS
  useEffect(() => {
    requests.get(`/products/${relatedProdId}`)
      .then((response) => {
        setProductDetail(response.data);
      })
      .catch((error) => { console.error(error); });

    requests.get(`/products/${relatedProdId}/styles`)
      .then(({ data }) => {
        setStyleData(data.results);
        setImageURL(data.results[0].photos[0].thumbnail_url);
      })
      .catch((error) => { console.error(error); });

    requests.get(`/reviews/meta?product_id=${relatedProdId}`)
      .then(({ data }) => {
        setAvgRating(average(data.ratings));
      })
      .catch((error) => { console.error(error); });
  }, [relatedProdId]);

  // HANDLERS
  const handleCardClick = (e) => {
    if (e.target.className.baseVal !== 'compareButton') {
      setProdID(relatedProdId);
    }
  };

  return (
    <>
      <StyledRelatedListCard onClick={handleCardClick} ref={ref}>
        <img alt={productDetail.name} src={imageURL} />
        <HiOutlineStar className="compareButton" onClick={onOpen} />
        <h3 className="card-content" data-testid="card-category">{productDetail.category}</h3>
        <h4 className="card-content">{productDetail.name}</h4>
        <h5 className="card-content">${productDetail.default_price}</h5>
        <AvgStarArray className="card-content" avgRating={avgRating} />
      </StyledRelatedListCard>
      <Modal isOpen={isOpen} onClose={onClose}>
        <CompareTable
          relatedProductDetail={productDetail}
          relatedStyleData={styleData}
        />
      </Modal>
    </>
  );
});

export default RelatedListCard;
