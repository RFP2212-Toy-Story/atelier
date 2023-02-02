import React from 'react';
import AnswerList from './AnswerList';

const QAItem = function CreateQAItemComponent({ id, question }) {
  const { question_body: questionBody, answers, question_helpfulness } = question;
  return (
    <>
      <div>{questionBody}</div>
      <AnswerList answers={answers} />
    </>
  );
};

export default QAItem;
