import React, { useContext } from 'react';
import { LoadContainer } from './styles/Containers.styled';
import ProdContext from '../../ProdContext.js';
import QuestionForm from './QuestionForm';
import Modal from '../shared/Modal';
import useModal from '../../useModal';
import ModalFormTitle from './ModalFormTitle';
import * as requests from '../../utilities/axiosRequests.js';

const LoadAddQA = function CreateLoadAddQAComponent({
  questionCount, setQuestionCount
}) {
  const { isOpen, onOpen, onClose } = useModal();
  const { prodID, product } = useContext(ProdContext);

  const postQuestion = (data) => {
    const obj = {
      body: data.question, name: data.name, email: data.email, product_id: prodID
    };
    return requests
      .post('/qa/questions', obj);
  };

  const handlePost = (event, input) => {
    const keys = Object.keys(input);
    for (let i = 0; i < keys.length; i += 1) {
      if (input[keys[i]] === '') {
        alert(`You must enter the following: ${keys[i]}`);
      }
    }
    postQuestion(input)
      .then((results) => {
        console.info(results.status);
        onClose(event);
      })
      .catch((err) => console.error('postQuestion error: ', err));
  };

  return (
    <LoadContainer>
      <button
        type="button"
        data-testid="More answered"
        onClick={() => {
          setQuestionCount(questionCount + 2);
        }}
      >More Answered Questions
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalFormTitle
          title="Ask Your Question"
          subtitle={`About the ${product?.name || 'unknown product'}`}
        />
        <QuestionForm handlePost={handlePost} />
      </Modal>
      <button onClick={onOpen} type="button">Add a Question</button>
    </LoadContainer>
  );
};

export default LoadAddQA;
