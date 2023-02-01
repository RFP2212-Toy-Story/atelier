import React, { useCallback, useEffect } from 'react';

import * as Styles from './overviewStyles.js';


const ZoomedPhoto = function CreateZoomedPhotoComponent({
  callback, color, photo, photoWidth
}) {
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
      <img style={{ maxHeight: '75vh' }} alt="large format product photograph" src={photo.url} />
    </Styles.ZoomedPhotoDiv>
  );
};


export default ZoomedPhoto;
