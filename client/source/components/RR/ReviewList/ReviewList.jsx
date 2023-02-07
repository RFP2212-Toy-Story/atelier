import React, { useState, useEffect, useContext } from 'react';
import ProdContext from '../../../ProdContext.js';
import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview/AddReview.jsx';
import Modal from '../../shared/Modal.jsx';
import useModal from '../../../useModal';
import ModalFormTitle from '../../shared/form/ModalFormTitle.jsx';
import { ReviewListFooter } from '../styles/RR.styled.js';

const ReviewList = function ReviewList({ reviews, ratingsFilter, updateList }) {
  const { product } = useContext(ProdContext);
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
            <ModalFormTitle
              title="Write Your Review"
              subtitle={`About the ${product?.name || 'unknown product'}`}
            />
            <AddReview onClose={onClose} />
          </Modal>
        </div>
      </ReviewListFooter>
    </div>
  );
};

export default ReviewList;
