import React, { useState } from 'react';
import styled from 'styled-components';
import AnswerItem from './AnswerItem';
// import UnorderedList from './styles/UnorderedList';
import { MoreButtonContainer } from './styles/Containers.styled';

const AnswerList = function CreateAnswerListComponent({ answers, getQuestions }) {
  const [count, setCount] = useState(2);
  const answerKeys = Object.keys(answers);
  const currentAnswerKeys = answerKeys.slice(0, count);

  return (
    <div>
      {currentAnswerKeys.map((key) => (
        <UnorderedList key={answers[key].id}>
          <AnswerItem
            id={answers[key].id}
            answer={answers[key].body}
            username={answers[key].answerer_name}
            date={answers[key].date}
            helpfulness={answers[key].helpfulness}
            photos={answers[key].photos}
            getQuestions={getQuestions}
          />
        </UnorderedList>
      ))}
      <MoreButtonContainer>
        {count < answerKeys.length ? (<button type="button" onClick={() => setCount(count + 2)}>See more answers</button>) : (<button type="button" onClick={() => setCount(2)}>Collapse answers</button>)}
      </MoreButtonContainer>
    </div>
  );
};

const UnorderedList = styled.ul`
  padding-left: 0;
`;

export default AnswerList;
