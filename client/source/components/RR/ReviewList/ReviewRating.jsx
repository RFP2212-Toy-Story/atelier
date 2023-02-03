import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';


const ReviewRating = function ReviewRating({ rating }) {
  return (
    <div className="review-rating">
      { rating === 1
        ? <div><FaStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
        : null }
      { rating === 2
        ? <div><FaStar /><FaStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
        : null}
      { rating === 3
        ? <div><FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /></div>
        : null}
      { rating === 4
        ? <div><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></div>
        : null}
      { rating === 5
        ? <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
        : null}
    </div>
  );
};

export default ReviewRating;
