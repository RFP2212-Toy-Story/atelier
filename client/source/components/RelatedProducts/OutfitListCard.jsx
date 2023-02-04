// LIBRARY IMPORTS
import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

// LOCAL IMPORTS
import StyledOutfitListCard from './styles/OutfitListCard.styled.jsx';

// MAIN
const OutfitListCard = function CreateOutfitListCard({ outfit }) {
  const outfitArray = Object.values(outfit);
  const outfitDetails = JSON.parse(outfitArray[0]);
  return (
    <StyledOutfitListCard>
      <img alt="imagePlaceholder" />
      <IoIosCloseCircleOutline className="removeButton" />
      <h3>{outfitDetails.category}</h3>
      <h4>{outfitDetails.name}</h4>
      <h5>${outfitDetails.price}</h5>
    </StyledOutfitListCard>
  );
};

export default OutfitListCard;
