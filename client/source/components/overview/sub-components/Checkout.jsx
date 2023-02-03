import React, { useEffect, useState } from 'react';


const Checkout = function CreateCheckoutComponent({ style }) {
  const [quantityArray, setQuantityArray] = useState(['SOLD OUT']);
  const [sizeArray, setSizeArray] = useState(['SOLD OUT']);

  function getSizes(skus) {
    if (skus) {
      const sizes = Array.from(new Set(Object.values(skus).map((sku) => sku.size)));
      setSizeArray(sizes);
      return sizes;
    }
    return undefined;
  }

  function getQuantities(size, skus) {
    if (!skus) { return; }
    skus.forEach((sku) => {
      if (sku.size === size) {
        const array = [...Array(Math.min(sku.quantity, 16)).keys()];
        setQuantityArray(array.splice(1));
      }
    });
  }

  function handleSizeChange(event) {
    const size = event.target.value;
    const skus = Object.values(style?.skus);
    getQuantities(size, skus);
  }

  useEffect(() => {
    const sizes = getSizes(style?.skus); // eslint-disable-line
    // TODO: initial load of size quantities
    // getQuantities(sizes[0], style?.skus);
  }, [style]);

  return (
    <div>
      <div>
        <select onChange={handleSizeChange}>
          {sizeArray?.map((size) => (<option key={size}>{size}</option>))}
        </select>

        <select>
          {quantityArray.map((number) => (<option key={number}>{number}</option>))}
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
