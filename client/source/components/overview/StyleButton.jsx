import React from 'react';

import * as Styles from './overviewStyles.js';

const StyleButton = function CreateStyleButtonComponent({ index, name, setStyle }) {
  const handleClick = (event) => {
    setStyle(event.target.id);
  };

  return (
    <div>
      <Styles.StyleButton onClick={handleClick} id={index} type="button">{name}</Styles.StyleButton>
    </div>
  );
};


export default StyleButton;
