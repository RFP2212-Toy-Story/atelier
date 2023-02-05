import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import FormInput from '../shared/FormInput';
import FormTextarea from '../shared/FormTextarea';

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
        labelText="Your Answer "
        name="answer"
        value={formInput.answer}
        placeholder="Your Answer"
        onChange={handleFormInputChange}
      />
      <FormInput
        labelText="What is your nickname? "
        type="text"
        name="name"
        value={formInput.name}
        placeholder="Example: jack543!"
        onChange={handleFormInputChange}
        disclaimerText="For privacy reasons, do not use your full name or email address"
      />
      <FormInput
        labelText="What is your email? "
        type="email"
        name="email"
        value={formInput.email}
        placeholder="Example: jack@email.com"
        onChange={handleFormInputChange}
        disclaimerText="For authentication reasons, you will not be emailed"
      />
      <span>Upload Your Photos</span>
      <input
        type="submit"
        value="Submit question"
      />
    </Form>
  );
};

const Form = styled.form`
  font-family: 'Nunito', sans-serif;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
  row-gap: 10px;
  input {
    font-family: 'Nunito', sans-serif;
    border-radius: 5px;
  }
`;

export default AnswerForm;
