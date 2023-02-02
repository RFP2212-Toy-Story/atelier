import React from 'react';
import { InputContainer } from './styles/Containers.styled';

const SearchQuestions = function CreateSearchQuestionsComponent() {
  return (
    <InputContainer>
      <input
        type="text"
        placeholder="Have a Question? Search For Answers"
      />
      <button type="button" onClick={() => {}}>Go!</button>
    </InputContainer>
  );
};

export default SearchQuestions;
