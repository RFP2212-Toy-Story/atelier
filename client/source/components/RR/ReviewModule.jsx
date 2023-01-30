import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import SortReviews from './SortReviews.jsx';
import AddReview from './AddReview.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import { ProdContext } from '../../ProdContext.js';

const ReviewModule = function ReviewModule() {
  const { prodID } = useContext(ProdContext);
  const [reviews, setReviews] = useState([]);
  const [reviewCount, setReviewCount] = useState(null);
  const [meta, setMeta] = useState([]);
  const [sortType, setSortType] = useState('relevance');
  // const [selectedRatings, setSelectedRatings] = useState([]);

  const updateList = () => {
    axios
      .get('/api/reviews/', { params: { product_id: prodID } })
      .then((results) => {
        setReviews(results.data.results);
        setReviewCount(results.data.count);
      })
      .catch((err) => console.error('Error with reviews request: ', err));
  };

  const updateMeta = () => {
    axios
      .get('/api/reviews/meta', { params: { product_id: prodID } })
      .then((results) => setMeta(results.data))
      .catch((err) => console.error('Error with reviews meta request: ', err));
  };

  useEffect(() => {
    updateList();
    updateMeta();
  }, []);


  return (
    <div>
      <h2>Ratings and Reviews</h2>
      <div className="breakdown-container">
        <RatingBreakdown
          meta={meta}
        />
        <ProductBreakdown />
      </div>
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
          setReviews={setReviews}
        />
        <AddReview />
      </div>
    </div>
  );
};

export default ReviewModule;
