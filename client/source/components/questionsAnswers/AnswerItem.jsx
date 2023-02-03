import React from 'react';
import { format, parseISO } from 'date-fns';
import HelpfulA from './HelpfulA';

const AnswerItem = function CreateAnswerItemComponent({
  id, answer, username, date, getQuestions, helpfulness
}) {
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, 'PPP');
  return (
    <>
      <h3>A:</h3>
      <p>{answer}</p>
      <span>{`By ${username}, ${formattedDate}`}</span>
      <HelpfulA
        id={id}
        getQuestions={getQuestions}
        helpfulness={helpfulness}
      />
    </>
  );
};

export default AnswerItem;
