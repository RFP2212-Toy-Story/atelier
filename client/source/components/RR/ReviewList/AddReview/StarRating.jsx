import React from 'react';
import styled from 'styled-components';
import { FaStar, FaRegStar } from 'react-icons/fa';

const StarRating = function StarRating({ rating, onClick }) {
  return (
    <Stars>
      {Array.from(Array(5)).map((_, index) => {
        const starPosition = index + 1;

        if (starPosition <= rating) {
          return (
            <FaStar
              key={starPosition}
              value={starPosition}
              onClick={() => onClick(starPosition)}
            />
          );
        }

        if (starPosition > rating) {
          return (
            <FaRegStar
              key={starPosition}
              value={starPosition}
              onClick={() => onClick(starPosition)}
            />
          );
        }
      })}
    </Stars>
  );
};

const Stars = styled.div`
  display: flex;
  flex-direction: row;
`;

export default StarRating;
