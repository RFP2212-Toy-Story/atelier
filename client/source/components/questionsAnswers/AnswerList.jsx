import React from 'react';
import AnswerItem from './AnswerItem';

const AnswerList = function CreateAnswerListComponent({ answers, getQuestions }) {
  const keys = Object.keys(answers);

  return (
    <div>
      {keys.map((key) => (
        <ul key={answers[key].id}>
          <AnswerItem
            id={answers[key].id}
            answer={answers[key].body}
            username={answers[key].answerer_name}
            date={answers[key].date}
            helpfulness={answers[key].helpfulness}
            getQuestions={getQuestions}
          />
        </ul>
      ))}
    </div>
  );
};

export default AnswerList;
