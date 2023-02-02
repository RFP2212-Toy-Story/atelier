import React from 'react';
import AnswerList from './AnswerList';

const QAItem = function CreateQAItemComponent({ id, question }) {
  const { question_body: questionBody, answers, question_helpfulness } = question;
  return (
    <>
      <h3>Q:</h3>
      <div>{questionBody}</div>
      <AnswerList answers={answers} />
    </>
  );
};

export default QAItem;
