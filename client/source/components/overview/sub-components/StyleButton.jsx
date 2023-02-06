import React from 'react';

import * as Styles from '../overviewStyles.js';

const StyleButton = function CreateStyleButtonComponent({
  index, changeStyle, selected, style
}) {
  const handleClick = () => {
    changeStyle(style);
  };

  return (
    <div>
      <Styles.StyleButton selected={selected} onClick={handleClick} id={index} type="button">
        <img alt="stlye thumbnail" style={{ width: '40px', height: '40px', clipPath: 'circle()' }} src={style?.photos[0].thumbnail_url} />
      </Styles.StyleButton>
    </div>
  );
};


export default StyleButton;
