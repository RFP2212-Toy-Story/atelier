import React from 'react';

const RatingBar = function RatingBar({ ratings, rating, toggleRating }) {
  const starNum = rating[0];
  const percentage = rating[1];
  const reviews = ratings[starNum];

  return (
    <div
      className="rating-bar"
      role="button"
      tabIndex={-1}
      onClick={() => toggleRating(starNum)}
      onKeyDown={() => toggleRating(starNum)}
    >
      <div className="bar-label">
        {`${starNum} star`}
      </div>
      <progress value={`${percentage}`} max="100" />
      <div className="review-count">
        {reviews}
      </div>
    </div>
  );
};

export default RatingBar;
