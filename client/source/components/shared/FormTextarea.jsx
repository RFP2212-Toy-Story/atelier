import React from 'react';
import styled from 'styled-components';

const FormTextarea = function CreateFormTextarea({
  labelText, name, value, placeholder, onChange, disclaimerText, maxLength = '1000'
}) {
  return (
    <>
      <label htmlFor={name}>{labelText}
        <Textarea
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          rows="5"
          cols="62"
        />
      </label>
      {disclaimerText && (<Paragraph>{disclaimerText}</Paragraph>)}
    </>
  );
};

const Textarea = styled.textarea`
  font-family: inherit;
  width: 100%;
`;

const Paragraph = styled.p`
  font-size: 75%;
`;

export default FormTextarea;
