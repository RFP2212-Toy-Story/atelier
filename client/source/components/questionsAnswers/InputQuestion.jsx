import React, { useContext } from 'react';
import ProdContext from '../../ProdContext';


const InputQuestion = function CreateInputQuestionComponent() {
  const { prodID, setProdID } = useContext(ProdContext);

  return (
    <div>
      Product ID from InputQuestion: {prodID}
      <input
        type="text"
        placeholder="Have a Question? Search For Answers"
      // onChange={(e) => setQuestInput(e.target.value)}
      // value={questInput}
      />
      <button type="button" onClick={() => setProdID('new product ID')}>Change ID</button>
    </div>
  );
};


export default InputQuestion;
