import React from 'react';
import { LoadContainer } from './styles/Containers.styled';

const LoadAddQA = function CreateLoadAddQAComponent() {
  return (
    <LoadContainer>
      <button type="button" data-testid="More answered" onClick={() => {}}>More Answered Questions</button>
      <button type="button" onClick={() => {}}>Add a Question</button>
    </LoadContainer>
  );
};


export default LoadAddQA;
