
// LIBRARY IMPORTS
import React from 'react';

import StyleButton from './StyleButton.jsx';


// MAIN
const ProductStyles = function CreateProductStylesComponent({
  currentStyleID, styles, changeStyle
}) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      margin: '10px 0'
    }}
    >
      {styles?.map((style, index) => {
        let selected = false;
        if (currentStyleID === style?.style_id) {
          selected = true;
        }
        return (
          <StyleButton
            selected={selected}
            index={index}
            key={style.style_id}
            style={style}
            changeStyle={changeStyle}
          />
        );
      })}
    </div>
  );
};


export default ProductStyles;
