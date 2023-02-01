import React, { useState } from 'react';
import SearchQuestions from './SearchQuestions';
import LoadAddQA from './LoadAddQA';
import DisplayPhotos from './DisplayPhotos';
import QAList from './QAList';
import qaData from './exampleDataQA';
import { Container } from './styles/Containers.styled';

const QAModule = function CreateQAModuleComponent() {
  const [questions, setQuestions] = useState(qaData.results);
  const [answers, setAnswers] = useState(qaData.results[0].answers);
  const [query, setQuery] = useState('');


  // const queryAnswer = function() {
  //   const keys = Object.keys(answers);
  //   const queried = [];
  //   for (let i = 0; i < keys.length; i++) {
  //     if (answers[keys[i]].body.includes(query)) {
  //       queried.push(answers[keys[i]]);
  //     }
  //   }
  //   setFiltered(queried);
  // };

  // const qKeys = Object.keys(questions);

  // console.log('qKeys', qKeys);
  // const queryFiltered = qKeys.filter((key) => {return questions[key].body.includes(query)});

  const answerKeys = Object.keys(answers);

  const queryFiltered = answerKeys.filter((key) => {return answers[key].body.includes(query)});


  return (
    <Container>
      <h3>Questions and Answers</h3>
      <SearchQuestions
        answers={queryFiltered}
        setAnswers={setAnswers}
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
