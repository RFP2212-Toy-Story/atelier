import React from 'react';
import { format, parseISO } from 'date-fns';

const ReviewTile = function ReviewTile({ review }) {
  const parsedDate = parseISO(review.date);
  const formattedDate = format(parsedDate, 'PPP');

  return (
    <div className="review-tile">
      <span className="review-header">
        *****
        {formattedDate}
      </span>
      <div>{review.summary}</div>
    </div>
  );
};

export default ReviewTile;
