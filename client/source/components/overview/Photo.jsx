// LIBRARY IMPORTS
import React from 'react';


// MAIN
const Photo = function CreatePhotoComponent({ photo }) {
  return (
    <div className="photo">
      <img alt="" src={photo.thumbnail_url} />
    </div>
  );
};


export default Photo;
