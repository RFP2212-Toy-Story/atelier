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
  const { prodID } = useContext(ProdContext);
  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState({});
  const [sortType, setSortType] = useState('relevant');
  // const [reviewCount, setReviewCount] = useState(null); // per /reviews
  // const [ratingCount, setRatingCount] = useState([]); // per /reviews/meta
  // const [averageRating, setAverageRating] = useState(null);
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
        // setReviewCount(results.data.results.length);
      })
      .catch((err) => console.error('Error with reviews request: ', err));
  };

  const updateMeta = () => {
    requests
      .get(`/reviews/meta?product_id=${prodID}`)
      .then((results) => setMeta(results.data))
      .catch((err) => console.error('Error with reviews meta request: ', err));
  };

  // INITIALIZE
  useEffect(() => {
    updateList();
    updateMeta();
  }, [sortType]);

  // FUNCTIONS


  // const calculateAverageRating = (ratings) => {
  //   let count = null; // 39
  //   let total = null; // 117
  //   let breakdown = Object.entries(ratings);// [[1, 7], [2, 9], [3, 5], [4, 13], [5, 5]]
  //   breakdown.forEach((rating) => {
  //     count += rating[1];
  //     total += (rating[0] * rating[1]);
  //   });
  //   setAverageRating(total / count);
  // };

  // console.log('ratings:', calculateAverageRating({
  //   1: 7,
  //   2: 9,
  //   3: 5,
  //   4: 13,
  //   5: 5
  // }));

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
