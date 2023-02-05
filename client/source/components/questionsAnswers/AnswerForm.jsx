import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Form, InputSubmit } from '../shared/form/FormStyles';
import FormInput from '../shared/form/FormInput';
import FormTextarea from '../shared/form/FormTextarea';

const initialFormInput = {
  answer: '',
  name: '',
  email: '',
  photos: []
};

const AnswerForm = function CreateAnswerFormComponent({ handlePost }) {
  const [formInput, setFormInput] = useState(initialFormInput);

  const clearForm = () => {
    setFormInput(initialFormInput);
  };

  const handleFormInputChange = useCallback((event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  }, [formInput]);

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      handlePost(formInput);
      clearForm();
    }}
    >
      <FormTextarea
        labelText="Your Answer *"
        name="answer"
        value={formInput.answer}
        placeholder="Your Answer"
        onChange={handleFormInputChange}
      />
      <FormInput
        labelText="What is your nickname? *"
        type="text"
        name="name"
        value={formInput.name}
        placeholder="Example: jack543!"
        onChange={handleFormInputChange}
        disclaimerText="For privacy reasons, do not use your full name or email address"
      />
      <FormInput
        labelText="What is your email? *"
        type="email"
        name="email"
        value={formInput.email}
        placeholder="Example: jack@email.com"
        onChange={handleFormInputChange}
        disclaimerText="For authentication reasons, you will not be emailed"
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="photos">Upload Your Photos
        <FileInput
          type="file"
          id="photos"
          accept="image/*"
        />
      </label>
      <InputSubmit
        type="submit"
        value="Submit answer"
      />
    </Form>
  );
};

const FileInput = styled.input`

`;

export default AnswerForm;
