import React, { useCallback, useState } from 'react';
import FormInput from './FormInput';

const initialFormInput = {
  question: '',
  name: '',
  email: ''
};

const Form = function CreateFormComponent() {
  const [formInput, setFormInput] = useState(initialFormInput);

  const handleFormInputChange = useCallback((event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  }, [formInput]);

  return (
    <form>
      <label htmlFor="question">What is your question?
        <textarea
          id="question"
          name="question"
          value={formInput.question}
          maxLength="1000"
          placeholder="Why did you like the product or not?"
          onChange={handleFormInputChange}
        />
      </label>
      <FormInput
        labelText="What is your nickname?"
        disclaimerText="For privacy reasons, do not use your full name or email address"
        type="text"
        name="name"
        value={formInput.name}
        placeholder="Example: jackson11!"
        onChange={handleFormInputChange}
      />
      <label htmlFor="email">What is your email?
        <input
          type="email"
          name="email"
          id="email"
          value={formInput.email}
          maxLength="60"
          placeholder="Example: jack@email.com"
          onChange={handleFormInputChange}
        />
      </label>
      <p>For authentication reasons, you will not be emailed</p>
      <input type="submit" value="Submit question" />
    </form>
  );
};

export default Form;
