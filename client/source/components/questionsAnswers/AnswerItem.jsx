import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import HelpfulA from './HelpfulA';
import AnswerPhoto from './AnswerPhoto';

const AnswerItem = function CreateAnswerItemComponent({
  id, answer, username, date, getQuestions, helpfulness, photos
}) {
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, 'PPP');

  return (
    <>
      <Answer>
        <H4>A:</H4>
        <P>{answer}</P>
      </Answer>
      <APhotos>
        {photos.length ? (
          photos.map((photo) => (<AnswerPhoto key={photo.slice(34, 40)} photo={photo} />))) : null}
      </APhotos>
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
  padding-left: 25px;
  padding-top: 5px;
`;

const Answer = styled.div`
  display: flex;
  gap: 12px;
  align-items: baseline;
  font-size: 95%;
  padding-left: 25px;
  padding-top: 5px;
  margin-bottom: 0;
`;

const H4 = styled.h4`
  padding: 0;
  margin-bottom: 0;
`;

const P = styled.p`
  padding: 0;
  margin-bottom: 0;
`;

const APhotos = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 25px;

  img {
    max-width: 100%;
    border-radius: 15px;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    padding-top: 0.5em;
    padding-right: 0.5em;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export default AnswerItem;
