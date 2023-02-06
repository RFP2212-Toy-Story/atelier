import React, { useCallback, useState } from 'react';
import { Form, InputSubmit } from '../shared/form/FormStyles';
import FormInput from '../shared/form/FormInput';
import FormTextarea from '../shared/form/FormTextarea';

const initialFormInput = {
  question: '',
  name: '',
  email: ''
};

const QuestionForm = function CreateQuestionFormComponent({ handlePost }) {
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
      handlePost(e, formInput);
      clearForm();
    }}
    >
      <FormTextarea
        labelText="What is your question? *"
        name="question"
        value={formInput.question}
        placeholder="Why did you like the product or not?"
        onChange={handleFormInputChange}
      />
      <FormInput
        labelText="What is your nickname? *"
        type="text"
        name="name"
        value={formInput.name}
        placeholder="Example: jackson11!"
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
      <InputSubmit
        type="submit"
        value="Submit question"
      />
    </Form>
  );
};

export default QuestionForm;
