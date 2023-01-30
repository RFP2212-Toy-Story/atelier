import React from 'react';

const SortReviews = function SortReviews({ reviewCount, sortType, setSortType }) {
  return (
    <div className="sort-bar">
      <label htmlFor={sortType}>
        {reviewCount} reviews, sorted by { }
        <select
          value={sortType}
          onChange={(event) => setSortType(event.target.value)}
        >
          <option value="relevance">relevance</option>
          <option value="helpful">helpful</option>
          <option value="newest">newest</option>
        </select>
      </label>
    </div>
  );
};

export default SortReviews;
