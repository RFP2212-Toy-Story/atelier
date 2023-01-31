// LIBRARY IMPORTS
import React from 'react';


// MAIN
const Photo = function CreatePhotoComponent({ photo }) {
  return (
    <div className="photo">
      <img width="50%" alt="" src={photo.thumbnail_url} />
    </div>
  );
};


export default Photo;
