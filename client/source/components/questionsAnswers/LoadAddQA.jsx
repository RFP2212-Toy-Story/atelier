import React from 'react';
import { LoadContainer } from './styles/Containers.styled';

const LoadAddQA = function CreateLoadAddQAComponent({
  questionCount, setQuestionCount, getQuestions
}) {
  return (
    <LoadContainer>
      <button
        type="button"
        data-testid="More answered"
        onClick={() => {
          setQuestionCount(questionCount + 2);
          getQuestions();
        }}
      >More Answered Questions
      </button>
      <button type="button" onClick={() => {}}>Add a Question</button>
    </LoadContainer>
  );
};


export default LoadAddQA;
