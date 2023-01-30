import React from 'react';
import { format, parseISO } from 'date-fns';

const ReviewTile = function ReviewTile({ review }) {
  const parsedDate = parseISO(review.date);
  const formattedDate = format(parsedDate, 'PPP');

  const starRating = {
    1: '*',
    2: '**',
    3: '***',
    4: '****',
    5: '*****',
  };

  const convertRating = (rating) => starRating[rating];

  return (
    <div className="review-tile">
      <span className="review-header">
        {convertRating(review.rating)}
        {formattedDate}
      </span>
      <div>{review.summary}</div>
    </div>
  );
};

export default ReviewTile;
