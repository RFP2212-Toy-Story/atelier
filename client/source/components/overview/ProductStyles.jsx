
// LIBRARY IMPORTS
import React from 'react';

import StyleButton from './StyleButton.jsx';


// MAIN
const ProductStlyes = function CreateProductStlyesComponent({ styles, setStyle }) {
  return (
    <div className="product-styles">
      {styles?.map((style, index) => (
        <StyleButton
          index={index}
          key={style.style_id}
          name={style.name}
          setStyle={setStyle}
        />
      ))}
    </div>
  );
};


export default ProductStlyes;
