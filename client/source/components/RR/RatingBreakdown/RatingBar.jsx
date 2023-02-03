import React from 'react';

const RatingBar = function RatingBar({ rating }) {
  const starNum = rating[0];
  const percentage = rating[1];

  return (
    <div className="rating-bar">
      <div className="bar-label">
        {`${starNum} star`}
      </div>
      <progress value={`${percentage}`} max="100" />
    </div>
  );
};

export default RatingBar;
