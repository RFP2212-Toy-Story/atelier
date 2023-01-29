import React from 'react';

const ReviewTile = function ReviewTile({ review }) {
  return (
    <div className="review-tile">
      <div>{review.summary}</div>
    </div>
  );
};

export default ReviewTile;
