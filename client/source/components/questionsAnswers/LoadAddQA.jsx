import React, { useContext } from 'react';
import { LoadContainer } from './styles/Containers.styled';
import ProdContext from '../../ProdContext.js';
import QuestionForm from './QuestionForm';
import Modal from '../shared/Modal';
import useModal from '../../useModal';

const LoadAddQA = function CreateLoadAddQAComponent({
  questionCount, setQuestionCount, postQuestion
}) {
  const { isOpen, onOpen, onClose } = useModal();
  const { product } = useContext(ProdContext);

  const handlePost = (input) => {
    const keys = Object.keys(input);
    for (let i = 0; i < keys.length; i += 1) {
      if (input[keys[i]] === '') {
        alert(`You must enter the following: ${keys[i]}`);
      }
    }
    postQuestion(input);
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
        <h3>Ask Your Question</h3>
        <h4>{`About the ${product}`}</h4>
        <QuestionForm handlePost={handlePost} />
      </Modal>
      <button onClick={onOpen} type="button">Add a Question</button>
    </LoadContainer>
  );
};


export default LoadAddQA;
