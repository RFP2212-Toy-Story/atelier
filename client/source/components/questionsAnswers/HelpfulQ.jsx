import React, { useCallback, useContext } from 'react';
import { ButtonContainer } from './styles/Containers.styled';
import * as requests from '../../utilities/axiosRequests.js';
import ProdContext from '../../ProdContext.js';
import AnswerForm from './AnswerForm';
import Modal from '../shared/Modal';
import useModal from '../../useModal';

const HelpfulQ = function CreateHelpfulQComponent({
  questionHelpfulness, id, getQuestions, questionBody, postAnswer
}) {
  const { isOpen, onOpen, onClose } = useModal();
  const { product } = useContext(ProdContext);

  const handleHelpfulQ = useCallback((event) => {
    event.target.setAttribute('disabled', true);
    requests
      .put(`/qa/questions/${id}/helpful`)
      .then((results) => {
        console.info(results.status);
        getQuestions();
      })
      .catch((err) => console.error('handleHelpfulQ error: ', err));
  }, [id]);

  const handlePost = (input) => {
    const keys = Object.keys(input);
    for (let i = 0; i < keys.length; i += 1) {
      if (input[keys[i]] === '') {
        alert(`You must enter the following: ${keys[i]}`);
      }
    }
    postAnswer(input);
  };

  // console.log('product: ', product);

  return (
    <ButtonContainer>
      <span>Helpful? </span>
      <span>
        <button
          type="button"
          onClick={handleHelpfulQ}
        >Yes {`(${questionHelpfulness})`}
        </button>
        <span>  |  </span>
        <Modal isOpen={isOpen} onClose={onClose}>
          <h3>Submit Your Answer</h3>
          <h4>{`${product?.name || 'unknown product'}: ${questionBody}`}</h4>
          <AnswerForm handlePost={handlePost} />
        </Modal>
        <button
          onClick={onOpen}
          type="button"
        >Add Answer
        </button>
      </span>
    </ButtonContainer>
  );
};

export default HelpfulQ;
