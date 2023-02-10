
// LIBRARY IMPORTS
import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';

// LOCAL IMPORTS
import StyledOutfitListCard from './styles/OutfitListCard.styled.jsx';

// MAIN
const AddOutfitCard = function CreateAddOutfitCard({ handleClick }) {
  return (
    <StyledOutfitListCard>
      <h2>Add to Your Outfit</h2>
      <BsPlusCircle className="addButton" onClick={handleClick} />
    </StyledOutfitListCard>
  );
};

export default AddOutfitCard;
