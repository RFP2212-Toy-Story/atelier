import React from 'react';
import RatingBar from './RatingBar.jsx';
import * as helpers from '../helpers/ratings.js';
import average from '../../../utilities/helpers.js';

const RatingBreakdown = function RatingsBreakdown({
  ratings,
  recommend,
  ratingsFilter,
  toggleRating
}) {
  if (!ratings) {
    return <div />;
  }

  const averageRating = average(ratings);
  const breakdown = helpers.percentages(ratings);
  const votes = helpers.recommended(recommend);
  const numReviews = helpers.count(ratings);
  const filters = helpers.filtered(ratingsFilter);

  return (
    <div className="rating-breakdown">
      <div className="average-rating">{averageRating}</div>
      <div className="star-rating">stars here</div>
      <div className="recommended-percentage">
        {`${votes}% of reviews recommend this product`}
      </div>
      <div className="review-count">{`${numReviews} Customer Reviews`}</div>
      {breakdown.map((rating) => (
        <RatingBar
          ratings={ratings}
          rating={rating}
          toggleRating={toggleRating}
          key={rating[0]}
        />
      ))}
      { filters.length > 0 && filters.length < 5
        ? (
          <div className="filter-message">
            <div className="filters-applied">{`Filters applied: ${filters.join(', ')}`}</div>
            <button
              className="default-button"
              type="button"
              onClick={() => {
                console.log('i have been clicked!');
                toggleRating();
              }}
            >Remove all filters
            </button>
          </div>
        )
        : null }
    </div>
  );
};

export default RatingBreakdown;
