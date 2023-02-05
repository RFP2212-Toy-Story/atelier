import React from 'react';
import styled from 'styled-components';
import * as requests from '../../utilities/axiosRequests.js';
import AnswerList from './AnswerList';
import HelpfulQ from './HelpfulQ';

const QAItem = function CreateQAItemComponent({ id, question, getQuestions }) {
  const {
    question_body: questionBody,
    answers,
    question_helpfulness: questionHelpfulness
  } = question;

  const postAnswer = (data) => {
    const obj = {
      body: data.answer, name: data.name, email: data.email, photos: data.photos
    };
    requests
      .post(`/qa/questions/${id}/answers`, obj)
      .then((results) => {
        console.info(results.status);
      })
      .catch((err) => console.error('postAnswer error: ', err));
  };

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
          postAnswer={postAnswer}
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
  border-radius: 20px;
  padding: 12px;
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default QAItem;
