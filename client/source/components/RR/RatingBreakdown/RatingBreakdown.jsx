import React from 'react';
import RatingBar from './RatingBar.jsx';
import * as helpers from '../helpers/helpers.js';

const RatingBreakdown = function RatingsBreakdown({ ratings, recommend }) {
  if (!ratings) {
    return <div />;
  }

  const averageRating = helpers.average(ratings);
  const breakdown = helpers.percentages(ratings);
  const votes = helpers.recommended(recommend);

  return (
    <div className="rating-breakdown">
      <div className="average-rating">{averageRating}</div>
      <div className="star-rating">stars here</div>
      <div className="recommended-percentage">
        {`${votes}% of reviews recommend this product`}
      </div>
      {breakdown.map((rating) => (
        <RatingBar
          rating={rating}
          key={rating[0]}
        />
      ))};
    </div>
  );
};

export default RatingBreakdown;
