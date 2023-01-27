import React from 'react';
import OutfitListCard from './OutfitListCard.jsx';

const OutfitList = (props) => {
  return (
    <div>
      <h3>Your Outfit:</h3>
      <ul>
        <OutfitListCard />
        <OutfitListCard />
        <OutfitListCard />
      </ul>
    </div>
  )
};

export default OutfitList;
