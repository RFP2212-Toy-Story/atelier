import React from 'react';
import QAItem from './QAItem';

const QAList = function({ questions }) {
  return (
    <div>
      {/* {questions.map((question) => {
        return <ul><QAItem key={question.question_id} id={question.question_id} question={question}/></ul>
      })} */}
    </div>
  );
};

export default QAList;
