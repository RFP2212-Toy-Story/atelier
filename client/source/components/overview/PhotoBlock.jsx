
// LIBRARY IMPORTS
import React, { useEffect, useState } from 'react';

import * as Styles from './overviewStyles.js';
import Photo from './Photo';


// MAIN
const PhotoBlock = function CreatePhotoBlockComponent({ photos }) {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    if (!photos) { return; }
    let newIndex = currIndex;
    if (currIndex > photos.length - 1) {
      newIndex = 0;
      setCurrIndex(newIndex);
    }
    if (currIndex < 0) {
      newIndex = photos.length - 1;
      setCurrIndex(newIndex);
    }
    const thumbnail = document.querySelector(`[data-label='${newIndex}']`);
    thumbnail.parentNode.scrollTop = thumbnail.offsetTop - thumbnail.parentNode.offsetTop;
  }, [photos, currIndex]);

  const handleClick = ((event) => {
    switch (event.target.id) {
      case 'left':
        setCurrIndex((previous) => previous - 1);
        break;
      case 'right':
        setCurrIndex((previous) => previous + 1);
        break;
      case 'thumbnail': {
        const index = Number(event.target.dataset.label);
        setCurrIndex(index);
        break;
      }
      default:
        break;
    }
  });

  return (
    <Styles.PhotoBlockDiv>

      <Styles.ThumbnailWrapperDiv>
        {photos?.map((photo, index) => {
          let border;
          if (index === currIndex) {
            border = { border: '2px solid #E07A5F' };
          }
          return <Styles.ThumbnailImage style={border} id="thumbnail" data-label={index} onClick={handleClick} key={photo.thumbnail_url} alt="product photograph" src={photo.thumbnail_url} />;
        })}
      </Styles.ThumbnailWrapperDiv>

      <Styles.CarouselButton id="left" onClick={handleClick} style={{ left: '20px' }}>❰</Styles.CarouselButton>
      <Styles.CarouselWrapperDiv>
        {photos?.map((photo, index) => {
          if (index === currIndex) {
            return (<Photo key={photo.url} photo={photo} />);
          }
          return null;
        })}
      </Styles.CarouselWrapperDiv>
      <Styles.CarouselButton id="right" onClick={handleClick} style={{ right: '20px' }}>❱</Styles.CarouselButton>


    </Styles.PhotoBlockDiv>
  );
};


export default PhotoBlock;
