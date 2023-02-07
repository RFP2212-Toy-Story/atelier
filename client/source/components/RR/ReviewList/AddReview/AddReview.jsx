import React, { useState, useContext, useCallback } from 'react';
import ProdContext from '../../../../ProdContext.js';
import { Form, InputSubmit } from '../../../shared/form/FormStyles.js';
import Characteristic from './Characteristic.jsx';
import FormInput from '../../../shared/form/FormInput.jsx';
import FormTextarea from '../../../shared/form/FormTextarea';
import { postID, traitOptions } from '../../utilities/mappings.js';
import * as requests from '../../../../utilities/axiosRequests.js';

const AddReview = function AddReview({ onClose }) {
  const { prodID } = useContext(ProdContext);

  const traits = Object.entries(traitOptions);

  const initialFormInput = {
    product_id: prodID,
    rating: 0,
    summary: '',
    recommended: null,
    body: '',
    name: '',
    email: '',
    photos: [],
    characteristics: {}
  };

  const [formInput, setFormInput] = useState(initialFormInput);

  const clearForm = () => {
    setFormInput(initialFormInput);
  };

  const handleInputChange = useCallback((event) => {
    console.log('event target name', event.target.name);
    console.log('event target value', event.target.value);
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  }, [formInput]);

  const handleRadioChange = useCallback((event) => {
    setFormInput({
      ...formInput,
      characteristics: {
        ...formInput.characteristics,
        [event.target.id]: Number(event.target.value)
      }
    });
  }, [formInput]);

  const handleSubmit = (event) => {
    event.preventDefault();
    requests
      .post(`/reviews/?product_id=${prodID}`, formInput)
      .then((results) => {
        console.info(results.status);
        onClose(event);
        clearForm();
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="form-section">
        <div className="form-section-header">Overall rating *</div>
        <div>placeholder for stars</div>
      </div>

      <div className="form-section">
        <div className="form-section-header">Do you recommend this product?*</div>
        <div className="radio-options">
          <label htmlFor="yes">
            <input
              name="recommended"
              type="radio"
              value={1}
              id="yes"
              onChange={handleInputChange}
              required={true}
            />
            Yes
          </label>
          <label htmlFor="no">
            <input
              name="recommended"
              type="radio"
              value={0}
              id="no"
              onChange={handleInputChange}
              required={true}
            />
            No
          </label>
        </div>
      </div>
      <div className="form-section">
        <div className="form-section-header">Characteristics *</div>
        <div className="radio-options">
          {traits.map((trait) => (
            <Characteristic
              trait={trait}
              postID={postID}
              key={trait[0]}
              onChange={handleRadioChange}
            />
          ))}
        </div>
      </div>
      <FormInput
        labelText="Review summary"
        type="text"
        name="summary"
        value={formInput.summary}
        placeholder="Example: Best purchase ever!"
        onChange={handleInputChange}
      />
      <FormTextarea
        labelText="Review body *"
        name="body"
        value={formInput.body}
        minLength="50"
        placeholder="Why did you like the product or not?"
        required={true}
        disclaimerText={50 - formInput.body.length > 0
          ? `Minimum characters left: ${50 - formInput.body.length}`
          : 'Minimum reached'}
        onChange={handleInputChange}
      />

      <div className="form-section">
        <div className="form-section-header">Upload your photos</div>
      </div>

      <FormInput
        labelText="What is your nickname *"
        type="text"
        name="name"
        value={formInput.name}
        placeholder="Example: jackson11!"
        required={true}
        disclaimerText="For privacy reasons, do not use your full name or email address"
        onChange={handleInputChange}
      />
      <FormInput
        labelText="Your email *"
        type="email"
        name="email"
        value={formInput.email}
        placeholder="Example: jackson11@email.com!"
        disclaimerText="For authentication reasons, you will not be emailed"
        onChange={handleInputChange}
      />
      <div className="required-field">* indicates required field</div>
      <InputSubmit
        type="submit"
        value="Submit review"
      />
    </Form>
  );
};

export default AddReview;
