/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ProdContext from '../../ProdContext.js';
import SearchQuestions from './SearchQuestions';
import DisplayPhotos from './DisplayPhotos';
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
      <h3>Photos</h3>
      <DisplayPhotos />
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>Hello from QAModule</div>
        <DisplayPhotos />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget pulvinar quam, non porta ipsum. Morbi posuere quam ipsum, et ultrices massa facilisis sagittis. Donec feugiat ultricies dictum. Ut porttitor sem id dui tincidunt, non tempor ligula consectetur. Nullam ut augue eget purus maximus vulputate. Quisque malesuada interdum consectetur. Proin luctus pellentesque sapien, in ultrices quam viverra vel.

          Integer fringilla ipsum mauris, nec tincidunt lectus blandit a. Aliquam molestie malesuada eros ut mattis. Cras tristique tristique tristique. Nunc mollis aliquet tortor ut varius. Morbi blandit, felis sed viverra vehicula, arcu arcu finibus erat, vel convallis odio leo at turpis. Suspendisse vestibulum pellentesque nulla, a sagittis libero tempus ac. Duis dignissim porta augue, sed tristique enim pellentesque ac.

          Aliquam placerat commodo nisi a efficitur. Nunc fringilla sed elit eu placerat. Quisque feugiat sem in enim dictum sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate luctus libero sed cursus. Morbi imperdiet eu nibh id sodales. Donec scelerisque vel orci eget mattis. Etiam varius nisl eget aliquam ornare. Etiam pellentesque bibendum ipsum sit amet interdum. Aenean facilisis neque velit, vulputate commodo velit ultricies a. Mauris dictum, neque id imperdiet pellentesque, lorem orci sollicitudin nunc, a viverra turpis sem id nisl. Curabitur elementum gravida laoreet. Maecenas placerat nunc ac posuere sodales.
        </p>
      </Modal>
      <button onClick={onOpen} type="button">Open Modal</button>
    </Container>
  );
};

const Title = styled.h3`
  text-align: center;
`;

export default QAModule;
