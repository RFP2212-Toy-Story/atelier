import React from 'react';
import * as requests from '../../utilities/axiosRequests.js';

const HelpfulQ = function CreateHelpfulQComponent({ questionHelpfulness, id, getQuestions }) {
  const handleHelpfulQ = function handleHelpfulQ(event) {
    event.target.setAttribute('disabled', true);
    requests
      .put(`/qa/questions/${id}/helpful`)
      .then((results) => {
        console.info(results.status);
        getQuestions();
      })
      .catch((err) => console.error('handleHelpfulQ error: ', err));
  };

  return (
    <div>
      <span>Helpful? </span>
      <span>
        <button
          type="button"
          onClick={handleHelpfulQ}
        >Yes {`(${questionHelpfulness})`}
        </button>
        <span>  |  </span>
        {/* <button
          type="button"
          onClick={handleAnswer}
        >Add Answer
        </button> */}
      </span>
    </div>
  );
};

export default HelpfulQ;
