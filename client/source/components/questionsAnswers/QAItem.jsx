import React from 'react';
import AnswerList from './AnswerList';
import HelpfulQ from './HelpfulQ';

const QAItem = function CreateQAItemComponent({ id, question, getQuestions }) {
  const {
    question_body: questionBody,
    answers,
    question_helpfulness: questionHelpfulness
  } = question;

  return (
    <>
      <h3>Q:</h3>
      <div>{questionBody}</div>
      <HelpfulQ questionHelpfulness={questionHelpfulness} id={id} getQuestions={getQuestions} />
      <AnswerList answers={answers} getQuestions={getQuestions} />
    </>
  );
};

export default QAItem;
