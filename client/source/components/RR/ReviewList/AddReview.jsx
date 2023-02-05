import React, { useState } from 'react';
import ProdContext from '../../../ProdContext.js';

const AddReview = function AddReview() {
  const { product } = useContext(ProdContext);

  return (
    <form className="review-form">
      <div className="review-form-title">Write Your Review</div>
      <div className="review-form-subtitle">About the {product.name}</div>
      <div className="overall-rating">placeholder</div>
    </form>
  );
};

export default AddReview;
