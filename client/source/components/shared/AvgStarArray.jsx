// LIBRARY IMPORTS
import React from 'react';
import styled from 'styled-components';

// LOCAL IMPORTS
// import average from '../../utilities/helpers.js';
// import ProdContext from '../../ProdContext.js';
import EmptyStar from './EmptyStar.jsx';
import QuarterStar from './QuarterStar.jsx';
import HalfStar from './HalfStar.jsx';
import ThreeQuarterStar from './ThreeQuarterStar.jsx';
import FullStar from './FullStar.jsx';

// STYLED COMPONENT
const StyledAvgStarArray = styled.div`
  display: flex;
  flex-direction: row;
`;

const AvgStarArray = function CreateAvgStarArray({ avgRating }) {
  return (
    <StyledAvgStarArray>
      {Array.from(Array(5)).map((_, index) => {
        const starPosition = index + 1;

        if (starPosition <= Math.floor(avgRating)) {
          return (
            <div key={starPosition}>
              <FullStar />
            </div>
          );
        }

        if (starPosition > Math.ceil(avgRating)) {
          return (
            <div key={starPosition}>
              <EmptyStar />
            </div>
          );
        }

        const filling = avgRating - index;
        if (filling <= 0.3) {
          return (
            <div key={starPosition}>
              <QuarterStar />
            </div>
          );
        }
        if (filling <= 0.6) {
          return (
            <div key={starPosition}>
              <HalfStar />
            </div>
          );
        }
        if (filling <= 0.9) {
          return (
            <div key={starPosition}>
              <ThreeQuarterStar />
            </div>
          );
        }
      })}
    </StyledAvgStarArray>
  );
};

export default AvgStarArray;
