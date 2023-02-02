import React from 'react';
import QAItem from './QAItem';

const QAList = function CreateQAListComponent({ questions }) {
  return (
    // {questions.map((question) => <div>{question.question_body}</div>)}
    <div>
      {questions.map((question) => (
        <ul key={question.question_id}>
          <QAItem id={question.question_id} question={question} />
        </ul>
      ))}
    </div>
  );
};

export default QAList;
