import React, { useState } from 'react';

const QuestionForm = function CreateQuestionFormComponent() {
  const [question, setQuestion] = useState('');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // const { question, name, email } = questionData;

  return (
    <form>
      <textarea
        name="textarea"
        value={question}
        maxLength="1000"
        onChange={(e) => setQuestion(e.target.value)}
      >What is your question?
      </textarea>
      <label htmlFor="nickname">What is your nickname?
        <input
          type="text"
          id="nickname"
          value="name"
          // onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="email">What is your email?
        <input
          type="text"
          id="email"
          value="name"
          // onChange={(e) => setEmail(e.target.value)}
        />
      </label>
    </form>
  );
};

export default QuestionForm;
