import React, { useState } from 'react';
import UnorderedList from './styles/UnorderedList';
import QAItem from './QAItem';
import LoadAddQA from './LoadAddQA';

const QAList = function CreateQAListComponent({ questions, getQuestions }) {
  const [questionCount, setQuestionCount] = useState(2);
  const currentQuestions = questions.slice(0, questionCount);

  return (
    <div data-testid="ancestor1">
      {currentQuestions.map((question) => (
        <UnorderedList key={question.question_id}>
          <QAItem
            id={question.question_id}
            question={question}
            getQuestions={getQuestions}
          />
        </UnorderedList>
      ))}
      <LoadAddQA
        questionCount={questionCount}
        setQuestionCount={setQuestionCount}
      />
    </div>
  );
};

export default QAList;
