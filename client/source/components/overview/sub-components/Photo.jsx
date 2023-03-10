// LIBRARY IMPORTS
import React, { useCallback, useEffect, useState } from 'react';
import { FastAverageColor } from 'fast-average-color';

import * as Styles from '../overviewStyles.js';
import ZoomedPhoto from './ZoomedPhoto.jsx';


// MAIN
const Photo = function CreatePhotoComponent({ photo }) {
  const [averageColor, setAverageColor] = useState('#000000');
  const [zoomed, setZoomed] = useState(false);

  const fastAverageColor = new FastAverageColor();

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

  useEffect(() => {
    if (zoomed) {
      document.body.classList.add('stop-scrolling');
    } else {
      document.body.classList.remove('stop-scrolling');
    }
  }, [zoomed]);

  return (
    <div>
      <Styles.PhotoTileDiv color={averageColor.hex}>
        <Styles.PhotoTileInnerDiv>
          <Styles.PhotoTileImage onClick={handleClick} alt="product photograph" src={photo.thumbnail_url} />
        </Styles.PhotoTileInnerDiv>
      </Styles.PhotoTileDiv>
      {zoomed ? <ZoomedPhoto callback={zoomedCB} color={averageColor.hex} photo={photo} /> : null} {/* eslint-disable-line */}
    </div>
  );
};


export default Photo;
