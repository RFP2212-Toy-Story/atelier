import React, { useState, useContext } from 'react';
import InputQuestion from './InputQuestion.jsx';
// import { ProdContext } from '../../ProdContext.js';


// MAIN
const QAModule = () => {

  // const [questInput, setQuestInput] = useState('');
  // const {prodID, setProdID} = useContext(ProdContext);

  return (
    <div>
      <h3>Questions and Answers</h3>
      <InputQuestion />
      {/* <div>Product ID from QAModule: {prodID}</div> */}
    </div>
  );
}


export default QAModule;
