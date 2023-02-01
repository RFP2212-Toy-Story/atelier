import React from 'react';
import InputQuestion from './InputQuestion';
import LoadAddQA from './LoadAddQA';
import DisplayPhotos from './DisplayPhotos';
import ModalExample from '../../ModalExample';
import { Container } from './styles/Containers.styled';

const QAModule = function CreateQAModuleComponent() {
  return (
    <Container>
      <h3>Questions and Answers</h3>
      <InputQuestion />
      <h3>Photos</h3>
      <DisplayPhotos />
      <h3>Load More Answers</h3>
      <LoadAddQA />
      <ModalExample />
    </Container>
  );
};


export default QAModule;
