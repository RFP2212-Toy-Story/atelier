import React, { useContext } from 'react';
// import ProdContext from '../../ProdContext';
import { InputContainer } from './styles/Containers.styled';

const InputQuestion = function CreateInputQuestionComponent() {
  // const { prodID, setProdID } = useContext(ProdContext);

  return (
    <InputContainer>
      {/* Product ID from InputQuestion: {prodID} */}
      <input
        type="text"
        placeholder="Have a Question? Search For Answers"
      // onChange={(e) => setQuestInput(e.target.value)}
      // value={questInput}
      />
      <button type="button" onClick={() => setProdID('new product ID')}>Go!</button>
    </InputContainer>
  );
};


export default InputQuestion;
