import React, { useState, useContext } from 'react';
import ProdContext from '../../../../ProdContext.js';
import { Form, InputSubmit } from '../../../shared/form/FormStyles.js';
import Characteristic from './Characteristic.jsx';
import FormInput from '../../../shared/form/FormInput.jsx';
import traitOptions from '../../utilities/mappings.js';

const AddReview = function AddReview() {
  const { prodID } = useContext(ProdContext);

  const initialFormInput = {
    product_id: prodID,
    rating: 0,
    summary: '',
    recommended: '',
    body: '',
    name: '',
    email: '',
    photos: [],
    characteristics: {}
  };
  const traits = Object.entries(traitOptions);
  const [formInput, setFormInput] = useState(initialFormInput);

  const clearForm = () => {
    setFormInput(initialFormInput);
  };

  return (
    <Form>
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
          required="required"
          placeholder="Example: Best purchase ever!"
        />
      </div>

      <div className="form-section">
        <div className="form-section-header">Review body*</div>
        <textarea
          type="text"
          minLength="50"
          maxLength="1000"
          required="required"
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
          required="required"
          placeholder="Example: jackson11!"
        />
        <div className="form-section-footer">For privacy reasons, do not use your full name or email address</div>
      </div>
      <div className="form-section">
        <div className="form-section-header">Your email*</div>
        <input
          type="email"
          maxLength="60"
          required="required"
          placeholder="Example: jackson11@email.com"
        />
        <div className="form-section-footer">For authentication reasons, you will not be emailed</div>
        <InputSubmit
          type="submit"
          value="Submit review"
        />
      </div>
    </Form>
  );
};

export default AddReview;
