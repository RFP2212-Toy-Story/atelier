import React from 'react';
import QAItem from './QAItem';

const QAList = function CreateQAListComponent({ questions, getQuestions }) {
  return (
    <div>
      {questions.map((question) => (
        <ul key={question.question_id}>
          <QAItem id={question.question_id} question={question} getQuestions={getQuestions} />
        </ul>
      ))}
    </div>
  );
};

export default QAList;
