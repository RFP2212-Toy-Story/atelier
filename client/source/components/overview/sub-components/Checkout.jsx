import React, { useEffect, useState } from 'react';

import * as Styles from '../overviewStyles.js';


const Checkout = function CreateCheckoutComponent({ style }) {
  const [quantityArray, setQuantityArray] = useState(['SOLD OUT']);
  const [sizeArray, setSizeArray] = useState(['SOLD OUT']);
  const [selectedSize, setSelectedSize] = useState('Choose a size...');
  const [selectedQuantity, setSelectedQuantity] = useState('Choose a quantity...');

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
    setSelectedSize(event.target.value);
    const size = event.target.value;
    const skus = Object.values(style?.skus);
    getQuantities(size, skus);
  }

  function handleQuantityChange(event) {
    setSelectedQuantity(event.target.value);
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
      <div style={{ margin: '0.5rem 0' }}>

        <hr />

        <select id="checkout-size-select" value={selectedSize} onChange={handleSizeChange}>
          <option defaultValue>Choose a size...</option>
          <optgroup>
            {sizeArray?.map((size) => (<option key={size}>{size}</option>))}
          </optgroup>
        </select>

        <select id="checkout-quantity-select" value={selectedQuantity} onChange={handleQuantityChange}>
          <option defaultValue>Choose a quantity...</option>
          <optgroup>
            {quantityArray.map((number) => (<option key={number}>{number}</option>))}
          </optgroup>
        </select>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Styles.CheckoutButton type="button">ADD TO CART</Styles.CheckoutButton>
        <Styles.CheckoutButton type="button">💔</Styles.CheckoutButton>
      </div>
    </div>
  );
};


export default Checkout;
