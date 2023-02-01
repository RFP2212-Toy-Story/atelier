
// LIBRARY IMPORTS
import React from 'react';

import Photo from './Photo';


// MAIN
const PhotoBlock = function CreatePhotoBlockComponent({ photos }) {
  return (
    <div className="photo-block">
      {photos?.map((photo) => <Photo key={photo.url} photo={photo} />)}
    </div>
  );
};


export default PhotoBlock;
