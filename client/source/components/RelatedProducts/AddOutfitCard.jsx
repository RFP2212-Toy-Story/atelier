// LIBRARY IMPORTS
import React, { useState, useContext } from 'react';
import { BsPlusCircle } from 'react-icons/bs';

// LOCAL IMPORTS
import StyledOutfitListCard from './styles/OutfitListCard.styled.jsx';
import ProdContext from '../../ProdContext.js';

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
