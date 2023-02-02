import React from 'react';

const AnswerItem = function CreateAnswerItemComponent({ id, answer }) {
  return (
    <>
      <h3>A:</h3>
      <p>{answer}</p>
    </>
  );
};

export default AnswerItem;
