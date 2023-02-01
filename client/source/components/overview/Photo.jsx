// LIBRARY IMPORTS
import React, { useCallback, useEffect, useState } from 'react';
import { FastAverageColor } from 'fast-average-color';

import * as Styles from './overviewStyles.js';
import ZoomedPhoto from './ZoomedPhoto.jsx';


// MAIN
const Photo = function CreatePhotoComponent({ photo }) {
  const [averageColor, setAverageColor] = useState('#000000');
  const [zoomed, setZoomed] = useState(false);

  const fastAverageColor = new FastAverageColor();

  console.info('Average Color', averageColor);

  const handleClick = () => {
    setZoomed((previous) => !previous);
  };

  const zoomedCB = useCallback(() => {
    setZoomed((previous) => !previous);
  });

  useEffect(() => {
    fastAverageColor.getColorAsync(photo.thumbnail_url)
      .then((color) => setAverageColor(color))
      .catch((error) => { console.error(error); });
  }, []);

  return (
    <div className="photo" style={{ 'background-color': `${averageColor.hex}` }}>
      <img onClick={handleClick} width="50%" alt="product photograph" src={photo.thumbnail_url} />
      {zoomed ? <Styles.Overlay /> : null}
      {zoomed ? <ZoomedPhoto callback={zoomedCB} color={averageColor.hex} photo={photo} /> : null}
    </div>
  );
};


export default Photo;
