import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewList = function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      {reviews.map((review) => (
        <ReviewTile review={review} key={review.review_id} />
      ))}
    </div>
  );
};

export default ReviewList;
