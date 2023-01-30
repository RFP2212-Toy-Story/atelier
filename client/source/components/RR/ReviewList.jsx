import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewList = function ReviewList({ reviews, reviewCount }) {
  const [numReviews, setNumReviews] = useState(2);

  return (
    <div className="review-list">
      {reviews.slice(0, numReviews).map((review) => (
        <ReviewTile review={review} key={review.review_id} />
      ))}
      <button
        type="button"
        onClick={() => setNumReviews(numReviews + 2)}
      >MORE REVIEWS
      </button>
    </div>
  );
};

export default ReviewList;
