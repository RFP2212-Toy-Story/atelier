import React from 'react';
import { LoadContainer } from './styles/Containers.styled';

const LoadAddQA = function CreateLoadAddQAComponent({
  questionCount, setQuestionCount
}) {
  return (
    <LoadContainer>
      <button
        type="button"
        data-testid="More answered"
        onClick={() => {
          setQuestionCount(questionCount + 2);
        }}
      >More Answered Questions
      </button>
      <button type="button">Add a Question</button>
    </LoadContainer>
  );
};


export default LoadAddQA;
