// LIBRARY IMPORTS
import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

// LOCAL IMPORTS
import StyledOutfitListCard from './styles/OutfitListCard.styled.jsx';

// MAIN
const OutfitListCard = function CreateOutfitListCard({ outfit, setOutfitItems }) {
  const outfitID = JSON.parse(outfit[0]);
  const outfitData = JSON.parse(outfit[1]);

  // HANDLERS
  const handleRemoveClick = (e) => {
    e.stopPropagation();
    localStorage.removeItem(outfitID);
    setOutfitItems({ ...localStorage });
  };

  return (
    <StyledOutfitListCard>
      <img alt="placeholder" src={outfitData.image} />
      <IoIosCloseCircleOutline className="removeButton" onClick={handleRemoveClick} />
      <h3>{outfitData.category}</h3>
      <h4>{outfitData.name}</h4>
      <h5>${outfitData.price}</h5>
    </StyledOutfitListCard>
  );
};

export default OutfitListCard;
