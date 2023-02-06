import React from 'react';
import { SortContainer } from '../styles/RR.styled.js';

const SortReviews = function SortReviews({ sortType, setSortType }) {
  return (
    <SortContainer>
      <div className="sort-bar">
        <label htmlFor={sortType}>
          {'Reviews sorted by '}
          <select
            className="sort-selection"
            value={sortType}
            onChange={(event) => setSortType(event.target.value)}
          >
            <option value="relevant">relevant</option>
            <option value="helpful">helpful</option>
            <option value="newest">newest</option>
          </select>
        </label>
      </div>
    </SortContainer>
  );
};

export default SortReviews;
