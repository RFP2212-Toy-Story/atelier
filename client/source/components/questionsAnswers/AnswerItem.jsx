import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import HelpfulA from './HelpfulA';

const AnswerItem = function CreateAnswerItemComponent({
  id, answer, username, date, getQuestions, helpfulness
}) {
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, 'PPP');
  return (
    <>
      <Answer>
        <h4>A:</h4>
        <p>{answer}</p>
      </Answer>
      <UserInfoWrapper>
        <div>{`By ${username}, ${formattedDate}`}</div>
        <HelpfulA
          id={id}
          getQuestions={getQuestions}
          helpfulness={helpfulness}
        />
      </UserInfoWrapper>
    </>
  );
};

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 0.75em;
`;

const Answer = styled.div`
  display: flex;
  gap: 12px;
  align-items: baseline;
  font-size: 95%
`;

export default AnswerItem;
