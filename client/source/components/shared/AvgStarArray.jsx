// LIBRARY IMPORTS
import React from 'react';
import styled from 'styled-components';

// LOCAL IMPORTS
import average from '../../utilities/helpers.js';
import EmptyStar from './EmptyStar.jsx';
import QuarterStar from './QuarterStar.jsx';
import HalfStar from './HalfStar.jsx';
import ThreeQuarterStar from './ThreeQuarterStar.jsx';
import FullStar from './FullStar.jsx';

// STYLED COMPONENT
const StyledAvgStarArray = styled.div`
  display: flex;
  flex-direction: row
`;

const AvgStarArray = function CreateAvgStarArray() {
  // TEMPORARY DATA
  const avgRating = 3.5;
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
              <EmptyStar filling={0} />
            </div>
          );
        }

        const filling = avgRating - index;
        if (filling === 0.25) {
          return (
            <div key={starPosition}>
              <QuarterStar />
            </div>
          );
        }
        if (filling === 0.5) {
          return (
            <div key={starPosition}>
              <HalfStar />
            </div>
          );
        }
        if (filling === 0.75) {
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
