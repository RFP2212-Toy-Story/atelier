import React, { useState, useContext } from 'react';
import UnorderedList from './styles/UnorderedList';
import QAItem from './QAItem';
import LoadAddQA from './LoadAddQA';
import * as requests from '../../utilities/axiosRequests.js';
import ProdContext from '../../ProdContext.js';

const QAList = function CreateQAListComponent({ questions, getQuestions }) {
  const [questionCount, setQuestionCount] = useState(2);
  const currentQuestions = questions.slice(0, questionCount);
  const { prodID } = useContext(ProdContext);

  const postQuestion = (data) => {
    const obj = {
      body: data.question, name: data.name, email: data.email, product_id: prodID
    };
    requests
      .post('/qa/questions', obj)
      .then((results) => {
        console.info(results.status);
        // getQuestions(); // ??
      })
      .catch((err) => console.error('postQuestion error: ', err));
  };

  return (
    <div>
      {currentQuestions.map((question) => (
        <UnorderedList key={question.question_id}>
          <QAItem id={question.question_id} question={question} getQuestions={getQuestions} />
        </UnorderedList>
      ))}
      <h3>Load More Answers</h3>
      <LoadAddQA
        questionCount={questionCount}
        setQuestionCount={setQuestionCount}
        postQuestion={postQuestion}
      />
    </div>
  );
};

export default QAList;
