import React from 'react';
import { GiCircleClaws } from 'react-icons/gi'; // GiDinosaurRex GiDinosaurBones

import * as Styles from '../overviewStyles.js';

const StyleButton = function CreateStyleButtonComponent({
  index, changeStyle, selected, style
}) {
  const handleClick = () => {
    changeStyle(style);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Styles.StyleButtonImage selected={selected} onClick={handleClick} id={index} type="button" alt={style.name} src={style?.photos[0].thumbnail_url} />
      {selected ? (
        <div style={{
          fontWeight: 'bold',
          fontSize: '62px',
          color: 'rgb(224, 122, 95, 0.75)',
          position: 'absolute',
          top: '0px',
          left: '0px'
        }}
        >
          <GiCircleClaws />
        </div>
      )
        : (null)}
    </div>
  );
};


export default StyleButton;
