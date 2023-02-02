import React from 'react';

import * as Styles from './overviewStyles.js';

const StyleButton = function CreateStyleButtonComponent({
  index, name, setStyle, selected
}) {
  const handleClick = (event) => {
    setStyle(event.target.id);
  };

  return (
    <div>
      <Styles.StyleButton selected={selected} onClick={handleClick} id={index} type="button">{name}</Styles.StyleButton>
    </div>
  );
};


export default StyleButton;
