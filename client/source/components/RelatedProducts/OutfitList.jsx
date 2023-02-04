// LIBRARY IMPORTS
import React, { useState, useContext } from 'react';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';

// LOCAL IMPORTS
import OutfitListCard from './OutfitListCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';
import StyledMediaScroll from './styles/MediaScroll.styled.jsx';
import StyledOutfitList from './styles/OutfitList.styled.jsx';
import ProdContext from '../../ProdContext.js';

const OutfitList = function CreateOutfitList() {
  // STATES
  const { prodID, product, styles } = useContext(ProdContext);
  const [outfitItems, setOutfitItems] = useState([{ ...localStorage }]);

  // HANDLERS
  const handleAddClick = () => {
    localStorage.setItem(prodID, JSON.stringify({
      name: product.name,
      category: product.category,
      price: product.default_price,
      image: 'placeholder',
      stars: 3.5
    }));
    setOutfitItems([{ ...localStorage }]);
  };
  return (
    <StyledOutfitList>
      <h3>Your Outfits:</h3>
      <div className="container">
        <StyledMediaScroll>
          <AddOutfitCard handleClick={handleAddClick} />
          {outfitItems.map((outfit) => <OutfitListCard outfit={outfit} />)}
        </StyledMediaScroll>
        <BiChevronLeftCircle className="left" />
        <BiChevronRightCircle className="right" />
      </div>
    </StyledOutfitList>
  );
};

export default OutfitList;
