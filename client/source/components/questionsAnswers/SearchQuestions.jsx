import React, { useState } from 'react';
import styled from 'styled-components';

const SearchQuestions = function CreateSearchQuestions({ handleSearch }) {
  const [input, setInput] = useState('');

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Have a Question? Search For Answers"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Button
        type="button"
        onClick={() => {
          handleSearch(input);
        }}
      >Go!
      </Button>
    </InputContainer>
  );
};

const Input = styled.input`
  font-family: inherit;
  padding: 0.75em;
  color: inherit;
  width: 50%;
  display: block;
  margin-right: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-family: inherit;
  background-color: #EEF1F7;
  border: 1px solid #3D405B;
`;

export default SearchQuestions;
