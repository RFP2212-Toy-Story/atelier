import React, { useState, useEffect, useContext } from 'react';
import ProdContext from '../../../ProdContext.js';
import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview/AddReview.jsx';
import Modal from '../../shared/Modal.jsx';
import useModal from '../../../useModal';
import ModalFormTitle from '../../shared/form/ModalFormTitle.jsx';
import ButtonMainStyle from '../../shared/ButtonMainStyle.js';
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
      <div className="reviews-scroll-container">
        {filteredReviews.slice(0, numReviews).map((review) => (
          <ReviewTile
            review={review}
            key={review.review_id}
            updateList={updateList}
          />
        ))}
      </div>
      <ReviewListFooter>
        <div className="review-list-footer">
          {(filteredReviews.length > 2 && numReviews < filteredReviews.length)
            ? (
              <ButtonMainStyle
                className="footer-button"
                type="button"
                onClick={() => setNumReviews(numReviews + 2)}
              >More Reviews
              </ButtonMainStyle>
            )
            : null }
          <ButtonMainStyle
            className="footer-button"
            type="button"
            onClick={onOpen}
          >Add a Review
          </ButtonMainStyle>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalFormTitle
              title="Write Your Review"
              subtitle={`About the ${product.name || 'unknown product'}`}
            />
            <AddReview onClose={onClose} />
          </Modal>
        </div>
      </ReviewListFooter>
    </div>
  );
};

export default ReviewList;
