// LIBRARY IMPORTS
import React, { useState, useEffect, useContext } from 'react';

// LOCAL IMPORTS
import ProdContext from '../../ProdContext.js';
import * as requests from '../../utilities/axiosRequests';
import StyledRelatedListCard from './styles/RelatedListCard.styled.jsx';

const RelatedListCard = function CreateRelatedListCard({ id }) {
  // STATES
  const { prodID, setProdID } = useContext(ProdContext);
  const [productDetail, setProductDetail] = useState({});
  const [styleData, setStyleData] = useState([]);
  const [imageURL, setImageURL] = useState('');

  // HOOKS
  useEffect(() => {
    requests.get(`/products/${id}`)
      .then((response) => {
        setProductDetail(response.data);
      })
      .catch((error) => { console.error(error); });

    requests.get(`/products/${id}/styles`)
      .then(({ data }) => {
        setStyleData(data.results);
        setImageURL(data.results[0].photos[0].thumbnail_url);
      })
      .catch((error) => { console.error(error); });
  }, [id]);

  // HANDLERS
  const handleCardClick = () => {
    setProdID(id);
  };

  return (
    <StyledRelatedListCard onClick={handleCardClick}>
      <img alt={productDetail.name} src={imageURL} />
      <h3>{productDetail.category}</h3>
      <h4>{productDetail.name}</h4>
      <h5>${productDetail.default_price}</h5>
    </StyledRelatedListCard>
  );
};

export default RelatedListCard;
