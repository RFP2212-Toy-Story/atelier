import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import FullStar from '../../shared/FullStar.jsx';
import EmptyStar from '../../shared/EmptyStar.jsx';


const ReviewRating = function ReviewRating({ rating }) {
  return (
    <div className="review-rating">
      { rating === 1
        ? <div><FullStar /><EmptyStar /><EmptyStar /><EmptyStar /><EmptyStar /></div>
        : null }
      { rating === 2
        ? <div><FullStar /><FullStar /><EmptyStar /><EmptyStar /><EmptyStar /></div>
        : null}
      { rating === 3
        ? <div><FullStar /><FullStar /><FullStar /><EmptyStar /><EmptyStar /></div>
        : null}
      { rating === 4
        ? <div><FullStar /><FullStar /><FullStar /><FullStar /><EmptyStar /></div>
        : null}
      { rating === 5
        ? <div><FullStar /><FullStar /><FullStar /><FullStar /><FullStar /></div>
        : null}
    </div>
  );
};

export default ReviewRating;
