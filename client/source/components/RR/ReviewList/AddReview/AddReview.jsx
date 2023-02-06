import React, { useContext } from 'react';
import ProdContext from '../../../../ProdContext.js';
import Characteristic from './Characteristic.jsx';
import traitOptions from '../../utilities/mappings.js';

const AddReview = function AddReview() {
  const { product } = useContext(ProdContext);
  const traits = Object.entries(traitOptions);

  return (
    <form className="review-form">
      <div className="review-form-title">Write Your Review</div>
      <div className="review-form-subtitle">About the {product.name}</div>
      <div className="form-section">
        <div className="form-section-header">Overall rating*</div>
        <div>placeholder for stars</div>
      </div>
      <div className="form-section">
        <div className="form-section-header">Do you recommend this product?*</div>
        <div className="recommend-options">
          <label htmlFor="yes">
            <input type="radio" id="option" value="yes" />
            Yes
          </label>
          <label htmlFor="no">
            <input type="radio" id="option" value="no" />
            No
          </label>
        </div>
      </div>
      <div className="form-section">
        <div className="form-section-header"> Characteristics*</div>
        <div className="required">(required)</div>
        {traits.map((trait) => (
          <Characteristic
            trait={trait}
            key={trait[0]}
          />
        ))}
      </div>
      <div className="form-section">
        <div className="form-section-header">Review summary</div>
        <input
          type="text"
          maxLength="60"
          placeholder="Example: Best purchase ever!"
        />
      </div>
      <div className="form-section">
        <div className="form-section-header">Review body*</div>
        <textarea
          type="text"
          minLength="50"
          maxLength="1000"
          placeholder="Why did you like the product or not?"
        />
        {/* <div className="body-counter"></> */}
      </div>
      <div className="form-section">
        <div className="form-section-header">Upload your photos</div>
      </div>
      <div className="form-section">
        <div className="form-section-header">What is your nickname*</div>
        <input
          type="text"
          maxLength="60"
          placeholder="Example: jackson11!"
        />
        <div className="form-section-footer">For privacy reasons, do not use your full name or email address</div>
      </div>
      <div className="form-section">
        <div className="form-section-header">Your email*</div>
      </div>
    </form>
  );
};

export default AddReview;
