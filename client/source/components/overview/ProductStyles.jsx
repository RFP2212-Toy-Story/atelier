
// LIBRARY IMPORTS
import React from 'react';

import StyleButton from './StyleButton.jsx';


// MAIN
const ProductStlyes = function CreateProductStlyesComponent({ currentStyleID, styles, setStyle }) {
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
            setStyle={setStyle}
          />
        );
      })}
    </div>
  );
};


export default ProductStlyes;
