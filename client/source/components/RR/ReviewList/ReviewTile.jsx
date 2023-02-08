import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import ReviewRating from './ReviewRating.jsx';
import ReviewPhoto from './ReviewPhoto.jsx';
import * as requests from '../../../utilities/axiosRequests.js';
import { ReviewTileContainer, ReviewPhotos } from '../styles/RR.styled.js';

const ReviewTile = function ReviewTile({ review, updateList }) {
  // STATE
  const [fullBody, setFullBody] = useState(false);
  const [reported, setReported] = useState(false);

  // FUNCTIONS
  const formatDate = (date) => {
    const parsedDate = parseISO(date);
    return format(parsedDate, 'PPP');
  };

  const capSummary = (summary) => {
    if (summary.length > 60) {
      return `${summary.slice(0, 60)}...`;
    }
    return summary;
  };

  const capBody = (bodyText) => {
    if (bodyText.length > 250 && fullBody === false) {
      return `${bodyText.slice(0, 250)}...`;
    }
    return bodyText;
  };

  // EVENT HANDLERS
  const handleHelpfulness = (event) => {
    event.target.setAttribute('disabled', true);
    requests
      .put(`/reviews/${review.review_id}/helpful`, { review_id: review.review_id })
      .then((results) => {
        console.info(results.status);
        updateList();
      })
      .catch((err) => console.error(err));
  };

  const handleReported = (event) => {
    setReported(true);
    event.target.setAttribute('disabled', true);
    requests
      .put(`/reviews/${review.review_id}/report`, { review_id: review.review_id })
      .then((results) => console.info(results.status))
      .catch((err) => console.error('Error reporting review: ', err));
  };

  return (
    <ReviewTileContainer>
      <div className="review-tile">
        <div className="review-header">
          <ReviewRating rating={review.rating} />
          <div className="review-user-date">
            {`${review.reviewer_name}, `}
            {formatDate(review.date)}
          </div>
        </div>
        <div className="review-summary">{capSummary(review.summary)}</div>
        <div className="review-body-container">
          <div className="review-text">{capBody(review.body)}</div>
          { review.body.length > 250 && fullBody === false
            ? (
              <button
                className="show-more-button"
                type="button"
                onClick={() => setFullBody(true)}
              >Show More +
              </button>
            )
            : null }
          <ReviewPhotos>
            <div className="review-photos">
              {review.photos.map((photo) => (
                <ReviewPhoto
                  photo={photo}
                  key={photo.id}
                />
              ))}
            </div>
          </ReviewPhotos>
        </div>
        { review.recommend
          ? <div className="review-rec">✓ I recommend this product</div>
          : null }
        { review.response
          ? (
            <div className="review-response">
              <div className="response-header">Response:</div>
              <p />
              <div className="response-text">{review.response}</div>
            </div>
          )
          : null }
        <div className="review-footer">
          <span>Helpful? </span>
          <span>
            <button
              className="review-footer-button"
              type="button"
              onClick={handleHelpfulness}
            >Yes {`(${review.helpfulness})`}
            </button>
            <span className="helpfulness-break">  |  </span>
            <button
              className="review-footer-button"
              type="button"
              onClick={handleReported}
            >{reported
              ? 'Reported'
              : 'Report'}
            </button>
          </span>
        </div>
      </div>

    </ReviewTileContainer>
  );
};

export default ReviewTile;
