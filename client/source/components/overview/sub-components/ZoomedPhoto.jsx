import React, { useCallback, useEffect, useState } from 'react';

import * as Styles from '../overviewStyles.js';


const ZoomedPhoto = function CreateZoomedPhotoComponent({
  callback, color, photo
}) {
  const [clicked, setClicked] = useState(false);
  const handleKey = (event) => {
    if (event.key === 'Escape') { callback(); }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKey);

    return (() => { document.removeEventListener('keydown', handleKey); });
  }, []);

  function imagePan(event) {
    const image = event.target;
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;
    const imageW = image.offsetWidth;
    const imageH = image.offsetHeight;
    const xNew = (mouseX * 100) / imageW;
    const yNew = (mouseY * 100) / imageH;
    image.style.transformOrigin = `${xNew}% ${yNew}%`;
  }

  const handleClick = useCallback((event) => {
    const elem = event.target.parentNode;
    elem.removeEventListener('mousemove', imagePan);
    setClicked((previous) => !previous);
    if (!clicked) {
      elem.addEventListener('mousemove', imagePan);
    }
  });

  return (
    <div style={{ width: '60vw', height: '60vh', position: 'absolute' }}>
      <Styles.OverlayDiv onClick={callback} />
      <Styles.ZoomedPhotoDiv color={color}>
        <Styles.PhotoTileInnerDiv>
          <Styles.ZoomedPhotoTileImage
            style={{
              maxHeight: '75vh'
            }}
            clicked={clicked}
            alt="large format product photograph"
            src={photo.url}
            onClick={handleClick}
          />
        </Styles.PhotoTileInnerDiv>
      </Styles.ZoomedPhotoDiv>
      {/* TODO: Implement thumbnail yet another carousel in this modal */}
      {/* <div style={{ position: 'relative', zIndex: '102', backgroundColor: 'white' }}>
        BUTTONS
      </div>
      <div style={{ position: 'relative', zIndex: '102', backgroundColor: 'white' }}>
        THUMBNAILS GO HERE
      </div> */}
    </div>
  );
};


export default ZoomedPhoto;
