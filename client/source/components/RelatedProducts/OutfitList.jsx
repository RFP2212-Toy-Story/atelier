// LIBRARY IMPORTS
import React from 'react';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';

// LOCAL IMPORTS
import OutfitListCard from './OutfitListCard.jsx';
import StyledMediaScroll from './styles/MediaScroll.styled.jsx';
import StyledOutfitList from './styles/OutfitList.styled.jsx';

const OutfitList = function CreateOutfitList() {
  return (
    <StyledOutfitList>
      <h3>Your Outfits:</h3>
      <div className="container">
        <StyledMediaScroll>
          <OutfitListCard />
          <OutfitListCard />
          <OutfitListCard />
        </StyledMediaScroll>
        <BiChevronLeftCircle className="left" />
        <BiChevronRightCircle className="right" />
      </div>
    </StyledOutfitList>
  );
};

export default OutfitList;
