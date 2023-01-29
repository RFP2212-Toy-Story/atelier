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
  // const [displayedReviews, setDisplayedReviews] = useState([]);
  const [sortType, setSortType] = useState('');
  // const [selectedRatings, setSelectedRatings] = useState([]);

  const updateList = () => {
    axios
      .get('/api/reviews/', { params: { product_id: prodID } }) // confirm test
      .then((data) => {
        // console.log('GOT DATA :', data, data.data.results);
        setReviews(data.data.results);
      }) // array of review objs
      .catch((err) => console.error('Error in updating list: ', err));
  };

  useEffect(() => {
    updateList();
  }, []);


  return (
    <div>
      <h2>Ratings and Reviews</h2>
      <div className="breakdown-container">
        <RatingBreakdown />
        <ProductBreakdown />
      </div>
      <div className="sort-container">
        <SortReviews
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
