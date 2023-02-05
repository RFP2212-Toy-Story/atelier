import React, { useContext } from 'react';
import ProdContext from '../../../../ProdContext.js';
import Characteristic from './Characteristic.jsx';
import traitOptions from '../../utilities/mappings.js';

const AddReview = function AddReview() {
  const { product } = useContext(ProdContext);
  const traits = Object.entries(traitOptions);
  // console.log('trait options', Object.entries(traitOptions));

  return (
    <form className="review-form">
      <div className="review-form-title">Write Your Review</div>
      <div className="review-form-subtitle">About the {product.name}</div>
      <div className="overall-rating">placeholder</div>
      <div className="form-section">
        <div className="form-section-header">Do you recommend this product?</div>
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
      <div className="form-section">
        <div className="form-section-header"> Characteristics</div>
        {traits.map((trait) => (
          <Characteristic
            trait={trait}
            key={trait[0]}
          />
        ))}
      </div>
    </form>
  );
};

export default AddReview;
