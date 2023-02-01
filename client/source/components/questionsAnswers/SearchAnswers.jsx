import React, { useState } from 'react';
// import qaData from './exampleDataQA';
import { InputContainer } from './styles/Containers.styled';

const SearchAnswers = function CreateSearchAnswersComponent() {
  // const [answers, setAnswers] = useState(qaData.results[0].answers);
  const [input, setInput] = useState('');
  // const [query, setQuery] = useState('');
  // console.log(query);

  // const filtered = [...answers].filter(function(answer) {
  //   return answer.body.toLowerCase().includes(input.toLowerCase())
  // });

  return (
    <InputContainer>
      <input
        type="text"
        placeholder="Have a Question? Search For Answers"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        type="button"
        onClick={() => {
          // setQuery(input);
        }}
      >Go!
      </button>
    </InputContainer>
  );
};

export default SearchAnswers;
