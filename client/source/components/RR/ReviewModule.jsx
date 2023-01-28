import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
import SortReviews from './SortReviews.jsx';
import AddReview from './AddReview.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import axios from 'axios';

const ReviewModule = () => {

  const [reviewList, setReviewList] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState([])
  const [sortType, setSortType] = useState('');
  const [selectedRatings, setSelectedRatings] = useState([]);

  const updateList = () => {
    axios
      .get('/api/reviews')
      .then(results => {
        let list = results.data;
        setReviewList(list);
        console.log('Review list updated!');
      })
      .catch(err => {
        console.log('Error in updating list: ', err);
      });
  }

  useEffect(() => {
    updateList();
  }, [])


  return (
    <div>
      <h2>Ratings and Reviews</h2>
      <div className='sort-bar'>
        <SortReviews
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
      <div className='review-list'>
        <ReviewList
          reviewList={setReviewList}
          displayedReviews={displayedReviews}
          setDisplayedReviews={setDisplayedReviews}
        />
      </div>
      <div className='review-breakdown'>
        <RatingBreakdown />
      </div>
      <div className='review-breakdown'>
        <ProductBreakdown />
      </div>
    </div>
  );
}

export default ReviewModule;
