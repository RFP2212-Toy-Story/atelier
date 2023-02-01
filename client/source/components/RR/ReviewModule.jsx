import React, { useState, useEffect, useContext } from 'react';
import ReviewList from './ReviewList.jsx';
import SortReviews from './SortReviews.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import * as requests from '../../utilities/axiosRequests.js';
// import ProdContext from '../../ProdContext.js';
import {
  ReviewModuleContainer, ReviewContentsContainer, BreakdownContainer, ReviewListContainer
} from './styles/RR.styled.js';

const ReviewModule = function ReviewModule() {
  // const { prodID } = useContext(ProdContext);
  const [reviews, setReviews] = useState([]);
  const [reviewCount, setReviewCount] = useState(null);
  const [meta, setMeta] = useState({});
  const [sortType, setSortType] = useState('relevant');
  const [ratingsFilter, setRatingsFilter] = useState({
    5: false,
    4: false,
    3: false,
    2: false,
    1: false
  });
  // for test only, to be deleted
  const prodID = '40444';

  const updateList = () => {
    requests
      .get(`/reviews/?product_id=${prodID}&count=100&sort=${sortType}`)
      .then((results) => {
        setReviews(results.data.results);
        setReviewCount(results.data.results.length);
      })
      .catch((err) => console.error('Error with reviews request: ', err));
  };

  const updateMeta = () => {
    requests
      .get(`/reviews/meta?product_id=${prodID}`)
      .then((results) => setMeta(results.data))
      .catch((err) => console.error('Error with reviews meta request: ', err));
  };

  useEffect(() => {
    updateList();
    updateMeta();
  }, [sortType]);


  return (
    <ReviewModuleContainer>
      <h3>Ratings and Reviews</h3>
      <ReviewContentsContainer>
        <BreakdownContainer>
          <RatingBreakdown meta={meta} />
          <ProductBreakdown traits={meta.characteristics} />
        </BreakdownContainer>
        <ReviewListContainer>
          <div className="sort-container">
            <SortReviews
              reviewCount={reviewCount}
              sortType={sortType}
              setSortType={setSortType}
            />
          </div>
          <div className="review-list-container">
            <ReviewList
              reviews={reviews}
              reviewCount={reviewCount}
              updateList={updateList}
            />
          </div>
        </ReviewListContainer>
      </ReviewContentsContainer>
    </ReviewModuleContainer>
  );
};

export default ReviewModule;
