// LIBRARY IMPORTS
import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

// LOCAL IMPORTS
import StyledOutfitListCard from './styles/OutfitListCard.styled.jsx';

// MAIN
const OutfitListCard = function CreateOutfitListCard() {
  return (
    <StyledOutfitListCard>
      <img alt="imagePlaceholder" />
      <IoIosCloseCircleOutline className="removeButton" />
      <h3>CATEGORY</h3>
      <h4>Name</h4>
      <h5>$99.99</h5>
    </StyledOutfitListCard>
  );
};

export default OutfitListCard;
