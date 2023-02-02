import React, { useState } from 'react';
import SearchQuestions from './SearchQuestions';
import LoadAddQA from './LoadAddQA';
import DisplayPhotos from './DisplayPhotos';
import QAList from './QAList';
import qaData from './exampleDataQA';
import { Container } from './styles/Containers.styled';

const QAModule = function CreateQAModuleComponent() {
  const [questions, setQuestions] = useState(qaData.results);
  const [query, setQuery] = useState('');

  const queryFiltered = questions.filter(
    (question) => {return question.question_body.toLowerCase().includes(query.toLowerCase())});

  return (
    <Container>
      <h3>Questions and Answers</h3>
      <SearchQuestions
        questions={queryFiltered}
        handleSearch={setQuery}
        query={query}
      />
      <h3>Questions</h3>
      <QAList questions={questions} />
      <h3>Photos</h3>
      <DisplayPhotos />
      <h3>Load More Answers</h3>
      <LoadAddQA />
    </Container>
  );
};


export default QAModule;
