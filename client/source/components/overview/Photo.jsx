// LIBRARY IMPORTS
import React, { useEffect, useState } from 'react';
import { FastAverageColor } from 'fast-average-color';


// MAIN
const Photo = function CreatePhotoComponent({ photo }) {
  const [averageColor, setAverageColor] = useState('#000000');
  const fastAverageColor = new FastAverageColor();

  console.info('Average Color', averageColor);

  useEffect(() => {
    fastAverageColor.getColorAsync(photo.thumbnail_url)
      .then((color) => setAverageColor(color))
      .catch((error) => { console.error(error); });
  }, []);

  return (
    <div className="photo" style={{ 'background-color': `${averageColor.hex}` }}>
      <img width="50%" alt="" src={photo.thumbnail_url} />
    </div>
  );
};


export default Photo;
