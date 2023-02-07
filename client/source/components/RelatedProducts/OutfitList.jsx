// LIBRARY IMPORTS
import React, { useState, useContext, useRef } from 'react';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import { flushSync } from 'react-dom';

// LOCAL IMPORTS
import OutfitListCard from './OutfitListCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';
import StyledMediaScroll from './styles/MediaScroll.styled.jsx';
import StyledOutfitList from './styles/OutfitList.styled.jsx';
import ProdContext from '../../ProdContext.js';

const OutfitList = function CreateOutfitList() {
  // STATES & CONSTANTS
  const { prodID, product, styles } = useContext(ProdContext);
  const [outfitItems, setOutfitItems] = useState(localStorage);
  const [index, setIndex] = useState(0);
  const selectedRef = useRef(null);
  const outfitItemsList = Object.entries(outfitItems);

  // HANDLERS
  const handleAddClick = () => {
    localStorage.setItem(prodID, JSON.stringify({
      name: product.name,
      category: product.category,
      price: product.default_price,
      image: styles[0].photos[0].thumbnail_url,
      stars: 3.5
    }));
    setOutfitItems({ ...localStorage });
  };

  const handleRightClick = () => {
    flushSync(() => {
      if (index < outfitItemsList.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });
    selectedRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  const handleLeftClick = () => {
    flushSync(() => {
      if (index > 0) {
        setIndex(index - 1);
      } else {
        setIndex(outfitItemsList.length - 1);
      }
    });
    selectedRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  return (
    <StyledOutfitList>
      <h3>Your Outfits:</h3>
      <div className="container">
        <StyledMediaScroll>
          <AddOutfitCard handleClick={handleAddClick} />
          {/* eslint-disable-next-line max-len */}
          {outfitItemsList.map((outfit, i) => <OutfitListCard outfit={outfit} setOutfitItems={setOutfitItems} ref={index === i ? selectedRef : null} />)}
        </StyledMediaScroll>
        {index > 0 && <BiChevronLeftCircle className="left" onClick={handleLeftClick} />}
        {index < outfitItemsList.length - 1 && <BiChevronRightCircle className="right" onClick={handleRightClick} />}
      </div>
    </StyledOutfitList>
  );
};

export default OutfitList;
