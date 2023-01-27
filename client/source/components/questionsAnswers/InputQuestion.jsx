import React, { useContext } from 'react';
import { ProdContext } from '../../ProdContext.js';



const InputQuestion = () => {
  const {prodID, setProdID} = useContext(ProdContext);


  return (
    <div>Product ID from InputQuestion: {prodID}
      <input
        type="text"
        placeholder="Have a Question? Search For Answers"
        // onChange={(e) => setQuestInput(e.target.value)}
        // value={questInput}
    >
      </input>
      <button onClick={() => setProdID('new product ID')}>Change ID</button>
    </div>
  );
}


export default InputQuestion;
