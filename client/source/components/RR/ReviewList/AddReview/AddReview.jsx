import React, { useContext } from 'react';
import ProdContext from '../../../../ProdContext.js';
import Characteristics from './Characteristics.jsx';

const AddReview = function AddReview() {
  const { product } = useContext(ProdContext);

  return (
    <form className="review-form">
      <div className="review-form-title">Write Your Review</div>
      <div className="review-form-subtitle">About the {product.name}</div>
      <div className="overall-rating">placeholder</div>
      <div className="recommend-section">
        <div className="recommend-header">Do you recommend this product?</div>
        <div className="recommend-options">
          <label htmlFor="yes">
            <input type="radio" id="recommend" value="yes" />
            Yes
          </label>
          <label htmlFor="no">
            <input type="radio" id="recommend" value="no" />
            No
          </label>
        </div>
      </div>
      <Characteristics />
    </form>
  );
};

export default AddReview;
