import React from 'react';
import UnorderedList from './styles/UnorderedList';
import QAItem from './QAItem';

const QAList = function CreateQAListComponent({ questions, getQuestions }) {
  return (
    <div>
      {questions.map((question) => (
        <UnorderedList key={question.question_id}>
          <QAItem id={question.question_id} question={question} getQuestions={getQuestions} />
        </UnorderedList>
      ))}
    </div>
  );
};

export default QAList;
