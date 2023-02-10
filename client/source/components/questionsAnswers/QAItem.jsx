import React, { useState } from 'react';
import styled from 'styled-components';
import { GoTriangleRight, GoTriangleDown } from 'react-icons/go';
import AnswerList from './AnswerList';
import HelpfulQ from './HelpfulQ';

const QAItem = function CreateQAItemComponent({ id, question, getQuestions }) {
  const {
    question_body: questionBody,
    answers,
    question_helpfulness: questionHelpfulness
  } = question;

  const [value, setValue] = useState(false);

  return (
    <ListItem>
      <QuestionRow>
        <Question>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            htmlFor={id}
            className="lbl-accordion"
          >
            {value === true ? (<SpanR><GoTriangleDown size="1.3em" style={{ verticalAlign: 'middle' }} /></SpanR>) : (<Span><GoTriangleRight size="1.3em" style={{ verticalAlign: 'middle' }} /></Span>)}
          </label>
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
      <input
        type="checkbox"
        name="accordion"
        value={value}
        id={id}
        onChange={(e) => {
          setValue(e.target.checked);
        }}
      />
      <AnswerWrapper>
        <AnswerList
          answers={answers}
          getQuestions={getQuestions}
        />
      </AnswerWrapper>
    </ListItem>
  );
};

const AnswerWrapper = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s;
  color: #3d405b;
`;

const Span = styled.span`
  color: black;
`;

const SpanR = styled.span`
  color: #e07a5f;
`;

const ListItem = styled.li`
  list-style: none;
  border: 1px solid black;
  border-radius: 0.5em;
  padding: 12px;
  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  input[type="checkbox"] {
    display: none;
    cursor: pointer;
  }
  input[type="checkbox"]:checked + ${AnswerWrapper} {
    max-height: 320px;
    overflow: scroll;
  }
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

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

export default QAItem;
