// LIBRARY IMPORTS
import React, { useState, useEffect, useContext } from 'react';
import { HiOutlineStar } from 'react-icons/hi';

// LOCAL IMPORTS
import ProdContext from '../../ProdContext.js';
import * as requests from '../../utilities/axiosRequests';
import StyledRelatedListCard from './styles/RelatedListCard.styled.jsx';
import CompareTable from './CompareTable.jsx';
import Modal from '../shared/Modal';
import useModal from '../../useModal';
import AvgStarArray from '../shared/AvgStarArray.jsx';

// MAIN
const RelatedListCard = function CreateRelatedListCard({ relatedProdId }) {
  // STATES
  const { setProdID } = useContext(ProdContext);
  const [productDetail, setProductDetail] = useState({});
  const [styleData, setStyleData] = useState([]);
  const [imageURL, setImageURL] = useState('');
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
  }, [relatedProdId]);

  // HANDLERS
  const handleCardClick = () => {
    setProdID(relatedProdId);
  };

  return (
    <StyledRelatedListCard onClick={handleCardClick}>
      <img alt={productDetail.name} src={imageURL} />
      <HiOutlineStar className="compareButton" onClick={onOpen} />
      <h3>{productDetail.category}</h3>
      <h4>{productDetail.name}</h4>
      <h5>${productDetail.default_price}</h5>
      <AvgStarArray />
      <Modal isOpen={isOpen} onClose={onClose}>
        <CompareTable
          relatedProductDetail={productDetail}
          relatedStyleData={styleData}
        />
      </Modal>
    </StyledRelatedListCard>
  );
};

export default RelatedListCard;
