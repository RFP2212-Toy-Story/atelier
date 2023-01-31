
// LIBRARY IMPORTS
import React from 'react';


// MAIN
const ProductText = function CreateProductTextComponent({ product }) {
  return (
    <div className="product-text">
      <p>{product?.slogan}</p>
      <p>{product?.description}</p>
    </div>
  );
};


export default ProductText;
