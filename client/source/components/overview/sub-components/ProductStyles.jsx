
// LIBRARY IMPORTS
import React from 'react';

import StyleButton from './StyleButton.jsx';


// MAIN
const ProductStyles = function CreateProductStylesComponent({
  currentStyleID, styles, changeStyle
}) {
  return (
    <div className="product-styles">
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
            name={style.name}
            style={style}
            changeStyle={changeStyle}
          />
        );
      })}
    </div>
  );
};


export default ProductStyles;
