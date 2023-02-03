import React from 'react';
import calculateAverageRating from '../../utilities/helpers.js';

const RatingBreakdown = function RatingsBreakdown({ ratings }) {
  if (!ratings) {
    return <div />;
  }

  return (
    <div className="rating-breakdown">
      <div>{calculateAverageRating(ratings)}</div>
    </div>
  );
};

export default RatingBreakdown;
