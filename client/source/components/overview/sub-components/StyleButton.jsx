import React from 'react';

import * as Styles from '../overviewStyles.js';

const StyleButton = function CreateStyleButtonComponent({
  index, name, changeStyle, selected, style
}) {
  const handleClick = () => {
    changeStyle(style);
  };

  return (
    <div>
      <Styles.StyleButton selected={selected} onClick={handleClick} id={index} type="button">{name}</Styles.StyleButton>
    </div>
  );
};


export default StyleButton;
