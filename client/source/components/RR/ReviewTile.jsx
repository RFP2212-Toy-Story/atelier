import React from 'react';
import { format, parseISO } from 'date-fns';
import * as requests from '../../utilities/axiosRequests.js';

const ReviewTile = function ReviewTile({ review, updateList }) {
  // FORMAT DATE
  const parsedDate = parseISO(review.date);
  const formattedDate = format(parsedDate, 'PPP');

  // PLACEHOLDER DISPLAY STAR RATING
  const starRating = {
    1: '*',
    2: '**',
    3: '***',
    4: '****',
    5: '*****'
  };
  const convertRating = (rating) => starRating[rating];

  // FUNCTIONS
  const capSummary = function capSummary(summary) {
    if (summary.length > 60) {
      return `${summary.slice(0, 60)}...`;
    }
    return summary;
  };

  // EVENT HANDLERS
  const handleHelpfulness = function handleHelpfulness(event) {
    event.target.setAttribute('disabled', true);
    requests
      .put(`/reviews/${review.review_id}/helpful`, { review_id: review.review_id })
      .then((results) => {
        console.info(results.status);
        updateList();
      })
      .catch((err) => console.error('Error updating helpfulness: ', err));
  };

  const handleReported = function handleReported(event) {
    event.target.setAttribute('disabled', true);
    requests
      .put(`/reviews/${review.review_id}/report`, { review_id: review.review_id })
      .then((results) => {
        console.info(results.status);
        updateList();
      })
      .catch((err) => console.error('Error reporting review: ', err));
  };

  return (
    <div className="review-tile">
      <div className="review-header">
        <span className="review-rating">{convertRating(review.rating)}</span>
        <span className="review-user-date">
          {`${review.reviewer_name}, `}
          {formattedDate}
        </span>
      </div>
      <div className="review-summary">{capSummary(review.summary)}</div>
      <div className="review-body">{review.body}</div>
      { review.recommend
        ? <div className="review-rec">✓ I recommend this product</div>
        : null }
      { review.response
        ? (
          <div className="review-response">
            <div className="response-header">Response:</div>
            <div className="response-text">{review.response}</div>
          </div>
        )
        : null }
      <div className="review-footer">
        <span>Helpful?</span>
        <span>
          <button
            type="button"
            className="review-helpful"
            onClick={handleHelpfulness}
          >Yes
          </button>
          <span className="helpfulness-count">{`(${review.helpfulness})`}</span>
          <button
            type="button"
            className="report-review"
            onClick={handleReported}
          >Report
          </button>
        </span>
      </div>
    </div>
  );
};

export default ReviewTile;
