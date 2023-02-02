import React from 'react';
import { format, parseISO } from 'date-fns';

const AnswerItem = function CreateAnswerItemComponent({
  id, answer, username, date
}) {
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, 'PPP');
  return (
    <>
      <h3>A:</h3>
      <p>{answer}</p>
      <span>{`By ${username}, ${formattedDate}`}</span>
    </>
  );
};

export default AnswerItem;
