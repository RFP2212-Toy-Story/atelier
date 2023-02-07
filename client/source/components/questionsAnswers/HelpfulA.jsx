import React, { useState } from 'react';
import * as requests from '../../utilities/axiosRequests.js';
import { ButtonContainer } from './styles/Containers.styled';

const HelpfulA = function CreateHelpfulAComponent({ id, getQuestions, helpfulness }) {
  const [isReported, setIsReported] = useState(false);

  const handleHelpfulA = function handleHelpfulA(event) {
    event.target.setAttribute('disabled', true);
    requests
      .put(`/qa/answers/${id}/helpful`)
      .then((results) => {
        console.info(results.status);
        getQuestions();
      })
      .catch((err) => console.error('handleHelpfulA error: ', err));
  };

  const handleReportedA = function handleReportedA(event) {
    setIsReported(true);
    event.target.setAttribute('disabled', true);
    requests
      .put(`/qa/answers/${id}/report`)
      .then((results) => {
        console.info(results.status);
      })
      .catch((err) => {
        console.error('handleReportedA error: ', err);
        setIsReported(false);
      });
  };

  return (
    <ButtonContainer>
      <span>Helpful? </span>
      <span>
        <button
          type="button"
          data-testid="helpful"
          onClick={handleHelpfulA}
        >Yes {`(${helpfulness})`}
        </button>
        <span>  |  </span>
        <button
          type="button"
          onClick={handleReportedA}
        >{isReported ? 'Reported' : 'Report'}
        </button>
      </span>
    </ButtonContainer>
  );
};

export default HelpfulA;
