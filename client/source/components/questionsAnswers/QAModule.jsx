// LIBRARY IMPORTS
import React, { useState } from 'react';
import InputQuestion from './InputQuestion.jsx';


// MAIN
const QAModule = () => {

  const [questInput, setQuestInput] = useState('');

  return (
    <div>
      <h3>Questions and Answers</h3>
      <InputQuestion />
    </div>
  );
}


export default QAModule;