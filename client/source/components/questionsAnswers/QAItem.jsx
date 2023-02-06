import React from 'react';
import styled from 'styled-components';
import AnswerList from './AnswerList';
import HelpfulQ from './HelpfulQ';

const QAItem = function CreateQAItemComponent({ id, question, getQuestions }) {
  const {
    question_body: questionBody,
    answers,
    question_helpfulness: questionHelpfulness
  } = question;

  return (
    <ListItem>
      <QuestionRow>
        <Question>
          <H3>Q:</H3>
          <QuestionText>{questionBody}</QuestionText>
        </Question>
        <HelpfulQ
          questionHelpfulness={questionHelpfulness}
          id={id}
          getQuestions={getQuestions}
          questionBody={questionBody}
        />
      </QuestionRow>
      <AnswerList
        answers={answers}
        getQuestions={getQuestions}
      />
    </ListItem>
  );
};

const Question = styled.div`
  display: flex;
  gap: 12px;
  align-items: baseline;
`;

const H3 = styled.h3`
  color: black;
  margin: 0;
`;

const QuestionText = styled.p`
  margin: 0;
`;

const ListItem = styled.li`
  list-style: none;
  border: 1px solid black;
  border-radius: 0.5em;
  padding: 12px;
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default QAItem;
