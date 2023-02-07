import React, { useContext } from 'react';
import { LoadContainer } from './styles/Containers.styled';
import ProdContext from '../../ProdContext.js';
import QuestionForm from './QuestionForm';
import Modal from '../shared/Modal';
import useModal from '../../useModal';
import ModalFormTitle from '../shared/form/ModalFormTitle';
import ButtonMainStyle from '../shared/ButtonMainStyle';
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
    let validQ = true;
    const keys = Object.keys(input);
    for (let i = 0; i < keys.length; i += 1) {
      if (input[keys[i]] === '') {
        validQ = false;
        alert(`You must enter the following: ${keys[i]}`);
        break;
      }
    }
    if (validQ === true) {
      postQuestion(input)
        .then((results) => {
          console.info(results.status);
          onClose(event);
        })
        .catch((err) => console.error('postQuestion error: ', err));
    }
  };

  return (
    <LoadContainer>
      <ButtonMainStyle
        type="button"
        data-testid="More answered"
        onClick={() => {
          setQuestionCount(questionCount + 2);
        }}
      >More Answered Questions
      </ButtonMainStyle>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalFormTitle
          title="Ask Your Question"
          subtitle={`About the ${product?.name || 'unknown product'}`}
        />
        <QuestionForm handlePost={handlePost} />
      </Modal>
      <ButtonMainStyle onClick={onOpen} type="button">Add a Question</ButtonMainStyle>
    </LoadContainer>
  );
};

export default LoadAddQA;
