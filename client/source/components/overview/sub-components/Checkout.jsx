import React from 'react';


const Checkout = function CreateCheckoutComponent({ style }) {
  function getSizes(skus) {
    if (skus) {
      const sizes = Array.from(new Set(Object.values(skus).map((sku) => sku.size)));
      return sizes;
    }
    return undefined;
  }

  return (
    <div>
      <div>
        <select>
          {getSizes(style?.skus)?.map((size) => (<option key={size}>{size}</option>))}
        </select>

        <select>
          <option>QUANTITY SELECT</option>
        </select>
      </div>

      <hr />

      <div>
        <button type="button">ADD TO CART</button>
        <button type="button">💔</button>
      </div>
    </div>
  );
};


export default Checkout;
