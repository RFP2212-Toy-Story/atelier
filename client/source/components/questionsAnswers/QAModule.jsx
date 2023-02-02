import React, { useState, useEffect } from 'react';
import SearchQuestions from './SearchQuestions';
import LoadAddQA from './LoadAddQA';
import DisplayPhotos from './DisplayPhotos';
import QAList from './QAList';
import * as requests from '../../utilities/axiosRequests.js';
import qaData from './exampleDataQA';
import { Container } from './styles/Containers.styled';

const QAModule = function CreateQAModuleComponent() {
  const [questions, setQuestions] = useState(qaData.results);
  // const [questionCount, setQuestionCount] = useState(qaData.results.length);
  const [query, setQuery] = useState('');

  // for test only, to be deleted
  const prodID = '40444';

  const getQuestions = () => {
    requests
      .get(`/qa/questions?product_id=${prodID}&count=4`)
      .then((results) => {
        setQuestions(results.data.results);
        // setQuestionCount(results.data.results.length);
      })
      .catch((err) => console.error('Error with reviews request: ', err));
  };

  useEffect(() => getQuestions(), []);

  const filteredQuestions = questions.filter(
    (question) => question.question_body.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      <h3>Questions and Answers</h3>
      <SearchQuestions
        handleSearch={setQuery}
        query={query}
      />
      <h3>Questions</h3>
      <QAList questions={filteredQuestions} />
      <h3>Photos</h3>
      <DisplayPhotos />
      <h3>Load More Answers</h3>
      <LoadAddQA />
    </Container>
  );
};


export default QAModule;
