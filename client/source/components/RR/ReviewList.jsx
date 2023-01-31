import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview.jsx';

const ReviewList = function ReviewList({ reviews, reviewCount, updateList }) {
  const [numReviews, setNumReviews] = useState(2);

  return (
    <div className="review-list">
      {reviews.slice(0, numReviews).map((review) => (
        <ReviewTile
          review={review}
          key={review.review_id}
          updateList={updateList}
        />
      ))}
      <div className="review-list-footer">
        {(reviewCount > 2 && numReviews < reviewCount)
          ? (
            <button
              className="more-reviews-button"
              type="button"
              onClick={() => setNumReviews(numReviews + 2)}
            >MORE REVIEWS
            </button>
          )
          : null }
        <AddReview />
      </div>
    </div>
  );
};

export default ReviewList;
