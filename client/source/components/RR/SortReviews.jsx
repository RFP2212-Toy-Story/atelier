import React from 'react';

const SortReviews = function SortReviews({ reviewCount, sortType, setSortType }) {
  return (
    <div className="sort-bar">
      <span>
        {reviewCount} reviews, sorted by
      </span>
    </div>
  );
};

export default SortReviews;
