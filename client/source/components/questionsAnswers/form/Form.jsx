import React, { useCallback, useState } from 'react';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

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
      <FormTextarea
        labelText="What is your question?"
        name="question"
        value={formInput.question}
        placeholder="Why did you like the product or not?"
        onChange={handleFormInputChange}
      />
      <FormInput
        labelText="What is your nickname?"
        type="text"
        name="name"
        value={formInput.name}
        placeholder="Example: jackson11!"
        onChange={handleFormInputChange}
        disclaimerText="For privacy reasons, do not use your full name or email address"
      />
      <FormInput
        labelText="What is your email?"
        type="email"
        name="email"
        value={formInput.email}
        placeholder="Example: jack@email.com"
        onChange={handleFormInputChange}
        disclaimerText="For authentication reasons, you will not be emailed"
      />
      <input type="submit" value="Submit question" />
    </form>
  );
};

export default Form;
