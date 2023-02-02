import React, { useState } from 'react';

import { InputContainer } from './styles/Containers.styled';

const SearchQuestions = function CreateSearchQuestions({ questions, handleSearch }) {
  const [input, setInput] = useState('');

  console.log('questions: ', questions);

  return (
    <InputContainer>
      <input
        type="text"
        placeholder="Have a Question? Search For Answers"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        type="button"
        onClick={() => {
          handleSearch(input);
        }}
      >Go!
      </button>
    </InputContainer>
  );
};

export default SearchQuestions;
