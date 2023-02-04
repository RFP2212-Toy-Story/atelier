/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ProdContext from '../../ProdContext.js';
import SearchQuestions from './SearchQuestions';
import Form from './form/Form';
import QAList from './QAList';
import Modal from '../shared/Modal';
import useModal from '../../useModal';
import * as requests from '../../utilities/axiosRequests.js';
import qaData from './exampleDataQA';
import { Container } from './styles/Containers.styled';

const QAModule = function CreateQAModuleComponent() {
  const { isOpen, onOpen, onClose } = useModal();
  const { prodID } = useContext(ProdContext);
  const [questions, setQuestions] = useState(qaData.results);
  const [query, setQuery] = useState('');

  const getQuestions = () => {
    requests
      .get(`/qa/questions?product_id=${prodID}`)
      .then((results) => {
        setQuestions(results.data.results);
      })
      .catch((err) => console.error('getQuestions error: ', err));
  };

  useEffect(() => {
    getQuestions();
  }, [prodID]);

  const filteredQuestions = questions.filter(
    (question) => question.question_body.toLowerCase().includes(query.toLowerCase())
  );

  const handleQ = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Container>
      <Title>Questions and Answers</Title>
      <SearchQuestions
        handleQ={handleQ}
        query={query}
      />
      {query.length > 2 && (<QAList questions={filteredQuestions} getQuestions={getQuestions} />)}
      {query.length < 3 && (<QAList questions={questions} getQuestions={getQuestions} />)}
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>Hello from QAModule</div>
        <Form />
      </Modal>
      <button onClick={onOpen} type="button">Open Modal</button>
    </Container>
  );
};

const Title = styled.h3`
  text-align: center;
`;

export default QAModule;
