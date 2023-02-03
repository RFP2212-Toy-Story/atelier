import React from 'react';
import calculateAverageRating from '../../utilities/helpers.js';

const RatingBreakdown = function RatingsBreakdown({ meta }) {
  // console.log('meta', meta);
  // const { ratings } = meta.ratings;
  // const averageRating = calculateAverageRating(meta.ratings);
  // const totalRatings = Object.keys(ratings).reduce((acc, rating) => acc + ratings[rating], 0);

  return (
    <div className="rating-breakdown">
      <div>{calculateAverageRating(meta.ratings)}</div>
    </div>
  );
};

export default RatingBreakdown;
