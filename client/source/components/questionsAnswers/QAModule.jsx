import React, { useState, useContext } from 'react';
import InputQuestion from './InputQuestion';
import LoadAddQA from './LoadAddQA';
import DisplayPhotos from './DisplayPhotos';
import { Container, InputContainer } from './styles/Containers.styled';

// MAIN
const QAModule = function CreateQAModuleComponent() {
  // const [questInput, setQuestInput] = useState('');
  // const {prodID, setProdID} = useContext(ProdContext);

  return (
    <Container>
      <h3>Questions and Answers</h3>
      <InputQuestion />
      <h3>Photos</h3>
      <DisplayPhotos />
      <h3>Load More Answers</h3>
      <LoadAddQA />
    </Container>
  );
};


export default QAModule;
