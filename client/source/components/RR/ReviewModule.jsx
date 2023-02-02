import React, { useState, useEffect, useContext } from 'react';
import ReviewList from './ReviewList.jsx';
import SortReviews from './SortReviews.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import * as requests from '../../utilities/axiosRequests.js';
import ProdContext from '../../ProdContext.js';
import {
  ReviewModuleContainer, ReviewContentsContainer, BreakdownContainer, ReviewListContainer
} from './styles/RR.styled.js';

const ReviewModule = function ReviewModule() {
  const { prodID, meta } = useContext(ProdContext);
  const [reviews, setReviews] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const [ratingsFilter, setRatingsFilter] = useState({
    5: false,
    4: false,
    3: false,
    2: false,
    1: false
  });

  // REQUESTS
  const updateList = () => {
    requests
      .get(`/reviews/?product_id=${prodID}&count=100&sort=${sortType}`)
      .then((results) => {
        setReviews(results.data.results);
      })
      .catch((err) => console.error('Error with reviews request: ', err));
  };

  // INITIALIZE
  useEffect(() => {
    updateList();
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
              reviewCount={reviews.length}
              sortType={sortType}
              setSortType={setSortType}
            />
          </div>
          <div className="review-list-container">
            <ReviewList
              reviews={reviews}
              reviewCount={reviews.length}
              updateList={updateList}
            />
          </div>
        </ReviewListContainer>
      </ReviewContentsContainer>
    </ReviewModuleContainer>
  );
};

export default ReviewModule;
