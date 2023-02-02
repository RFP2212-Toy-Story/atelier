import React from 'react';
import AnswerItem from './AnswerItem';

const AnswerList = function CreateAnswerListComponent({ answers }) {

  const keys = Object.keys(answers);
  // console.log('answer keys: ', keys);

  return (
    <div>
      {keys.map((key) => (
        <ul key={answers[key].id}>
          <AnswerItem id={answers[key].id} answer={answers[key].body} />
        </ul>
      ))}
    </div>
  );
};

export default AnswerList;
