import React from 'react';
import InputQuestion from './InputQuestion';
import LoadAddQA from './LoadAddQA';
import DisplayPhotos from './DisplayPhotos';
import Modal from '../../Modal';
import useModal from '../../useModal';
import { Container } from './styles/Containers.styled';

const QAModule = function CreateQAModuleComponent() {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <Container>
      <h3>Questions and Answers</h3>
      <InputQuestion />
      <h3>Photos</h3>
      <DisplayPhotos />
      <h3>Load More Answers</h3>
      <LoadAddQA />
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>Hello from QAModule</div>
        <DisplayPhotos />
      </Modal>
      <button onClick={onOpen} type="button">Open Modal</button>
    </Container>
  );
};


export default QAModule;
