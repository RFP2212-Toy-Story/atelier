import React, { useState } from 'react';

const initialFormInput = {
  question: '',
  name: '',
  email: ''
};

const Form = function CreateFormComponent() {
  const [formInput, setFormInput] = useState(initialFormInput);

  const handleFormInputChange = function createHandleFormInputChange(event) {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  };

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
      <label htmlFor="nickname">What is your nickname?
        <input
          type="text"
          name="name"
          id="nickname"
          value={formInput.name}
          maxLength="60"
          placeholder="Example: jackson11!"
          onChange={handleFormInputChange}
        />
      </label>
      <p>For privacy reasons, do not use your full name or email address</p>
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
