
// LIBRARY IMPORTS
import React from 'react';

import * as Styles from './overviewStyles.js';
import Photo from './Photo';


// MAIN
const PhotoBlock = function CreatePhotoBlockComponent({ photos }) {
  return (
    <Styles.PhotoBlockDiv>
      {photos?.map((photo) => <Photo key={photo.url} photo={photo} />)}
    </Styles.PhotoBlockDiv>
  );
};


export default PhotoBlock;
