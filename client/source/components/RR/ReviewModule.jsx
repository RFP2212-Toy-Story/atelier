import React, { useState, useEffect, useContext } from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import SortReviews from './SortReviews/SortReviews.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown.jsx';
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
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  const updateList = () => {
    requests
      .get(`/reviews/?product_id=${prodID}&count=100&sort=${sortType}`)
      .then((results) => {
        setReviews(results.data.results);
      })
      .catch((err) => console.error('Error with reviews request: ', err));
  };

  useEffect(() => {
    updateList();
  }, [sortType]);

  const toggleRating = (starNum) => {
    setRatingsFilter({
      ...ratingsFilter,
      [starNum]: !ratingsFilter[starNum]
    });
  };

  return (
    <ReviewModuleContainer>
      <h3>Ratings and Reviews</h3>
      <ReviewContentsContainer>
        <BreakdownContainer>
          <RatingBreakdown
            ratings={meta.ratings}
            recommend={meta.recommended}
            toggleRating={toggleRating}
          />
          <ProductBreakdown traits={meta.characteristics} />
        </BreakdownContainer>
        <ReviewListContainer>
          <div className="sort-container">
            <SortReviews
              sortType={sortType}
              setSortType={setSortType}
            />
          </div>
          <div className="review-list-container">
            <ReviewList
              reviews={reviews}
              ratingsFilter={ratingsFilter}
              updateList={updateList}
            />
          </div>
        </ReviewListContainer>
      </ReviewContentsContainer>
    </ReviewModuleContainer>
  );
};

export default ReviewModule;
