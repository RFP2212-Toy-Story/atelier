import React from 'react';
import RatingBar from './RatingBar.jsx';
import * as helpers from '../utilities/helpers.js';
import average from '../../../utilities/helpers.js';
import AvgStarArray from '../../shared/AvgStarArray.jsx';
import { RatingBreakdownContainer } from '../styles/RR.styled.js';

const RatingBreakdown = function RatingsBreakdown({
  ratings,
  recommend,
  ratingsFilter,
  toggleRating,
  resetDefault
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
    <RatingBreakdownContainer>
      <div className="rating-breakdown">
        <div className="rating-details">
          <div className="average-rating">{averageRating}</div>
          <div className="star-rating">
            <AvgStarArray avgRating={averageRating} />
          </div>
        </div>
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
          && (
            <div className="filter-message">
              <div className="filters-applied">{`Filters applied: ${filters.join(', ')}`}</div>
              <button
                className="default-button"
                type="button"
                onClick={() => resetDefault()}
              >Remove all filters
              </button>
            </div>
          )}
      </div>
    </RatingBreakdownContainer>
  );
};

export default RatingBreakdown;
