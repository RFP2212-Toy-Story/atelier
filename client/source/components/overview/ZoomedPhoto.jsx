import React, { useCallback, useEffect } from 'react';

import * as Styles from './overviewStyles.js';


const ZoomedPhoto = function CreateZoomedPhotoComponent({ callback, color, photo }) {
  const photoWidth = (new URL(photo.url)).searchParams.get('w');

  const handleClick = useCallback(() => {
    callback();
  });

  const handleKey = (event) => {
    if (event.key === 'Escape') { callback(); }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKey);

    return (() => { document.removeEventListener('keydown', handleKey); });
  }, []);

  return (
    <Styles.ZoomedPhotoDiv color={color} onClick={handleClick} width={photoWidth}>
      <img style={{ maxWidth: '100%' }} alt="large format product photograph" src={photo.url} />
    </Styles.ZoomedPhotoDiv>
  );
};


export default ZoomedPhoto;
