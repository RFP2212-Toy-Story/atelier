import React, { useEffect, useState } from 'react';


const Checkout = function CreateCheckoutComponent({ style }) {
  const [quantityArray, setQuantityArray] = useState(['SOLD OUT']);
  const [sizeArray, setSizeArray] = useState(['SOLD OUT']);

  function getSizes(skus) {
    if (skus) {
      const sizes = Array.from(new Set(Object.values(skus).map((sku) => {
        if (sku.quantity) { return sku.size; } return null;
      })));
      setSizeArray(sizes);
      return sizes;
    }
    return undefined;
  }

  function getQuantities(size, skus) {
    if (!skus) { return; }
    skus.forEach((sku) => {
      if (sku.size === size) {
        let array = [...Array(Math.min(sku.quantity, 15)).keys()];
        array = array.map((num) => num + 1);
        setQuantityArray(array);
      }
    });
  }

  function handleSizeChange(event) {
    const size = event.target.value;
    const skus = Object.values(style?.skus);
    getQuantities(size, skus);
  }

  useEffect(() => {
    getSizes(style?.skus);
    const element = document.getElementById('checkout-size-select');
    const element2 = document.getElementById('checkout-quantity-select');
    element.value = 'Choose a size...';
    element2.value = 'Choose a quantity...';
  }, [style]);

  return (
    <div>
      <div>
        <select id="checkout-size-select" onChange={handleSizeChange}>
          <option defaultValue>Choose a size...</option>
          {sizeArray?.map((size) => (<option key={size}>{size}</option>))}
        </select>

        <select id="checkout-quantity-select">
          <option defaultValue>Choose a quantity...</option>
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
