import React, { useState, useEffect } from 'react';
import * as requests from '../../utilities/axiosRequests';

const RelatedListCard = function CreateRelatedListCard({ id }) {
  const [productDetail, setProductDetail] = useState({});
  const [styleData, setStyleData] = useState([]);
  const [imageURL, setImageURL] = useState('');

  function extractImageData() {
    const defaultStyle = styleData[0];
    console.log('PHOTO OBJ: ', styleData);
    const photoData = defaultStyle.photos[0];

    // return filteredStyles[0].thumbnail_url;
  }

  useEffect(() => {
    requests.get(`/products/${id}`)
      .then((response) => {
        setProductDetail(response.data);
      })
      .catch((error) => { console.error(error); });

    requests.get(`/products/${id}/styles`)
      .then((response) => {
        setStyleData(response.data.results);
        setImageURL(extractImageData());
      })
      .catch((error) => { console.error(error); });
  }, []);

  return (
    <div className="card">
      <img alt={productDetail.name} src={imageURL} />
      <h3>{productDetail.category}</h3>
      <h4>{productDetail.name}</h4>
      <h5>{productDetail.default_price}</h5>
    </div>
  );
};

export default RelatedListCard;
