import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview.jsx';
import Modal from '../../shared/Modal.jsx';
import useModal from '../../../useModal';
import { ReviewListFooter } from '../styles/RR.styled.js';

const ReviewList = function ReviewList({ reviews, ratingsFilter, updateList }) {
  const { isOpen, onOpen, onClose } = useModal();
  const [numReviews, setNumReviews] = useState(2);
  const [filteredReviews, setFilteredReviews] = useState([]);

  const filterReviews = () => {
    if (Object.values(ratingsFilter).includes(true)) {
      const filteredList = reviews.filter((review) => ratingsFilter[review.rating]);
      setFilteredReviews(filteredList);
    } else {
      setFilteredReviews(reviews);
    }
  };

  useEffect(() => {
    filterReviews();
  }, [ratingsFilter, reviews]);

  return (
    <div className="review-list">
      {filteredReviews.slice(0, numReviews).map((review) => (
        <ReviewTile
          review={review}
          key={review.review_id}
          updateList={updateList}
        />
      ))}
      <ReviewListFooter>
        <div className="review-list-footer">
          {(filteredReviews.length > 2 && numReviews < filteredReviews.length)
            ? (
              <button
                className="footer-button"
                type="button"
                onClick={() => setNumReviews(numReviews + 2)}
              >MORE REVIEWS
              </button>
            )
            : null }
          <button
            className="footer-button"
            type="button"
            onClick={onOpen}
          > ADD A REVIEW
          </button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <AddReview />
          </Modal>
        </div>
      </ReviewListFooter>
    </div>
  );
};

export default ReviewList;
