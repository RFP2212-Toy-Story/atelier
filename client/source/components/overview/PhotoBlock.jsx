
// LIBRARY IMPORTS
import React, { useEffect, useState } from 'react';

import * as Styles from './overviewStyles.js';
import Photo from './Photo';


// MAIN
const PhotoBlock = function CreatePhotoBlockComponent({ photos }) {
  const [currindex, setCurrIndex] = useState(0);
  const [length, setLength] = useState(photos?.length);

  useEffect(() => {
    setLength(photos?.length);
    if (currindex > length - 1) {
      setCurrIndex(0);
    }
    if (currindex < 0) {
      setCurrIndex(photos.length - 1);
    }
  }, [photos, currindex]);

  const handleClick = ((event) => {
    switch (event.target.id) {
      case 'left':
        setCurrIndex((previous) => previous - 1);
        break;
      case 'right':
        setCurrIndex((previous) => previous + 1);
        break;
      case 'thumbnail': {
        const index = Number(event.target.getAttribute('label'));
        console.log(index);
        setCurrIndex(index);

        break;
      }
      default:
        break;
    }
  });

  return (
    <Styles.PhotoBlockDiv>

      <div className="FlexColumn">
        {photos?.map((photo, index) => {
          let border;
          if (index === currindex) {
            border = { border: '2px solid red' };
          }
          return <Styles.ThumbnailImage style={border} id="thumbnail" label={index} onClick={handleClick} key={photo.thumbnail_url} alt="product photograph" src={photo.thumbnail_url} />;
        })}
      </div>

      <Styles.CarouselButton id="left" onClick={handleClick} style={{ left: '20px' }}>❰</Styles.CarouselButton>
      <Styles.CarouselWrapperDiv>
        {photos?.map((photo, index) => {
          if (index === currindex) {
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
