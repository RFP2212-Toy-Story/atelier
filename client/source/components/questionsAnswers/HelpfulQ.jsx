import React, { useCallback, useContext } from 'react';
import { ButtonContainer } from './styles/Containers.styled';
import * as requests from '../../utilities/axiosRequests.js';
import ProdContext from '../../ProdContext.js';
import AnswerForm from './AnswerForm';
import Modal from '../shared/Modal';
import useModal from '../../useModal';
import ModalFormTitle from '../shared/form/ModalFormTitle';

const HelpfulQ = function CreateHelpfulQComponent({
  questionHelpfulness, id, getQuestions, questionBody
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

  const postAnswer = (data) => {
    const obj = {
      body: data.answer, name: data.name, email: data.email, photos: data.photos
    };
    return requests
      .post(`/qa/questions/${id}/answers`, obj);
  };

  const handlePost = (event, input) => {
    let valid = true;
    const keys = Object.keys(input);
    for (let i = 0; i < keys.length; i += 1) {
      if (input[keys[i]] === '') {
        valid = false;
        alert(`You must enter the following: ${keys[i]}`);
        break;
      }
    }
    if (valid === true) {
      postAnswer(input)
        .then((results) => {
          console.info(results.status);
          onClose(event);
        })
        .catch((err) => console.error('postAnswer error: ', err));
    }
  };

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
          <ModalFormTitle
            title="Submit Your Answer"
            subtitle={`${product?.name || 'unknown product'}: ${questionBody}`}
          />
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
