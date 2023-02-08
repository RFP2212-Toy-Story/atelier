import React from 'react';
import styled from 'styled-components';

const SearchQuestions = function CreateSearchQuestions({ handleQ, query }) {
  return (
    <InputContainer data-testid="parent">
      <Input
        type="text"
        placeholder="Have a Question? Search For Answers"
        onChange={handleQ}
        value={query}
        data-testid="child"
      />
    </InputContainer>
  );
};

const Input = styled.input`
  font-family: inherit;
  border: 1px solid #3D405B;
  border-radius: 0.5em;
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

export default SearchQuestions;
