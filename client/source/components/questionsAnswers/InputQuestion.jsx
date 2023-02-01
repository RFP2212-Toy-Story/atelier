import React from 'react';
import { InputContainer } from './styles/Containers.styled';

const InputQuestion = function CreateInputQuestionComponent() {
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


export default InputQuestion;
