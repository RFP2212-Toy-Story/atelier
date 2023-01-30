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
      <div className="review-header">
        <span className="review-rating">{convertRating(review.rating)}</span>
        <span className="review-user-date">
          {`${review.reviewer_name}, `}
          {formattedDate}
        </span>
      </div>
      <div className="review-summary">{review.summary}</div>
      <div className="review-body">{review.body}</div>
      { review.recommend
        ? <div className="review-rec">I recommend this product</div>
        : null }
      <div className="review-footer">
        <span>Helpful?</span>
        <span>
          <button
            type="submit"
            className="review-helpful"
          >Yes
          </button>
          <span className="helpfulness-count">{`(${review.helpfulness})`}</span>
          <button
            type="submit"
            className="report-review"
          >Report
          </button>
        </span>
      </div>
    </div>
  );
};

export default ReviewTile;
