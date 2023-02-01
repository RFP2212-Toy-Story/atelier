import React from 'react';
import SearchAnswers from './SearchAnswers';
import LoadAddQA from './LoadAddQA';
import DisplayPhotos from './DisplayPhotos';
import { Container } from './styles/Containers.styled';

const QAModule = function CreateQAModuleComponent() {
  return (
    <Container>
      <h3>Questions and Answers</h3>
      <SearchAnswers />
      <h3>Photos</h3>
      <DisplayPhotos />
      <h3>Load More Answers</h3>
      <LoadAddQA />
    </Container>
  );
};


export default QAModule;
