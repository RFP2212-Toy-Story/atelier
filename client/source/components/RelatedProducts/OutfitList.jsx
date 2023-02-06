// LIBRARY IMPORTS
import React, { useState, useContext, useEffect } from 'react';
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
  const [outfitItems, setOutfitItems] = useState(localStorage);


  // HANDLERS
  const handleAddClick = () => {
    // styles.
    console.log('STYLES PROP: ', styles);
    console.log('URL: ', styles[0].photos[0].thumbnail_url);
    localStorage.setItem(prodID, JSON.stringify({
      name: product.name,
      category: product.category,
      price: product.default_price,
      image: 'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      stars: 3.5
    }));
    setOutfitItems({ ...localStorage });
  };

  const outfitItemsList = Object.entries(outfitItems);
  console.log('OUTFIT ITEMS LIST: ', outfitItemsList);

  return (
    <StyledOutfitList>
      <h3>Your Outfits:</h3>
      <div className="container">
        <StyledMediaScroll>
          <AddOutfitCard handleClick={handleAddClick} />
          {outfitItemsList.map((outfit) => {
            console.log('OUTFIT MAP: ', outfit);
            return <OutfitListCard outfit={outfit} setOutfitItems={setOutfitItems} /> })}
        </StyledMediaScroll>
        <BiChevronLeftCircle className="left" />
        <BiChevronRightCircle className="right" />
      </div>
    </StyledOutfitList>
  );
};

export default OutfitList;
