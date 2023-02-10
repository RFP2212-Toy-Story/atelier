// LIBRARY IMPORTS
import React, { forwardRef } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

// LOCAL IMPORTS
import StyledOutfitListCard from './styles/OutfitListCard.styled.jsx';
import AvgStarArray from '../shared/AvgStarArray.jsx';

// MAIN
// eslint-disable-next-line prefer-arrow-callback
const OutfitListCard = forwardRef(function CreateOutfitListCard({ outfit, setOutfitItems }, ref) {
  const outfitID = JSON.parse(outfit[0]);
  const outfitData = JSON.parse(outfit[1]);

  // HANDLERS
  const handleRemoveClick = () => {
    try {
      localStorage.removeItem(outfitID);
      setOutfitItems({ ...localStorage });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledOutfitListCard ref={ref}>
      <img alt="placeholder" src={outfitData.image} />
      <IoIosCloseCircleOutline className="removeButton" onClick={handleRemoveClick} />
      <h3 className="card-content">{outfitData.category}</h3>
      <h4 className="card-content">{outfitData.name}</h4>
      <h5 className="card-content">${outfitData.price}</h5>
      <AvgStarArray className="card-content" avgRating={outfitData.stars} />
    </StyledOutfitListCard>
  );
});

export default OutfitListCard;
