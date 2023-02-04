import React from 'react';
import { LoadContainer } from './styles/Containers.styled';
import Form from './form/Form';
import Modal from '../shared/Modal';
import useModal from '../../useModal';

const LoadAddQA = function CreateLoadAddQAComponent({
  questionCount, setQuestionCount, postQuestion
}) {
  const { isOpen, onOpen, onClose } = useModal();

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
        <h3>Add a Question</h3>
        <Form postQuestion={postQuestion} />
      </Modal>
      <button onClick={onOpen} type="button">Add a Question</button>
    </LoadContainer>
  );
};


export default LoadAddQA;
