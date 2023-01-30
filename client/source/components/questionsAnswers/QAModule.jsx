import React, { useState, useContext } from 'react';
import InputQuestion from './InputQuestion';
import { Container } from './styles/Container.styled';


// MAIN
const QAModule = function CreateQAModuleComponent() {
  // const [questInput, setQuestInput] = useState('');
  // const {prodID, setProdID} = useContext(ProdContext);

  return (
    <Container>
      <h3>Questions and Answers</h3>
      <InputQuestion />
    </Container>
  );
};


export default QAModule;
